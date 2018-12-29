import React, { Component } from "react";

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
      <div>
        <h1>{this.state.event.title}</h1>
      </div>
    );
  }
}

export default Detail;
