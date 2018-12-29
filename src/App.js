import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Summary from "./components/summary";
import Detail from "./components/detail";
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
      events: [],
      user: {}
    };
  }
  componentDidMount() {
    const db = firebase.firestore();
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
  renderList = () => {
    return !this.state.events.length ? (
      <p>No Events At This Time</p>
    ) : (
      this.state.events.map((event, i) => {
        return <Summary event={event} index={i} key={i} />;
      })
    );
  };
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

          <Route exact path="/" component={this.renderList} />
          <Route
            path="/event/:id"
            render={props => <Detail {...props} event={this.state.events} />}
          />
        </Body>
      </Container>
    );
  }
}

export default App;
