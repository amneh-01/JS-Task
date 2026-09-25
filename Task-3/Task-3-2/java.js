
let circleBtn =document.getElementById("circleBtn");
let squareBtn =document.getElementById("squareBtn");
let img = document.getElementsByClassName("img");


circleBtn.onclick =function(){
 img[0].style.borderRadius="50%";

}


squareBtn.onclick =function(){
 img[0].style.borderRadius="0%";

}


