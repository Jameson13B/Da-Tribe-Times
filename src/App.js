import React from "react";
import {
  Container,
  Header,
  Title,
  Body,
  ProfileImg,
  SignInButton
} from "./styledComponents/app";
import { Route, Link } from "react-router-dom";
import Summary from "./components/summary";
import Detail from "./components/detail";
import Create from "./components/create";
import firebase, { auth, provider } from "./Firestore";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      user: null
    };
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
    const db = firebase.firestore();
    db.collection("events")
      .get()
      .then(res => {
        let events = [];
        res.forEach(doc => {
          let event = doc.data();
          event.id = doc.id;
          events.push(event);
        });
        this.setState({ events });
      });
  }
  updateEvents = events => {
    this.setState({ events });
  };
  renderList = () => {
    return !this.state.events.length ? (
      <p>No Events At This Time</p>
    ) : (
      this.state.events.map((event, i) => {
        return <Summary event={event} index={i} key={i} />;
      })
    );
  };
  login = () => {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({ user });
    });
  };
  logout = () => {
    auth.signOut().then(() => {
      this.setState({ user: null });
    });
  };
  render() {
    return (
      <Container className="App">
        <Header className="App-header">
          <Title>Da Tribe Times</Title>
          {this.state.user ? <Link to="/create">Create</Link> : null}
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
            path="/create"
            render={props => (
              <Create
                {...props}
                events={this.state.events}
                updateEvents={this.updateEvents}
              />
            )}
          />
          <Route
            path="/event/:id"
            render={props => <Detail {...props} event={this.state.events} />}
          />
        </Body>
        {this.state.user ? (
          <ProfileImg
            src={this.state.user.photoURL}
            alt="user-profile"
            onClick={() => {
              let logout = window.confirm("Are you sure you want to logout?");
              if (logout) {
                this.logout();
              }
            }}
          />
        ) : (
          <SignInButton onClick={this.login}>
            <img
              alt="google_logo"
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            />
            <p>Sign in with Google</p>
          </SignInButton>
        )}
      </Container>
    );
  }
}

export default App;

// Form to edit event
// Bold and Italics dont work on editor
