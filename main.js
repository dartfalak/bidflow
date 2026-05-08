const modal = document.getElementById("signin-modal");
const closeBtn = document.querySelector(".close-btn");

const authButtons = document.querySelectorAll(".trigger-auth");

authButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        