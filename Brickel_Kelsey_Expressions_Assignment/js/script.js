/*
Kelsey M. Brickel
SDI Section #3
01-11-15
Professor Dan Williams

Calculate the likelihood of procrastination of a certain task

Develop a formula for the task

 D = CV/IP

 Desirability = Confidence(Value)/Immediacy(Sensitivity to Distraction/Delay)

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

//print the result to the console
console.log(userName + "'s confidence of the task is " + conFidence + ".");

//Create a variable asking the user for the value of completing the task
var vaLue = prompt("Okay " + userName + ", what is the value of completing this task? \n Please rate it on a 1-10 scale, with 1: not very important, and 10: extremely important.");

//Create a variable to ensure the user enters in a value and that the value is a number
while (vaLue==="" || isNaN(vaLue)){
    if (vaLue===""){
        vaLue = prompt("Oh no! I think you forgot something. Please enter in your response.");
    } else {
        vaLue = prompt("Oops! This needs to be a numerical value.");
    }
}

//print the vaLue to the console
console.log(userName + "'s value of completing the task is " + vaLue + ".");

//Create a variable for the user to enter the immediacy of the task
var realQuick = prompt("Okay, now how soon does this task need to be completed? \n Use a 1-10 scale with 1 being not very soon, and 10 being immediately.");

//Validate the user enters in a variable
while (realQuick==="" || isNaN(realQuick)){
    if (realQuick===""){
        realQuick = prompt("Whoops! I think you forgot something. \n Please enter in how soon this task needs to be completed.");
    } else {
        realQuick = prompt("Oh no! We need a numerical value on a scale from 1-10");
    }
}

//print the result to the console
console.log(userName + "'s level of needing to complete this task soon is " + realQuick + ".");

//Create a variable for the sensitivity to delay or get distracted
var disTract = prompt("Last step! On a scale from 1-10, 1 being completely on point and 10 being completely distracted/avoiding, tell us how likely you are to delay or get distracted.");

//Validate the user enters in a number
while (disTract==="" || isNaN(disTract)){
    if (disTract===""){
        disTract = prompt("Oops! I think you forgot something. \n Please enter in a number.");
    } else {
        disTract = prompt("Whoops! We need a numerical character on a scale from 1-10.");
    }
}

//print the result to the console
console.log("The user's sensitivity to get distracted or delay the task is " + disTract + ", on a scale of 1-10.");

//Create a variable for calculating the desirability of the task
var awSome = (conFidence * vaLue)/(realQuick * disTract);

//print the result to the console
console.log("The desirability of completing this task is " + awSome + ".");

//Create a loop to tell the user how likely they are to complete the task
while (awSome >! 5 || awSome <! 4){
    if (awSome >! 5){
        awSome = alert(userName + " your desirability to complete this task is relatively high, so the probability that you will procrastinate is generally low.");
    } else {
        awSome = alert(userName + " your desirability to complete this task is relatively low, so the probability that you will procrastinate is generally low.");
    }
}

