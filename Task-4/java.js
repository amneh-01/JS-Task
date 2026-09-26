let btn = document.getElementById("btn");
let orderDetails = document.getElementById("orderDetails");

let userError = document.getElementById("nameError");
let passError = document.getElementById("passError");
let telError = document.getElementById("phoneError");

let userValidate = /^\S+$/;
let passValidate = /^(?=.*\d).{8,}$/;
let telValidate = /^07\d{8}$/;

btn.onclick = function () {
    let userName = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("number").value;
    let order = document.getElementById("order").value;

    
    let valid1 = false;
    let valid2 = false;
    let valid3 = false;

    
    if (userValidate.test(userName) === true) {
        valid1 = true;
        userError.innerHTML = "";
    } else {
        userError.innerHTML = "<p style='color:red;'>Enter at least 1 character and don't use spaces</p>";
    }

   
    if (passValidate.test(password) === true) {
        valid2 = true;
        passError.innerHTML = "";
    } else {
        passError.innerHTML = "<p style='color:red;'>Enter at least 8 characters and contain at least one number</p>";
    }

  
    if (telValidate.test(phone) === true) {
        valid3 = true;
        telError.innerHTML = "";
    } else {
        telError.innerHTML = "<p style='color:red;'>Enter exactly 10 digits and start with 07</p>";
    }

    
    if (valid1 === true && valid2 === true && valid3 === true) {
        localStorage.setItem("order", order);
        sessionStorage.setItem("username", userName);

        orderDetails.innerHTML = 
            "<h3>Welcome, " + sessionStorage.getItem("username") + "</h3>" +
            "<p>Saved Order : " + localStorage.getItem("order") + "</p>" +
            "<p>Saved Username : " + sessionStorage.getItem("username") + "</p>";
    } else {
       
        orderDetails.innerHTML = "";
    }
};