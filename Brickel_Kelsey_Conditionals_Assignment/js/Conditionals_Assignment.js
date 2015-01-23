/*
Kelsey M Brickel
SDI Section #3
1/22/15
Conditionals Assignment

Happiness Calculator

Formula :

Happiness = P + (5xE) + (3xH)

P - Personal Characteristics
E - Existence (health, financial stability, friendships)
H - Higher order

(all based on a scale of 1 - 10)


 */
//Begin with creating a variable for P
var positive = prompt("Using the scale of 1 - 10, with 1 being not at all and 10 being completely, answer the following: \n Do you feel that you have a positive outlook on life, bounce back quickly, and feel in control of your life?");

//Validate the variable
if (positive==="" || isNaN(positive)){
    positive = prompt("Oh no I think you forgot to enter, in a value.");
} else {
    positive = prompt("Rats! We need a numerical value.");
}
