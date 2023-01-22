import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDaiWfmcK3OjYLOg0H7013Ylqx7QwmoePg",
    authDomain: "e-ride-df1e0.firebaseapp.com",
    projectId: "e-ride-df1e0",
    storageBucket: "e-ride-df1e0.appspot.com",
    messagingSenderId: "248253219219",
    appId: "1:248253219219:web:fc86ec33164e0ae034e866",
    measurementId: "G-EB7M8TM8GX"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
