console.log("Jobs Page");

const jobSearch = document.getElementById("jobSearch");

if(jobSearch){

jobSearch.addEventListener("keyup",()=>{

let filter = jobSearch.value.toLowerCase();

let jobs = document.querySelectorAll(".job-box");

jobs.forEach(job=>{

let title = job.querySelector("h3").innerText.toLowerCase();

if(title.includes(filter)){

job.style.display="block";

}else{

job.style.display="none";

}

});

});

}