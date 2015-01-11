/*
Kelsey M. Brickel
SDI 03
01-11-15
Professor Dan Williams

Calculate the likelihood of procrastination of a certain task

Develop a formula for the task

 D = CV/IP

 Desirability = Confidence(Value)/Immediacy(Procrastination)

 If the desirability is low then most likely you will procrastinate to complete the task

Create a variable for the users name
 */
var userName = prompt("Hello, what is your name?");

//Ensure the user enters in a value

while (userName==="") {
    userName = prompt("Whoops, we want to be formal, and address you by your name. \n Please enter your name.");
}

//print the user's name to the console
console.log("The user's name is " + userName + ".");

//Create a variable to ask the user for their confidence about the task
var conFidence = prompt("Okay " + userName + ", in order to figure out how likely you are to put off this task, we need to know how confident you feel about this task. \n On a scaled of 1-10 (1: not confident at all, and 10: completely confident) enter your confidence level.");

//Validate the variable by ensuring the user enters in a value and that it is a number
while (conFidence==="" || isNaN(conFidence)) {

    if (conFidence==="") {
        conFidence = prompt("Whoops! Please enter in a value.");
    } else {
        conFidence = prompt("Almost! We need a numerical value, from 1-10.");
    }
}





