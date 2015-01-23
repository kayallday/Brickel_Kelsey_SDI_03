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
H - Higher purpose

(all based on a scale of 1 - 10)


 */
//Explain what the calculator is and what it's calculating to the user
alert("Hello! This is a happiness calculator, it will calculate all the components that make up a person's happiness. When you're ready to begin click okay.");


//Begin with creating a variable for P
var positive = prompt("Using the scale of 1 - 10, with 1 being not at all and 10 being completely, answer the following: \n Do you feel that you have a positive outlook on life, bounce back quickly, and feel in control of your life?");

//Validate the variable if the prompt is empty "Oh no I think you forgot to tenter in a value
if (positive==="" || isNaN(positive)){
    positive = prompt("Oh no I think you forgot to enter in a value.");
    //if prompt is not a number then "Rats! We need a numerical value."
} else {
    positive = prompt("Rats! We need a numerical value.");
}

//Print the result to the console
console.log("P = " + positive + ".");

//Create a variable for E existence
var existence = prompt("As with the last question, this is also based on a scale of 1-10, 1 being not at all and 10 being very much so, please answer the following: \n Do you believe your basic needs are being met; health financial stability, personal relationships?");

//Validate the variable, if the prompt is left blank then "Whoops you forgot something"
if (existence==="" || isNaN(existence)){
    existence = prompt("Whoops try that one more time!");
} else {
    existence = prompt("Oh man, we need a numerical value.");
}

//print the existence to the console
console.log("E = " + existence + ".");



