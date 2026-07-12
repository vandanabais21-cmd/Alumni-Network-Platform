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

if(logoutBtn){

logoutBtn.addEventListener("click", function(e){

e.preventDefault();

localStorage.removeItem("user");

alert("Logout Successful!");

window.location.href = "login.html";

});

}

// Dashboard Statistics

const jobCount = document.getElementById("jobCount");
const eventCount = document.getElementById("eventCount");

if(jobCount){

    jobCount.innerHTML = localStorage.getItem("jobs") || 0;

}

if(eventCount){

    eventCount.innerHTML = localStorage.getItem("events") || 0;

}
const chart = document.getElementById("dashboardChart");

if(chart){

    new Chart(chart,{

        type:"bar",

        data:{

            labels:["Applied Jobs","Registered Events"],

            datasets:[{

                label:"Statistics",

                data:[

                    Number(localStorage.getItem("jobs")) || 0,

                    Number(localStorage.getItem("events")) || 0

                ]

            }]

        }

    });

}

const notificationCount = document.getElementById("notificationCount");

if(notificationCount){

    let jobs = Number(localStorage.getItem("jobs")) || 0;

    let events = Number(localStorage.getItem("events")) || 0;

    notificationCount.innerHTML = jobs + events;

}

const notificationBtn = document.getElementById("notificationBtn");

const notificationBox = document.getElementById("notificationBox");

const notificationList = document.getElementById("notificationList");

if(notificationBtn){

    notificationBtn.addEventListener("click",function(e){

        e.preventDefault();

        if(notificationBox.style.display==="none"){

            notificationBox.style.display="block";

        }else{

            notificationBox.style.display="none";

        }

    });

}

if(notificationList){

    let jobs = Number(localStorage.getItem("jobs")) || 0;

    let events = Number(localStorage.getItem("events")) || 0;

    notificationList.innerHTML="";

    for(let i=1;i<=jobs;i++){

        notificationList.innerHTML += "<li>✅ Job Application Submitted</li>";

    }

    for(let i=1;i<=events;i++){

        notificationList.innerHTML += "<li>📅 Event Registration Completed</li>";

    }

    if(jobs===0 && events===0){

        notificationList.innerHTML="<li>No Notifications</li>";

    }

}