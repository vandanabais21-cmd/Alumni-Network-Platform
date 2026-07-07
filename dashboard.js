console.log("Dashboard Page");

const welcomeMessage = document.getElementById("welcomeMessage");

if(welcomeMessage){

const savedUser = JSON.parse(localStorage.getItem("user"));

if(savedUser){

welcomeMessage.innerHTML = "Welcome " + savedUser.fullName;

}else{

window.location.href = "login.html";

}

}

const logoutBtn = document.getElementById("logoutBtn");

if(logoutBtn){

logoutBtn.addEventListener("click", function(e){

e.preventDefault();

localStorage.removeItem("user");

alert("Logout Successful!");

window.location.href = "login.html";

});

}