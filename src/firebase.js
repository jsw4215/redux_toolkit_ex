import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBD9VmQaLuQTUcXG2UmqiXDJkDCS48Rn2k",
  authDomain: "my-dictionary-d9706.firebaseapp.com",
  projectId: "my-dictionary-d9706",
  storageBucket: "my-dictionary-d9706.appspot.com",
  messagingSenderId: "263301906056",
  appId: "1:263301906056:web:23ad56d545e316cfc0a93d",
  measurementId: "G-KBV1FV31GR"
};

initializeApp(firebaseConfig);

export const db = getFirestore();