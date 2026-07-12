const clearBtn = document.getElementById("clearBtn");
const chatBox=document.getElementById("chatBox");

const input=document.getElementById("userInput");

const sendBtn=document.getElementById("sendBtn");

sendBtn.addEventListener("click",function(){

let user=input.value.toLowerCase().trim();

if(user==="") return;

chatBox.innerHTML+="<p><b>You:</b> "+user+"</p>";

let reply="Sorry, I don't understand.";

if(user.includes("job")){

reply="Visit the Jobs page to explore opportunities.";

}

else if(user.includes("event")){

reply="Visit the Events page to register for upcoming events.";

}

else if(user.includes("contact")){

reply="Go to the Contact page and send us your message.";

}

else if(user.includes("alumni")){

reply="Visit the Alumni page to search alumni.";

}

else if(user.includes("hello") || user.includes("hi")){

reply="Hello! Welcome to Alumni Network.";

}

chatBox.innerHTML+="<p><b>Bot:</b> "+reply+"</p>";

chatBox.scrollTop=chatBox.scrollHeight;

input.value="";

});

clearBtn.addEventListener("click", function () {

    chatBox.innerHTML = "";

});

input.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        sendBtn.click();

    }

});