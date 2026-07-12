console.log("Events Page");

const registerButtons = document.querySelectorAll(".registerEvent");

registerButtons.forEach(button => {

button.addEventListener("click", function(){

showToast("Event Registration Successful!");

});

});