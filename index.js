console.log("Alumni Network Platform");

// Dark Mode
const darkBtn = document.getElementById("darkBtn");

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

    });

}

// Welcome User
const welcomeUser = document.getElementById("welcomeUser");

if (welcomeUser) {

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser) {

        welcomeUser.innerHTML = "Welcome, " + savedUser.fullName;

    }

}

// Logout
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function (e) {

        e.preventDefault();

        localStorage.removeItem("user");

        alert("Logout Successful!");

        window.location.href = "login.html";

    });

}