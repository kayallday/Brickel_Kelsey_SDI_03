/*
Kelsey M. Brickel
SDI Section #3
1/17/14
Conditionals Worksheet

Group 1: Expressions with Conditionals
 Last Chance for Gas!
 Given:
 Gas efficiency of the car (mpg)
 Gauge reading of the gas tank (%)
 Car's gas tank capacity (gallons)
 Result to Print:
 "Yes you can make it without stopping for gas!" or "You only have X gallons of gas in your tank, better get gas now while you can!"

*/
//Create a variable for the fuel efficiency of the car
var fuelEff = prompt("What is the fuel efficiency of you car? Please enter your answer in mpg.");
//If the variable is left empty put in a prompt(“Please enter a number.”)
if(fuelEff ===""){
 prompt("Please enter in a number.");
}
//Print the result to the console
console.log("The gas efficiency is " + fuelEff + " mpg.");

//Create a variable for the gas gauge reading in percent
var filledUp = prompt("How full (using a percentage) is your gas gauge? \n (Please enter in only whole numbers)");

//Validate the variable by ensuring the user enters in a value
if(filledUp ===""){
 prompt("Please enter in a percentage for the gauge reading.");
}

//Create a variable that turns filledUp into a percentage
var percentFilled = (filledUp / 100);

//Print the result to the console
console.log(percentFilled);

//Print the result to the console
console.log("The gas gauge is currently reading " + filledUp + "%.");

//Create a variable for the cars tank capacity
var carsTank = prompt("Okay, now we need to know the capacity of your car's gas tank. \nPlease enter this in gallons.");

//Validate the variable
if(carsTank ===""){
 prompt("Please enter in gallons what the capacity of your car's gas tank is.");
}

//print to the console the capacity of the car's gas tank.
console.log("The car's gas tank capacity is " + carsTank + " gallons.");

//Create a variable for the distance to the next gas station
var nextStation = 200;

//Print the distance to the console
console.log("The closest gas station is " + nextStation + " miles away.");

//Create a variable to find how many miles the tank has left in it vs how many miles need to go
var gasLeft = (percentFilled * carsTank);

//Print the result to the console
console.log("The car has " + gasLeft + " gallons left in the tank.");

//Create a variable to determine whether the user can make it to the next gas station
var makeIt = (gasLeft * fuelEff);

//Print the result to the console
console.log("The user can make it " + makeIt + " miles before stopping for gas.");

//Validate the variable
if (makeIt >= 200){
 alert("Yes you can make it without stopping for gas!");
} else {
 alert("You only have " + gasLeft + " gallons of gas in your tank, better get gas now while you can!");
}

//Use a conditional to determine if the user can make it to the gas station
if (makeIt >= 200){
 alert("Yes you can make it without stopping for gas!");
} else {
 alert("You only have " + gasLeft + " gallons of gas in your tank, better get gas now while you can!");
}

//Finished first Group

/*
Begin Group 2: Multiple Results
Check the login
User needs correct username and password
Givens:
 Username entered by user
 Password entered by user
 Correct username
 Correct password

Result to Print Out:
 "Welcome, (place their username here)!" - if the username and password is correct
 "User not found. Try again." - if the username does not match
 "Password does not match our records." if the username matches but the password does not

Create a variable for the user to enter in the username

*/

var usersName = prompt("Please enter your username.");

//Only valid username should be "Bruce Wayne"

//Validate variable
if (usersName=== "Bruce Wayne"){
 alert("Thank you, click okay to enter your password.");
} else {
 alert("User not found. Try again.");
}

//Print result to the console
console.log("The user name is " + usersName + ".");

//Create variable for the user to enter in their personal pasword
//Only valid password is "I'm Batman"
var passWord = prompt("Please enter your password.");

//Validate the variable passWord
if (passWord=== "I’m Batman"){
 alert("Welcome, " + usersName + "!");
} else {
 alert("Password does not match our records.");
}

//print the password to the console
console.log("The user's password is " + passWord + ".");

//End Group 2

/*
Group 3: Multiple Conditions
Movie Ticket Price
Local theater has ticket price of $12.00 but if you are a senior (55
and older, or under 10 you get the discounted price of $7.00
If you are seeing a movie between 3pm-5pm you can also get the discounted price
Determine which of the two prices the customer is eligible for

Givens:
 Time of Movie(Assume the whole numbers here)
 Age of the customer

Result to Print Out:
 "The ticket price is X"

 */
//variable for regular price var origPrice
var origPrice = "$12.00";

//Print the price to the console
console.log("The regular ticket price is " + origPrice + ".");

//Create a variable for the discounted ticket price
var discountPrice = "$7.00";

//Print the discount price to the console
console.log("The discounted ticket price is " + discountPrice + ".");
