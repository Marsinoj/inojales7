// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyB255-JbTzQVJzkF76oCCnrpgiEmNuFglc",
  authDomain: "inojales7-9f8c3.firebaseapp.com",
  projectId: "inojales7-9f8c3",
  storageBucket: "inojales7-9f8c3.appspot.com",
  messagingSenderId: "829433199620",
  appId: "1:829433199620:web:01963a9800589570264951"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
