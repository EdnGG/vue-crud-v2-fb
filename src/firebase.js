import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjz1nWZNHUHenx7_HmZn_xWj77vc_yQeI",
  authDomain: "vue-crud-v2.firebaseapp.com",
  databaseURL: "https://vue-crud-v2.firebaseio.com",
  projectId: "vue-crud-v2",
  storageBucket: "vue-crud-v2.appspot.com",
  messagingSenderId: "587351000256",
  appId: "1:587351000256:web:2549c53c8d1146c6201925",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
