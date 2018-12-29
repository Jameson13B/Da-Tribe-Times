import React from "react";
import moment from "moment";
import { Container, NewLink, Title, Sub } from "../styledComponents/summary";

const Summary = props => {
  return (
    <Container className="Summary">
      <NewLink to={`/event/${props.index}`}>
        <Title>{props.event.title}</Title>
        <Sub>{moment(props.event.date).format("ddd M/D/YYYY - h:mm a")}</Sub>
        <Sub>{props.event.location}</Sub>
        <Sub>Host: {props.event.creator}</Sub>
      </NewLink>
    </Container>
  );
};

export default Summary;
