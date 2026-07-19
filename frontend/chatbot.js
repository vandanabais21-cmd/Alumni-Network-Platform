function getTime(){

    let now = new Date();

    return now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

}
const micBtn = document.getElementById("micBtn");
const clearBtn = document.getElementById("clearBtn");
const chatBox=document.getElementById("chatBox");

const input=document.getElementById("userInput");

const sendBtn=document.getElementById("sendBtn");

sendBtn.addEventListener("click",function(){

let user=input.value.toLowerCase().trim();

if(user==="") return;
chatBox.innerHTML += "<p><b>You:</b> " + user + " <small>(" + getTime() + ")</small></p>";

let reply = "Sorry, I don't understand that. Please ask about Jobs, Events, Alumni, Register, Login or Contact.";

if(user.includes("job")){

    reply = "Visit the Jobs page to explore opportunities.";

}
else if(user.includes("event")){

    reply = "Visit the Events page to register for upcoming events.";

}
else if(user.includes("alumni")){

    reply = "Visit the Alumni page to search alumni.";

}
else if(user.includes("contact")){

    reply = "Go to the Contact page and send us your message.";

}
else if(user.includes("register")){

    reply = "Open the Register page and fill out the registration form.";

}
else if(user.includes("login")){

    reply = "Use the Student Login or Alumni Login page.";

}
else if(user.includes("profile")){

    reply = "You can view and edit your profile from the Profile page.";

}
else if(user.includes("about")){

    reply = "The About page contains information about our Alumni Network Platform.";

}

else if(user.includes("who") || user.includes("yourself")){

    reply = "I am the Alumni Network AI Assistant. I am here to help you.";

}

else if(user.includes("developer")){

    reply = "This Alumni Network Platform was developed by Vandana Bais.";

}
else if(user.includes("thank")){

    reply = "You're welcome! 😊";

}

else if(
    user.includes("bye") ||
    user.includes("byy") ||
    user.includes("goodbye")
){

    reply = "Goodbye! Have a great day! 👋";

}

else if(user.includes("hello") || user.includes("hi")){

    reply = "Hello! Welcome to Alumni Network.";

}

chatBox.innerHTML += "<p id='typing'><b>Bot:</b> Typing...</p>";

chatBox.scrollTop = chatBox.scrollHeight;


setTimeout(function(){

    document.getElementById("typing").remove();

    let botMessage = "<p><b>Bot:</b> " + reply + " <small>(" + getTime() + ")</small></p>";
    if(user.includes("job")){

        botMessage += '<button onclick="window.location.href=\'jobs.html\'">Open Jobs</button>';

    }
    else if(user.includes("event")){

        botMessage += '<button onclick="window.location.href=\'events.html\'">Open Events</button>';

    }
    else if(user.includes("contact")){

        botMessage += '<button onclick="window.location.href=\'contact.html\'">Open Contact</button>';

    }
    else if(user.includes("profile")){

        botMessage += '<button onclick="window.location.href=\'profile.html\'">Open Profile</button>';

    }
    else if(user.includes("about")){

        botMessage += '<button onclick="window.location.href=\'about.html\'">Open About</button>';

    }

    chatBox.innerHTML += botMessage;

    chatBox.scrollTop = chatBox.scrollHeight;

},1000);
    

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

chatBox.innerHTML = `
<p><b>🤖 Alumni AI Assistant</b></p>
<p>👋 Welcome to Alumni Network!</p>
<p>You can ask me about:</p>
<p>✅ Jobs</p>
<p>✅ Events</p>
<p>✅ Alumni</p>
<p>✅ Profile</p>
<p>✅ Contact</p>
<p>✅ About</p>
<p><i>Type your question below...</i></p>
`;

if ('webkitSpeechRecognition' in window) {

    const recognition = new webkitSpeechRecognition();

    recognition.lang = "en-US";

    recognition.onresult = function(event) {

        input.value = event.results[0][0].transcript;

        sendBtn.click();

    };

    micBtn.addEventListener("click", function() {

        recognition.start();

    });

}