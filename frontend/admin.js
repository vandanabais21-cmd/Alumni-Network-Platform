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