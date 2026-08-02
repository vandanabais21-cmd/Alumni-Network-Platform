const form = document.getElementById("adminLoginForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("adminEmail").value;
    const password = document.getElementById("adminPassword").value;

    if(
        email === "admin@sage.com" &&
        password === "admin123"
    ){

        localStorage.setItem("adminLoggedIn","true");

        alert("Admin Login Successful");

        window.location.href="admin.html";

    }else{

        alert("Invalid Admin Credentials");

    }

});