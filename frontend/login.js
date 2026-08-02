console.log("Login Page");

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {

            alert("Please Fill All Fields");
            return;

        }

        fetch("http://localhost:5000/api/auth/login", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                email: email,
                password: password

            })

        })

        .then(response => response.json())

        .then(data => {

            if (data.message === "Login Successful") {

                localStorage.setItem("user", JSON.stringify(data.user));

                alert("Login Successful!");

                window.location.href = "dashboard.html";

            } else {

                alert(data.message);

            }

        })

        .catch(error => {

            console.log(error);

            alert("Login Failed!");

        });

    });

}