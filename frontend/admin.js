if(localStorage.getItem("adminLoggedIn")!=="true"){

    alert("Admin Login Required");

    window.location.href="admin-login.html";

}

fetch("http://localhost:5000/api/admin/stats")

.then(response=>response.json())

.then(data=>{

document.getElementById("users").innerHTML=data.totalUsers;

document.getElementById("jobs").innerHTML=data.totalJobs;

document.getElementById("applications").innerHTML=data.totalApplications;

document.getElementById("events").innerHTML=data.totalEvents;

document.getElementById("feedback").innerHTML=data.totalFeedback;

})

.catch(error=>{

console.log(error);

alert("Unable to Load Dashboard");

});

const logout=document.getElementById("logoutAdmin");

logout.addEventListener("click",function(){

    localStorage.removeItem("adminLoggedIn");

    window.location.href="admin-login.html";

});

// Load All Users

fetch("http://localhost:5000/api/admin/users")

.then(response => response.json())

.then(users => {

    const container = document.getElementById("usersContainer");

    container.innerHTML = "";

    users.forEach(user => {

        container.innerHTML += `

        <div class="card">

            <h3>${user.fullName}</h3>

            <p>${user.email}</p>

            <p>${user.branch}</p>

            <p>${user.passoutYear}</p>

            <button onclick="deleteUser('${user._id}')">
                Delete User
            </button>

        </div>

        `;

    });

});

// Load All Jobs

fetch("http://localhost:5000/api/admin/jobs")

.then(response => response.json())

.then(jobs => {

    const container = document.getElementById("jobsContainer");

    container.innerHTML = "";

    jobs.forEach(job => {

        container.innerHTML += `

        <div class="card">

            <h3>${job.jobTitle}</h3>

            <p><b>Company:</b> ${job.company}</p>

            <p><b>Location:</b> ${job.location}</p>

            <p><b>Salary:</b> ${job.salary}</p>

            <p>${job.description}</p>

            <button onclick="deleteJob('${job._id}')">
                Delete Job
            </button>

        </div>

        `;
    });

});

// Load All Applications

fetch("http://localhost:5000/api/admin/applications")

.then(response => response.json())

.then(applications => {

    const container = document.getElementById("applicationsContainer");

    container.innerHTML = "";

    applications.forEach(application => {

        container.innerHTML += `

        <div class="card">

            <h3>${application.userId.fullName}</h3>

            <p><b>Job:</b> ${application.jobId.jobTitle}</p>

            <p><b>Company:</b> ${application.jobId.company}</p>

            <p><b>Applied:</b> ${new Date(application.appliedAt).toLocaleDateString()}</p>

        </div>

        `;

    });

});

// Load All Events

fetch("http://localhost:5000/api/admin/events")

.then(response => response.json())

.then(events => {

    const container = document.getElementById("eventsContainer");

    container.innerHTML = "";

    events.forEach(event => {

         container.innerHTML += `

        <div class="card">

            <h3>${event.title}</h3>

            <p><b>Date:</b> ${event.date}</p>

            <p><b>Location:</b> ${event.location}</p>

            <p>${event.description}</p>

            <button onclick="deleteEvent('${event._id}')">
                Delete Event
            </button>

        </div>

        `;

    });

});

// Load All Feedback

fetch("http://localhost:5000/api/admin/feedback")

.then(response => response.json())

.then(feedbacks => {

    const container = document.getElementById("feedbackContainer");

    container.innerHTML = "";

    feedbacks.forEach(feedback => {

        container.innerHTML += `

        <div class="card">

            <h3>${feedback.name}</h3>

            <p><b>Email:</b> ${feedback.email}</p>

            <p>${feedback.message}</p>

            <button onclick="deleteFeedback('${feedback._id}')">
                Delete Feedback
            </button>

        </div>

        `;

    });

})

.catch(error => console.log(error));

function deleteUser(id){

    if(confirm("Are you sure you want to delete this user?")){

        fetch(`http://localhost:5000/api/admin/users/${id}`,{

            method:"DELETE"

        })

        .then(response => response.json())

        .then(data => {

            alert(data.message);

            location.reload();

        })

        .catch(error => console.log(error));

    }

}

function deleteJob(id){

    if(confirm("Delete this job?")){

        fetch(`http://localhost:5000/api/admin/jobs/${id}`,{

            method:"DELETE"

        })

        .then(response=>response.json())

        .then(data=>{

            alert(data.message);

            location.reload();

        })

        .catch(error=>console.log(error));

    }

}

function deleteEvent(id){

    if(confirm("Delete this event?")){

        fetch(`http://localhost:5000/api/admin/events/${id}`,{

            method:"DELETE"

        })

        .then(response=>response.json())

        .then(data=>{

            alert(data.message);

            location.reload();

        })

        .catch(error=>console.log(error));

    }

}

function deleteFeedback(id){

    if(confirm("Delete this feedback?")){

        fetch(`http://localhost:5000/api/admin/feedback/${id}`,{

            method:"DELETE"

        })

        .then(response => response.json())

        .then(data => {

            alert(data.message);

            location.reload();

        })

        .catch(error => console.log(error));

    }

}