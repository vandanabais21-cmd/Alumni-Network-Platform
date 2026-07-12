const applyBtn = document.getElementById("applyBtn");

applyBtn.addEventListener("click", function(){

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const college = document.getElementById("college").value;
    const branch = document.getElementById("branch").value;

    if(name==="" || email==="" || college==="" || branch===""){

        alert("Please fill all fields.");

        return;

    }

    alert("Application Submitted Successfully! 🎉");

   let jobs = Number(localStorage.getItem("jobs")) || 0;

    jobs++;

    localStorage.setItem("jobs", jobs);
    window.location.href="jobs.html";

});