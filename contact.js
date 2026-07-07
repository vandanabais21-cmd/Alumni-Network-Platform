console.log("Contact Page");

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

if(name==="" || email==="" || message===""){

alert("Please Fill All Fields");

}else{

alert("Message Sent Successfully");

form.reset();

}

});

}