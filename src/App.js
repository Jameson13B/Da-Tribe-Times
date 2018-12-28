import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
`
const Header = styled.header`
  background-color: #572900;
  min-height: 3rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`
const Title = styled.h1`
  font-size: 1.5rem;
`

const Body = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 15px 0;
  text-align: center;
`

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Header className="App-header">
          <Title>Da Tribe Times</Title>
        </Header>
        <Body>
          <h1 style={{ fontSize: "1rem" }}>More Coming Soon!</h1>
          <br />
          <p>Da Tribe Times provides a platform to list events and details for people to gather and enjoy good people,
            good vibes, good music, and good food. Please visit us frequently to stay up to date and join us!</p>
        </Body>
      </Container>
    );
  }
}

export default App;
