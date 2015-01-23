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

//Validate the variable if the prompt is empty "Oh no I think you forgot to enter in a value
if (positive===""){
    positive = prompt("Oh no I think you forgot to enter in a value.");
    //if prompt is not a number then "Rats! We need a numerical value."
} else if(isNaN(positive)) {
    positive = prompt("Rats! We need a numerical value.");
} else {
    console.log("P = " + positive + ".");
}

//Create a variable for E existence
var existence = prompt("As with the last question, this is also based on a scale of 1-10, 1 being not at all and 10 being very much so, please answer the following: \n Do you believe your basic needs are being met; health financial stability, personal relationships?");

//Validate the variable, if the prompt is left blank then "Whoops you forgot something"
if (existence===""){
    existence = prompt("Whoops try that one more time!");
} else if (isNaN(existence)){
    existence = prompt("Oh man, we need a numerical value.");
} else {
    console.log("E = " + existence + ".");
}


//Create a variable for H higher purpose
var higher = prompt("Now on a scale of 1-10, 1 being not at all and 10 being completely, do you feel you have the support of people close to you, can immerse yourself fully into activities you enjoy?");

//Validate the variable, if the prompt is left blank then "Oh no! You forgot to enter in a value

if (higher===""){
    higher = prompt("Oh no! I think you forgot to enter in a value.");
} else if(isNaN(higher)) {
    higher = prompt("Whoops! Please enter in a number.");
} else {
    //print the variable to the console
    console.log("H = " + higher + ".");
}

//Calculate using the formula, and incorporate a ternary operator
var happiness = (positive + (5*existence) + (3*higher));

//print to the console
console.log("The user's happiness level is " + happiness + ".");

//Ask the user if they're sure they want to know
var toKnow = prompt("Alright now for the big reveal! Are you sure you're ready? \n Please type 'YES' or 'NO'");

//Use a conditional to validate the variable, if YES, then alert("Alright, click okay to reveal") if NO then alert("Bummer, click x to exit")
if (toKnow==="") {
    toKnow = prompt("Whoops, I think you forgot something.");
} else if(toKnow = "YES"){
    alert("Alright, click okay to reveal.");
} else {
    alert("Bummer, click x to exit.");
}

/*
 Use a ternary operator on the premise that
 happiness  > 80 ? "You are quite the happy camper! Now that you know the general levels you need to achieve happiness you can have a better handle on your mood." :
 "Your happiness level is a little down in the dumps, what are some areas you think you could improve in to get that happiness meter up?";
 alert(userHappiness);

Create a new variable to alert the user
*/
var userHappiness;
userHappiness = (happiness > 80)? "You are quite the happy camper! Now that you know the general levels you need to achieve happiness you can have a better handle on your mood." : "Your happiness level is a little down in the dumps, what are some areas you think you could improve in to get the happiness meter up?";
alert("Your happiness level is at " + happiness + ". " + userHappiness);


//End code







