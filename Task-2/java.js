

let menu =[ {name :"food1", price: 1, category: "cate1", available: false}, 
            {name :"food2", price: 5, category: "cate2", available: true} ,
            {name :"food3", price: 2, category: "cate3", available: false}, 
            {name :"food4", price: 3, category: "cate4", available: true}, 
            {name :"food5", price: 6, category: "cate5", available: true}, ];

function showMenu(){ 
for(let i=0; i< menu.length ; i++)
{
    console.log(menu[i].name + " : "+ menu[i].price);
}        
}

showMenu();


let selectedFood = null;

while( selectedFood === null ) 
{   
  orderFood =prompt(" Enter your order ");

   for(let i=0; i< menu.length ; i++)
   {
      if (menu[i].name === orderFood && menu[i].available === true )
    {
      selectedFood = menu[i];
      break;
    }
  }

  if(selectedFood === null){
    alert("Food is unavailable or does not exist. Please choose again");
     }
}

      
     for(let property in selectedFood)
 {

   console.log(property + " :"+selectedFood[property]);
}


document.write("<p>Thank you for ordering <strong>" + selectedFood.name + "</strong>!</p>");
document.write("<p>Price: $" + selectedFood.price + "</p>");