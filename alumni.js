console.log("Alumni Page");

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

let filter = searchInput.value.toLowerCase();

let cards = document.querySelectorAll(".alumni-card");

cards.forEach(card=>{

let name = card.querySelector("h3").innerText.toLowerCase();

if(name.includes(filter)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}