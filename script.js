function addToCart(){
alert("Item Added To Cart Successfully!");
}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

let filter = searchInput.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(card => {

let title = card.querySelector("h3").textContent.toLowerCase();

if(title.includes(filter)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

});
