
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAPZVbfzvBKtyM3JoGyLgsgI7mU53QFpa0",
  authDomain: "bidflow-82f6c.firebaseapp.com",
  projectId: "bidflow-82f6c",
  storageBucket: "bidflow-82f6c.firebasestorage.app",
  messagingSenderId: "530618538215",
  appId: "1:530618538215:web:a0e1d9a7e59e08438b6a42",
  measurementId: "G-RJSM4LH6DP"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth(app);

let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
let msg = document.querySelector("#msg");
let enter = document.querySelector("#signin-btn");


enter.addEventListener("click", function (e) {

  
  e.preventDefault();

  signInWithEmailAndPassword(auth, email.value, pass.value)

    .then(() => {
      msg.innerText = "Sign In Successful";
      msg.style.color = "green";
    })

    .catch((error) => {
      msg.innerText = error.message;
      msg.style.color = "red";
    });

});