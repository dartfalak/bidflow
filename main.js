
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