/*
Kelsey M. Brickel
SDI Section #3
Functions Worksheet
1/27/15


 */
//Problem: Calculate the area of a rectangle given the width and height of the rectangle.

//Calculate the Area of a Rectangle
var width = 5;
var height = 6;
var area = calculateArea(width, height);
console.log("The area of the Rectangle is " + area);

function calculateArea(w, h )
{
    return w *h;
}


/*
Circumference
Calculate the circumference of a circle
Parameters for function:
Radius of the circle
Return:
Circumference of the circle
Result to print to the console:
The circumference of the circle is X

C = Pi * r^2


 */
//Prompt the user for the radius of the circle
var radius = prompt("To calculate the circumference of the circle, we'll need to know the radius. Please enter it below using only numbers.");

//use a while loop to ensure the user enters in a number
while(radius==="" || isNaN(radius))
    if(radius===""){
        prompt("Whoops! I think you forgot something! Try again.");
    } else {
        prompt("Rats! This needs to be a number!!");
    }

//Print the input to the console
console.log(radius + " is the radius.");

var Pi = Math.PI;





