console.log("Profile Page");

// Logged In User
let savedUser = JSON.parse(localStorage.getItem("user"));

if (!savedUser) {

    alert("Please Login First!");
    window.location.href = "login.html";

}

// Load Profile From Backend
fetch(`http://localhost:5000/api/auth/profile/${savedUser._id}`)

.then(response => response.json())

.then(user => {

    // Latest data localStorage me bhi update kar do
    savedUser = user;
    localStorage.setItem("user", JSON.stringify(user));

    document.getElementById("profileName").innerHTML = user.fullName;
    document.getElementById("profileEmail").innerHTML = user.email;
    document.getElementById("profileBranch").innerHTML = user.branch;
    document.getElementById("profileYear").innerHTML = user.passoutYear;

})

.catch(error => {

    console.log(error);

    alert("Unable to Load Profile");

});


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


// Edit Button
const editBtn = document.getElementById("editBtn");
const editForm = document.getElementById("editForm");
const saveBtn = document.getElementById("saveBtn");

if (editBtn) {

    editBtn.addEventListener("click", function () {

        editForm.style.display = "block";

        document.getElementById("editName").value = savedUser.fullName;
        document.getElementById("editBranch").value = savedUser.branch;
        document.getElementById("editYear").value = savedUser.passoutYear;

    });

}


// Save Changes
if (saveBtn) {

    saveBtn.addEventListener("click", function () {

        fetch(`http://localhost:5000/api/auth/profile/${savedUser._id}`, {

            method: "PUT",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                fullName: document.getElementById("editName").value,

                branch: document.getElementById("editBranch").value,

                passoutYear: Number(document.getElementById("editYear").value)

            })

        })

        .then(response => response.json())

        .then(data => {

            alert(data.message);

            savedUser = data.user;

            localStorage.setItem("user", JSON.stringify(savedUser));

            location.reload();

        })

        .catch(error => {

            console.log(error);

            alert("Update Failed!");

        });

    });

}


// Profile Image
const imageUpload = document.getElementById("imageUpload");
const profileImage = document.getElementById("profileImage");

if (imageUpload) {

    imageUpload.addEventListener("change", function () {

        const file = this.files[0];

        if (file) {

            const reader = new FileReader();

            reader.onload = function (e) {

                profileImage.src = e.target.result;

                localStorage.setItem("profileImage", e.target.result);

            };

            reader.readAsDataURL(file);

        }

    });

}

const savedImage = localStorage.getItem("profileImage");

if (savedImage) {

    profileImage.src = savedImage;

}


// Resume Upload (Temporary LocalStorage)
const uploadBtn = document.getElementById("uploadResumeBtn");
const resumeFile = document.getElementById("resumeFile");
const resumeStatus = document.getElementById("resumeStatus");

if (uploadBtn) {

    uploadBtn.addEventListener("click", function () {

        if (resumeFile.files.length > 0) {

            localStorage.setItem("resumeName", resumeFile.files[0].name);

            resumeStatus.innerHTML =
                "✅ Resume Uploaded: " + resumeFile.files[0].name;

        } else {

            alert("Please select a resume.");

        }

    });

}

const savedResume = localStorage.getItem("resumeName");

if (savedResume) {

    resumeStatus.innerHTML =
        "✅ Resume Uploaded: " + savedResume;

}