console.log("Profile Page");

// Profile Data Show
const savedUser = JSON.parse(localStorage.getItem("user"));

if(savedUser){

document.getElementById("profileName").innerHTML = savedUser.fullName;

document.getElementById("profileEmail").innerHTML = savedUser.email;

document.getElementById("profileBranch").innerHTML = savedUser.branch;

document.getElementById("profileYear").innerHTML = savedUser.year;

}else{

alert("Please Login First!");

window.location.href = "login.html";

}

// Logout
const logoutBtn = document.getElementById("logoutBtn");

if(logoutBtn){

logoutBtn.addEventListener("click", function(e){

e.preventDefault();

localStorage.removeItem("user");

alert("Logout Successful!");

window.location.href = "login.html";

});

}

// edit button

const editBtn = document.getElementById("editBtn");
const editForm = document.getElementById("editForm");
const saveBtn = document.getElementById("saveBtn");

if(editBtn){

editBtn.addEventListener("click", function(){

editForm.style.display = "block";

document.getElementById("editName").value = savedUser.fullName;
document.getElementById("editBranch").value = savedUser.branch;
document.getElementById("editYear").value = savedUser.year;

});

}

if(saveBtn){

saveBtn.addEventListener("click", function(){

savedUser.fullName = document.getElementById("editName").value;

savedUser.branch = document.getElementById("editBranch").value;

savedUser.year = document.getElementById("editYear").value;

localStorage.setItem("user", JSON.stringify(savedUser));

alert("Profile Updated Successfully!");

location.reload();

});

}