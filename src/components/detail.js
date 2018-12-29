import React, { Component } from "react";
import moment from "moment";
import styled from "styled-components";

const Container = styled.div`
  background: #f2d2a9;
  border-radius: 5px;
  display: flex;
  height: 75vh;
  flex-wrap: wrap;
  margin: 15px auto;
  padding: 15px;
  text-align: start;
  width: 768px;
`;
const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  height: 5%;
  margin-bottom: 10px;
  width: 100%;
`;
const Sub = styled.h1`
  font-size: 1rem;
  font-style: italic;
  margin-bottom: 10px;
  width: 100%;
  &:last-child {
    margin-bottom: 0px;
  }
`;
const Sidebar = styled.div`
  height: 94%;
  width: 35%;
`;
const TextArea = styled.textarea`
  margin-left: 2%;
  width: 62%;
`;

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
          <Sub>{this.state.event.creator}</Sub>
        </Sidebar>
        <TextArea />
      </Container>
    );
  }
}

export default Detail;
