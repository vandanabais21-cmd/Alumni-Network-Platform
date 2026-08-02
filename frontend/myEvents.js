const loggedUser = JSON.parse(localStorage.getItem("user"));

const container = document.getElementById("eventContainer");

fetch(`http://localhost:5000/api/event-registration/user/${loggedUser._id}`)

.then(response=>response.json())

.then(data=>{

container.innerHTML="";

if(data.length===0){

container.innerHTML="<h2>No Registered Events</h2>";

return;

}

data.forEach(reg=>{

container.innerHTML+=`

<div class="card">

<h2>${reg.eventId.title}</h2>

<p><b>Date :</b> ${reg.eventId.date}</p>

<p><b>Location :</b> ${reg.eventId.location}</p>

<p>${reg.eventId.description}</p>

</div>

`;

});

})

.catch(error=>{

console.log(error);

alert("Unable to Load Events");

});