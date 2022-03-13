import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDbvoVU6knfc6xicWpjyUUquBoj7xNKj3k",
  authDomain: "line-clome.firebaseapp.com",
  projectId: "line-clome",
  storageBucket: "line-clome.appspot.com",
  messagingSenderId: "186904791423",
  appId: "1:186904791423:web:6ad13a9beb0343a85a724a",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
