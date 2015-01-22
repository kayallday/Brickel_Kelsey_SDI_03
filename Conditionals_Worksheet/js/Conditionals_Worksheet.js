/*
Kelsey M. Brickel
SDI Section #3
1/17/14
Conditionals Worksheet

Group 1: Expressions with Conditionals
Celsius to Fahrenheit converter
Given:
- Degrees (in F or C)
 - Unit (a string holding an "F" or a "C")
 Result to print:
 "The temperature is X degrees Celsius." Or "The temperature is X degrees Fahrenheit."
 Data sets to test:
 32F is 0C
 100C is 212F
 90F is 32.22C
 Conversions =
 F = (C * 9/5) + 32
 C = (F - 32) * 5/9
 first prompt the user for the degrees
 ask the user if the temperature is celsius or fahrenheit
 use an if statement to determine the calculation
 Create a variable for the user to enter in in degrees
 */
var degrees = prompt("This is a Fahrenheit and Celsius converter! Please enter in the degrees you want converted.");

//Ensure the user enters in a value and it is a number, using a conditional
if (degrees==="" || isNaN(degrees)){
    //Test to see if it is blank or text
    degrees = prompt("Whoops! I think you forgot something!");
} else if(isNaN(degrees)){
    degrees = prompt("Oh no! We need a numerical value!");


}

//Print to the console the degrees
console.log("The degrees to be converted is : " + degrees + ".");

var type = prompt("Okay is this Celsius or Fahrenheit? Please answer with a 'C' for Celsius or 'F' for Fahrenheit.");

//Create a conditional for whether the degree need to be converted to celsius or fahreheit

if (type = "C"){
    type = console.log("When converted to Fahrenheit the result is " + (degrees * 9/5) + 32);
} else {
    type = console.log("When converted to Celsius the result is " + (degrees - 32) * 5/9);
}
