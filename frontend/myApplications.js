const loggedUser = JSON.parse(localStorage.getItem("user"));

const container = document.getElementById("applicationContainer");

fetch(`http://localhost:5000/api/applications/user/${loggedUser._id}`)

.then(response=>response.json())

.then(data=>{

container.innerHTML="";

data.forEach(application=>{

container.innerHTML +=`

<div class="card">

<h2>${application.jobId.jobTitle}</h2>

<p><b>Company :</b> ${application.jobId.company}</p>

<p><b>Location :</b> ${application.jobId.location}</p>

<p><b>Salary :</b> ${application.jobId.salary}</p>

<p>${application.jobId.description}</p>

</div>

`;

});

})

.catch(error=>{

console.log(error);

alert("Unable to Load Applications");

});