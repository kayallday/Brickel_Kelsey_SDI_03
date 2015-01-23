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
