console.log("Alumni Login Page");

const alumniLoginForm = document.getElementById("alumniLoginForm");

if(alumniLoginForm){

alumniLoginForm.addEventListener("submit", function(e){

e.preventDefault();

let email = document.getElementById("alumniEmail").value.trim();

let password = document.getElementById("alumniPassword").value.trim();

if(email=="" || password==""){

alert("Please Fill All Fields");
return;

}

if(password.length < 8){

alert("Password must be at least 8 characters.");
return;

}

alert("Alumni Login Successful!");

alumniLoginForm.reset();

});

}