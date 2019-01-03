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
  DateTime
} from "../styledComponents/create";
import "react-quill/dist/quill.snow.css";
import "../styledComponents/react-datetime.css";

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
      title: "",
      date: "",
      location: "",
      url: "",
      moreUrl: "",
      description: ""
    };
  }
  componentDidMount() {}
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
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
          <Button>
            <Aa href={this.state.url} target="_blank" rel="noopener noreferrer">
              Save Event
            </Aa>
          </Button>
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
