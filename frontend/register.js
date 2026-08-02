console.log("Register Page");

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let fullName = document.getElementById("fullName").value.trim();
        let email = document.getElementById("email").value.trim();
        let branch = document.getElementById("branch").value.trim();
        let year = document.getElementById("year").value.trim();
        let password = document.getElementById("password").value.trim();

        if (fullName === "" || email === "" || branch === "" || year === "" || password === "") {

            alert("Please Fill All Fields");
            return;

        }

        if (password.length < 8) {

            alert("Password must be at least 8 characters.");
            return;

        }

        const user = {

            fullName: fullName,
            email: email,
            password: password,
            branch: branch,
            passoutYear: Number(year)

        };

        fetch("http://localhost:5000/api/auth/register", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(user)

        })

        .then(response => response.json())

        .then(data => {

            alert(data.message);

            if (data.message === "User Registered Successfully") {

                registerForm.reset();

                // Baad me login page connect karenge
                // window.location.href = "login.html";

            }

        })

        .catch(error => {

            console.log(error);

            alert("Registration Failed!");

        });

    });

}