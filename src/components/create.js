import React, { Component } from "react";
import moment from "moment";
import {
  Container,
  Title,
  Sub,
  Sidebar,
  Button,
  TextArea,
  DateTime,
  FormImg,
  PBlurb
} from "../styledComponents/create";
import "react-quill/dist/quill.snow.css";
import "../styledComponents/react-datetime.css";
import formPhoto from "../images/form.png";
import firebase, { auth } from "../Firestore";

const formats = [
  "header",
  "font",
  "bold",
  "italics",
  "underline",
  "list",
  "bullet",
  "link",
  "image",
  "video"
];
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"]
  ]
};

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      date: null,
      location: null,
      url: null,
      moreUrl: null,
      description: null,
      creator: null
    };
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ creator: user.displayName });
      }
    });
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  saveEvent(event) {
    let events = this.props.events;
    events.push(event);
    this.props.updateEvents(events);
    if (Object.values(event).includes(null)) {
      alert("Title, date, location, and url are required fields.");
    } else {
      const db = firebase.firestore();
      db.collection("events")
        .add(event)
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
          alert("Error saving event. Please try again.");
        });
      this.props.history.push("/");
    }
  }
  render() {
    let event = {
      title: this.state.title,
      date: this.state.date,
      location: this.state.location,
      url: this.state.url,
      moreUrl: this.state.moreUrl || "",
      description: this.state.description || "",
      creator: this.state.creator
    };
    return (
      <Container className="Detail">
        <Title
          name="title"
          onChange={this.handleInputChange}
          placeholder="Event Title"
          value={this.state.title}
        />
        <Sidebar>
          <DateTime
            defaultValue={moment()}
            name="date"
            onChange={e => this.setState({ date: e._d })}
            type="datetime-local"
            value={this.state.date}
          />
          <Sub
            name="location"
            onChange={this.handleInputChange}
            placeholder="Location(City, State or Business)"
            value={this.state.location}
          />
          <Sub
            readOnly
            name="host"
            onClick={() => alert("Cannot edit host.")}
            value={`Host: ${this.state.creator}`}
          />
          <Button
            onClick={e => {
              this.saveEvent(event);
            }}
          >
            Save Event
          </Button>
          <Sub
            name="url"
            onChange={this.handleInputChange}
            placeholder="Survey URL"
            value={this.state.url}
          />
          <PBlurb>
            For the above URL, go to{" "}
            <a href="https://docs.google.com/forms/">Google Forms</a> and create
            a new form. This is where you will collect participants name,
            contact info, meal preference, shirt size, or any other RSVP type
            information. When finished click SEND and copy a shorten link to be
            pasted above. See image below for details.
          </PBlurb>
          <PBlurb>
            We recommend as you receive responses you follow up with a thank
            you/welcome to participants.
          </PBlurb>
          <FormImg alt="form screenshot" src={formPhoto} />
        </Sidebar>
        <TextArea
          formats={formats}
          modules={modules}
          placeholder="Event description goes here. Include all the details you can
          to make it easier for others to attend."
          value={this.state.description}
          onChange={value => {
            this.setState({ description: value });
          }}
        />
      </Container>
    );
  }
}

export default Create;
