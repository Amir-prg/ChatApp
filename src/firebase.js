import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCnbva9-1SKvqKqYvg2rYXavV_9Ht3luGw",
    authDomain: "botogram-app.firebaseapp.com",
    projectId: "botogram-app",
    storageBucket: "botogram-app.appspot.com",
    messagingSenderId: "999420741035",
    appId: "1:999420741035:web:d7e6327a08c6058fbb3eee"
  })
  .auth();
