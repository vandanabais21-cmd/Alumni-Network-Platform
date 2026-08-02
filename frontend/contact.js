console.log("Contact Page");

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {

            alert("Please Fill All Fields");
            return;

        }

        fetch("http://localhost:5000/api/feedback", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                name: name,
                email: email,
                message: message

            })

        })

        .then(response => response.json())

        .then(data => {

            showToast(data.message);

            form.reset();

        })

        .catch(error => {

            console.log(error);

            alert("Failed to Send Feedback");

        });

    });

}