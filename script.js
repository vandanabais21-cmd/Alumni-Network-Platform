console.log("Alumni Network Platform");
const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

let filter =
searchInput.value.toLowerCase();

let cards =
document.querySelectorAll(".alumni-card");

cards.forEach(card=>{

let name =
card.querySelector("h3")
.innerText
.toLowerCase();

if(name.includes(filter)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

const form =
document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const message =
document.getElementById("message").value;

if(
name === "" ||
email === "" ||
message === ""
){

alert(
"Please Fill All Fields"
);

}else{

alert(
"Message Sent Successfully"
);

form.reset();

}

});

}

const jobSearch =
document.getElementById("jobSearch");

if(jobSearch){

jobSearch.addEventListener("keyup",()=>{

let filter =
jobSearch.value.toLowerCase();

let jobs =
document.querySelectorAll(".job-box");

jobs.forEach(job=>{

let title =
job.querySelector("h3")
.innerText
.toLowerCase();

if(title.includes(filter)){

job.style.display="block";

}else{

job.style.display="none";

}

});

});

}

