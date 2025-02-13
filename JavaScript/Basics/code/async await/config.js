// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSiiLQbYtSQT-Mjh6N0-TL91mo28mW8N4",
  authDomain: "tetris-89c7b.firebaseapp.com",
  databaseURL: "https://tetris-89c7b.firebaseio.com",
  projectId: "tetris-89c7b",
  storageBucket: "tetris-89c7b.appspot.com",
  messagingSenderId: "661421585737",
  appId: "1:661421585737:web:a37080d9b4944ca9725698",
  measurementId: "G-906WBRX25W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { app, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, db };
