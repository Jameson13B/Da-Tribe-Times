import React from "react";
import styled from "styled-components";
import Summary from "./components/summary";
import firebase from "./Firestore";

const Container = styled.div``;
const Header = styled.header`
  background-color: #572900;
  min-height: 3rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;
const Title = styled.h1`
  font-size: 2rem;
`;

const Body = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 15px 0;
  text-align: center;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      events: ["Event 1", "Event 2"],
      user: {}
    };
  }
  componentDidMount() {
    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });
    db.collection("events")
      .get()
      .then(res => {
        let events = [];
        res.forEach(doc => {
          events.push(doc.data());
        });
        this.setState({ events });
      });
  }
  render() {
    return (
      <Container className="App">
        <Header className="App-header">
          <Title>Da Tribe Times</Title>
        </Header>
        <Body>
          <br />
          <p style={{ fontSize: "1rem" }}>
            Da Tribe Times provides a platform to list events and details to
            gather and enjoy good people, good vibes, good music, and good food.
            Please visit us frequently to stay up to date and join us!
          </p>
          <br />
          {!this.state.events.length ? (
            <p>No Events At This Time</p>
          ) : (
            this.state.events.map(event => {
              return <Summary event={event} />;
            })
          )}
          <h1 style={{ fontSize: "1rem" }}>More Coming Soon!</h1>
        </Body>
      </Container>
    );
  }
}

export default App;
