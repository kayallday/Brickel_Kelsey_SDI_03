/*
Kelsey M. Brickel
SDI Section #3
1/16/15
Conditionals (Screencast)
 */
//alert("Hello Interweb!!");

var kidHeight = 47;
var minHeight = 48;
var sneakerLift = 2;

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight + sneakerLift > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}
console.log("What comes after");

//Ternary Operators
var age = 11;
var book;
//if the child is under 10, they get Green Eggs and Ham, otherwise they get the Time Machine

book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);
