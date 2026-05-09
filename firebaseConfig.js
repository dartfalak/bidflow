// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPZVbfzvBKtyM3JoGyLgsgI7mU53QFpa0",
  authDomain: "bidflow-82f6c.firebaseapp.com",
  projectId: "bidflow-82f6c",
  storageBucket: "bidflow-82f6c.firebasestorage.app",
  messagingSenderId: "530618538215",
  appId: "1:530618538215:web:a0e1d9a7e59e08438b6a42",
  measurementId: "G-RJSM4LH6DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);