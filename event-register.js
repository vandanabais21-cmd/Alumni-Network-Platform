const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", function(){

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const college = document.getElementById("college").value;

    if(name==="" || email==="" || college===""){

        alert("Please fill all fields.");
        return;

    }

    alert("🎉 Event Registration Successful!");

    let events = Number(localStorage.getItem("events")) || 0;

    events++;

    localStorage.setItem("events", events);
   
    window.location.href="events.html";

});