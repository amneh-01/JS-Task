

let button = document.getElementById("btn")
let result =document.getElementById("result")

    button.onclick =function(){
let name = document.getElementsByClassName("custName")[0].value;
let order =document.getElementsByClassName("selOrder")[0].value;
   

result.innerHTML =(" Hello :) "+name+"  your order is "+ order)

    }


    button.onmouseover= function(){
      button.style.backgroundColor = "orange";
    }

     button.onmouseout= function(){
      button.style.backgroundColor = "";
    }