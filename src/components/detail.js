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
  handleInputChange = value => {
    this.setState({ description: value });
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
          <Button>
            <Aa href={this.state.url} target="_blank" rel="noopener noreferrer">
              Join this Tribe
            </Aa>
          </Button>
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
