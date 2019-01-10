import React, { Component } from "react";
import moment from "moment";
import {
  Container,
  Title,
  Sub,
  Sidebar,
  Button,
  Aa,
  TextArea,
  ListItem
} from "../styledComponents/detail";
import firebase, { auth } from "../Firestore";
import "react-quill/dist/quill.snow.css";

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

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    const id = this.props.match.params.id;
    const event = this.props.event[id];
    console.log("Event: ", event);
    this.setState(event);
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }
  handleInputChange = value => {
    this.setState({ description: value });
  };
  joinTribe = () => {
    // Add attendee to db and to local storage
    // Update attendees array
    const attendees = this.state.attendees || [];
    const This = this;
    if (attendees.includes(this.state.user.displayName)) {
      alert("Already joined.");
    } else {
      attendees.push(this.state.user.displayName);
      // Update database
      const db = firebase.firestore();
      db.collection("events")
        .doc(this.state.id)
        .update({
          attendees: attendees
        })
        .then(function() {
          console.log("Event Updated");
          This.setState({ attendees });
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
          alert("Error updating event. Please try again.");
        });
    }
  };
  render() {
    return (
      <Container className="Detail">
        <Title>{this.state.title}</Title>
        <Sidebar>
          <Sub>{moment(this.state.date).format("ddd M/D/YYYY - h:mm a")}</Sub>
          <Sub>{this.state.location}</Sub>
          <Sub>Host: {this.state.creator}</Sub>
          <Sub>Attendees:</Sub>
          {!this.state.attendees ? (
            <ListItem type="circle">None</ListItem>
          ) : (
            this.state.attendees.map(attendee => {
              return <ListItem type="circle">{attendee}</ListItem>;
            })
          )}
          {!this.state.moreurl ? null : (
            <Button>
              <Aa
                href={this.state.moreurl}
                target="_blank"
                rel="noopener noreferrer"
              >
                More Info
              </Aa>
            </Button>
          )}
          {this.state.user ? (
            <Button onClick={this.joinTribe}>
              <Aa
                href={this.state.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join this Tribe
              </Aa>
            </Button>
          ) : (
            <Button onClick={this.joinTribe} style={{ cursor: "not-allowed" }}>
              Sign In to Join
            </Button>
          )}
        </Sidebar>
        <TextArea
          readOnly
          formats={formats}
          modules={modules}
          placeholder="No description for this event yet. Check back soon."
          value={this.state.description}
          onChange={this.handleInputChange}
        />
      </Container>
    );
  }
}

export default Detail;
