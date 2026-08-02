console.log("Jobs Page");

const jobsContainer = document.getElementById("jobsContainer");

// Logged In User
const loggedUser = JSON.parse(localStorage.getItem("user"));

// Load Jobs
fetch("http://localhost:5000/api/jobs")

.then(response => response.json())

.then(jobs => {

    jobsContainer.innerHTML = "";

    jobs.forEach(job => {

        jobsContainer.innerHTML += `

        <div class="job-box">

            <h3>${job.jobTitle}</h3>

            <p><strong>Company:</strong> ${job.company}</p>

            <p><strong>Location:</strong> ${job.location}</p>

            <p><strong>Salary:</strong> ${job.salary}</p>

            <p>${job.description}</p>

            <button class="applyBtn" data-id="${job._id}">
                Apply Now
            </button>

        </div>

        `;

    });

    // Apply Button
    const applyButtons = document.querySelectorAll(".applyBtn");

    applyButtons.forEach(button => {

        button.addEventListener("click", function(){

            if(!loggedUser){

                alert("Please Login First");

                window.location.href = "login.html";

                return;

            }

            const jobId = this.dataset.id;

            fetch("http://localhost:5000/api/applications/apply",{

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({

                    userId:loggedUser._id,

                    jobId:jobId

                })

            })

            .then(response=>response.json())

            .then(data=>{

                alert(data.message);

            })

            .catch(error=>{

                console.log(error);

                alert("Application Failed");

            });

        });

    });

})

.catch(error => {

    console.log(error);

    alert("Unable to Load Jobs");

});

// Search
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