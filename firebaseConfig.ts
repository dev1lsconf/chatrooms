// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJyoqwPyBqxU1p39eMALDO-1IM4l2r8Y0",
  authDomain: "chat-dev1ls.firebaseapp.com",
  projectId: "chat-dev1ls",
  storageBucket: "chat-dev1ls.appspot.com",
  messagingSenderId: "789382506646",
  appId: "1:789382506646:web:0df50d06960c8335d87ab7",
  measurementId: "G-0QERZNQ5RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig) 
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, db, auth, provider };
