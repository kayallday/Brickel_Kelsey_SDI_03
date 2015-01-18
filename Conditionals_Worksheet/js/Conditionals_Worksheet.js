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
if