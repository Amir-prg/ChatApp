import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDRE9z7KW-LyRRh5Qa5-MyuXbb181-IbdE",
    authDomain: "botogram-abbc4.firebaseapp.com",
    projectId: "botogram-abbc4",
    storageBucket: "botogram-abbc4.appspot.com",
    messagingSenderId: "331709372830",
    appId: "1:331709372830:web:493812a421ce53e233de8f",
    measurementId: "G-BPS2WGH7QK",
  })
  .auth();
