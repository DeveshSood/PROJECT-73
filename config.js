import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCtWX_GxhWQsn9bqdCWd6gDzSY0Ifq0WIA",
  authDomain: "book-a-cycle.firebaseapp.com",
  projectId: "book-a-cycle",
  storageBucket: "book-a-cycle.appspot.com",
  messagingSenderId: "310206084320",
  appId: "1:310206084320:web:9f8b98b50bd840ebaa0c85"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

