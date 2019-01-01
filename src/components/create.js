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

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    const event = this.props.event[id];
    this.setState({ event });
  }
  handleInputChange = e => {
    const event = this.state.event;
    event.description = e.htmlValue;
    this.setState({ event });
  };
  render() {
    return (
      <Container className="Detail">
        <Title>{this.state.title}</Title>
        <Sidebar>
          <Sub>{moment(this.state.date).format("ddd M/D/YYYY - h:mm a")}</Sub>
          <Sub>{this.state.location}</Sub>
          <Sub>Host: {this.state.creator}</Sub>
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
          onChange={this.handleInputChange}
        />
      </Container>
    );
  }
}

export default Create;
