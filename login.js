console.log("Login Page");

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit", function(e){

e.preventDefault();

let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value.trim();

if(email=="" || password==""){

alert("Please Fill All Fields");
return;

}

if(password.length < 8){

alert("Password must be at least 8 characters.");
return;

}

const savedUser = JSON.parse(localStorage.getItem("user"));

if(savedUser &&
savedUser.email===email &&
savedUser.password===password){

alert("Login Successful!");

window.location.href="dashboard.html";

loginForm.reset();

}else{

alert("Invalid Email or Password");

}

});

}