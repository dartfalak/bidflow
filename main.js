

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyAPZVbfzvBKtyM3JoGyLgsgI7mU53QFpa0",
  authDomain: "bidflow-82f6c.firebaseapp.com",
  projectId: "bidflow-82f6c",
  storageBucket: "bidflow-82f6c.firebasestorage.app",
  messagingSenderId: "530618538215",
  appId: "1:530618538215:web:a0e1d9a7e59e08438b6a42",
  measurementId: "G-RJSM4LH6DP"
};

import { getAuth} from "firebase/auth";
import { app } from "./firebaseConfig.js";

export const auth = getAuth(app);



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const modal = document.getElementById("signin-modal");
const closeBtn = document.querySelector(".close-btn");

const authButtons = document.querySelectorAll(".trigger-auth");


authButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "block";
    });
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
let msg = document.querySelector("#msg");
let enter = document.querySelector("#signin-btn");


enter.addEventListener("click",function(){

  signInWithEmailAndPassword(auth,email.value,pass.value)
  .then(()=>{
       msg.innerText="Sign In Successful"
       msg.style.color = "green";
       
  })
  .catch(()=>{
    msg.innerText="Wrong Password or Email"
    msg.style.color = "red";
  })
})