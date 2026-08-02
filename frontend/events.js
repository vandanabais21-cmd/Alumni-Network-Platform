console.log("Events Page");

const eventContainer = document.getElementById("eventContainer");

const loggedUser = JSON.parse(localStorage.getItem("user"));

// Load Events
fetch("http://localhost:5000/api/events")

.then(response => response.json())

.then(events => {

    eventContainer.innerHTML = "";

    events.forEach(event => {

        eventContainer.innerHTML += `

        <div class="event-box">

            <h3>${event.title}</h3>

            <p><strong>Date:</strong> ${event.date}</p>

            <p><strong>Location:</strong> ${event.location}</p>

            <p>${event.description}</p>

            <button class="registerEvent" data-id="${event._id}">
                Register
            </button>

        </div>

        `;

    });

    const buttons = document.querySelectorAll(".registerEvent");

    buttons.forEach(button => {

        button.addEventListener("click", function(){

            if(!loggedUser){

                alert("Please Login First");

                window.location.href="login.html";

                return;

            }

            const eventId = this.dataset.id;

            fetch("http://localhost:5000/api/event-registration",{

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({

                    userId:loggedUser._id,
                    eventId:eventId

                })

            })

            .then(response=>response.json())

            .then(data=>{

                showToast(data.message);

            })

            .catch(error=>{

                console.log(error);

                alert("Registration Failed");

            });

        });

    });

})

.catch(error=>{

    console.log(error);

    alert("Unable to Load Events");

});