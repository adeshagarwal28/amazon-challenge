// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBLUYEgc8ZCnJVmpziNfpXZhnfoLrj02nI",
  authDomain: "challenge-20ad2.firebaseapp.com",
  projectId: "challenge-20ad2",
  storageBucket: "challenge-20ad2.appspot.com",
  messagingSenderId: "743073953663",
  appId: "1:743073953663:web:54a8fe5b1907ca22468c4a",
  measurementId: "G-DEJQPYNSZV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
