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

import { auth } from "./auth.js";
console.log(auth);  

import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "./auth.js";

createUserWithEmailAndPassword(auth, "test@gmail.com", "123456")
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created:", user);
    })