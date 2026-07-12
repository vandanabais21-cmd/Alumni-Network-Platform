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

// Animated Counter

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (current < target) {

            counter.innerText = current + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});

// Scroll Animation

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el => observer.observe(el));

// Loader

window.addEventListener("load", function(){

setTimeout(function(){

const loader = document.getElementById("loader");

if(loader){

loader.style.display = "none";

}

},2000);

});
// Hero Slider

const hero = document.querySelector(".hero");

const images = [

"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600",

"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600",

"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600"

];

let current = 0;

setInterval(function(){

current++;

if(current >= images.length){

current = 0;

}

hero.style.backgroundImage =
`url(${images[current]})`;

},4000);

// Back To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// Testimonials Slider

const testimonialText =
document.getElementById("testimonialText");

const testimonialName =
document.getElementById("testimonialName");

const testimonials = [

{

text:"This platform helped me connect with alumni and get my dream job.",

name:"- Rahul Sharma"

},

{

text:"I found an internship through the alumni network. Amazing experience!",

name:"- Priya Verma"

},

{

text:"The mentorship sessions were very helpful for my career growth.",

name:"- Amit Singh"

}

];

let testimonialIndex = 0;

setInterval(function(){

testimonialIndex++;

if(testimonialIndex >= testimonials.length){

testimonialIndex = 0;

}

testimonialText.innerText =
testimonials[testimonialIndex].text;

testimonialName.innerText =
testimonials[testimonialIndex].name;

},4000);

// Visitor Counter

const visitCount = document.getElementById("visitCount");

if(visitCount){

    let count = localStorage.getItem("visitCount");

    if(count == null){

        count = 1;

    }else{

        count = Number(count) + 1;

    }

    localStorage.setItem("visitCount", count);

    visitCount.innerText = count;

}