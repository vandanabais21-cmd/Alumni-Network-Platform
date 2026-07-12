console.log("Register Page");

const registerForm = document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit", function(e){

e.preventDefault();

let fullName = document.getElementById("fullName").value.trim();
let email = document.getElementById("email").value.trim();
let branch = document.getElementById("branch").value.trim();
let year = document.getElementById("year").value.trim();
let password = document.getElementById("password").value.trim();

if(fullName=="" || email=="" || branch=="" || year=="" || password==""){

alert("Please Fill All Fields");
return;

}

if(password.length < 8){

alert("Password must be at least 8 characters.");
return;

}

const user = {

fullName: fullName,
email: email,
branch: branch,
year: year,
password: password

};

localStorage.setItem("user", JSON.stringify(user));

showToast("Registration Successful!");

registerForm.reset();

});

}