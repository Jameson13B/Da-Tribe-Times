import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #F2D2A9;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  margin: 15px auto;
  padding: 15px;
  text-align: start;
  width 500px;
`;
const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
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

const Summary = props => {
  return (
    <Container className="Summary">
      <Title>{props.event.title}</Title>
      <Sub>Date of Event</Sub>
      <Sub>{props.event.location}</Sub>
      <Sub>{props.event.creator}</Sub>
    </Container>
  );
};

export default Summary;
