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

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {}
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    const event = this.props.event[id];
    this.setState({ event });
  }
  render() {
    return (
      <Container className="Detail">
        <Title>{this.state.event.title}</Title>
        <Sidebar>
          <Sub>
            {moment(this.state.event.date).format("ddd M/D/YYYY - h:mm a")}
          </Sub>
          <Sub>{this.state.event.location}</Sub>
          <Sub>Host: {this.state.event.creator}</Sub>
          <Sub>Attendees:</Sub>
          {!this.state.event.attendees ? (
            <ListItem type="circle">None</ListItem>
          ) : (
            this.state.event.attendees.map(attendee => {
              return <ListItem type="circle">{attendee}</ListItem>;
            })
          )}
          {!this.state.event.moreurl ? null : (
            <Button>
              <Aa
                href={this.state.event.moreurl}
                target="_blank"
                rel="noopener noreferrer"
              >
                More Info
              </Aa>
            </Button>
          )}
          <Button>
            <Aa
              href={this.state.event.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join this Tribe
            </Aa>
          </Button>
        </Sidebar>
        <TextArea
          disabled
          placeholder="No description for this event."
          value={this.state.event.description}
        />
      </Container>
    );
  }
}

export default Detail;
