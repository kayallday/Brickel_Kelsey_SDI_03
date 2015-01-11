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
