let menu = document.getElementById("menu");

fetch("menu.json")
    .then(response => response.json())
    .then(data => {
         
   
        for (let i = 0; i < data.length; i++) {
            menu.innerHTML += `
                <p>  
                    Meal-Name: ${data[i]["Meal-Name"]}
                    Price : ${data[i].Price}
                    Availability : ${data[i].Availability}
                </p>
            `;
        }
    });