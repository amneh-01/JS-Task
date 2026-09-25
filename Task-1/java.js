
let name =prompt(" Enter your name");
let age =prompt(" Enter your age");
let gender =prompt(" Enter your gender (male/female)");

let Text= "";

if( gender === "male" )
{
Text = "welcom  Mr. " + name;
}
else if( gender ==="female")
{
Text = "welcom  Ms. " + name;
}
else
{
Text = "welcom  " + name;
}

document.write(Text);

if(age >= 16)
{
    document.write(" <br>Continue with the order<br>");
}
else
{
    document.write("You are not eligible to place an order<br>");
}


let order= prompt( "enter  your order : Burger , Shawarma , Zinger " );
let valid =false;

if(order ==="Burger" || order ==="Shawarma" || order==="Zinger")
{
    alert("Your order is being prepared")
    valid=true;
}

else
{
    alert("Invalid order. Please try again")
    valid=false;
}


if(age>=18 && valid){
    console.log("Order confirmed");
}
else if(age<18 ||(valid==false)){
    alert("Order requires verification");

}
document.write("Customer Name :" + name + "<br>") ;
document.write("Age:"+age  + "<br>");
document.write("Gender:"+gender  + "<br>");
document.write("Order :"+order  + "<br>");
document.write("vaild:"+ valid  + "<br>");
document.write("<br>");



