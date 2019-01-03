import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAO8MkePh84Bxvkj9LKTjamQMakSkqVbbA",
  authDomain: "da-tribe-time.firebaseapp.com",
  databaseURL: "https://da-tribe-time.firebaseio.com",
  projectId: "da-tribe-time",
  storageBucket: "da-tribe-time.appspot.com",
  messagingSenderId: "905795799121"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
