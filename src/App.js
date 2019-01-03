import React from "react";
import { Container, Header, Title, Body } from "./styledComponents/App";
import { Route } from "react-router-dom";
import Summary from "./components/summary";
import Detail from "./components/detail";
import Create from "./components/create";
import firebase from "./Firestore";

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
          <a href="/create">+</a>
          <Title>Da Tribe Times</Title>
          <a href="/">Login</a>
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
          <Route exact path="/create" component={Create} />
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

// Create user accounts
// When user Joins Tribe add as attendee
// Form to create event
// Form to edit event
// Bold and Italics dont work on editor
