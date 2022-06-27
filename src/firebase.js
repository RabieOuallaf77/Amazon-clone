// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase";
import firebase from "./firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0iTNJHefx1IWu9_kiUM6EAK7fF9YBU1s",
  authDomain: "clone-dae89.firebaseapp.com",
  projectId: "clone-dae89",
  storageBucket: "clone-dae89.appspot.com",
  messagingSenderId: "425260621697",
  appId: "1:425260621697:web:7ce6fd80547e7f66c5d280",
  measurementId: "G-4BMB66TVJR"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);


const db = fireBaseApp.fireStore();
const auth = firebase.auth();

export { db,auth};