
 /*
  Kelsey M. Brickel
  SDI Section #3
  Functions Assignment
  1/28/2015
  */

//Ensure the js is connected
 alert("Hello World");

 /*Choose something to calculate
 How much of your life have you spent eating?
 (Based on the estimated time the average human spends eating per day which is 67 minutes
     
*/
 //Ask for the user's name
 var userName = prompt("Well hi there! What's your name?");

 //Validate the variable for userName using a while loop
while ((userName==="") || !isNaN(userName))
 //re-prompt the user for their name
  if (userName==="") {
   userName = prompt("Whoops! Did you forget something?");
} else {
 userName = prompt("Please enter in only text.");
 }

 //Print the username to the console
 console.log("The user's name is " + userName + ".");


 //Create function for minutes spent a year by the average human
 //Create variables for minutes, and days in a year
 var min = 67;
 var days = 365;

 function minYear(min, days){
  //code to run
  var minutes = min * days;
  return minutes;
 }

 //call the function

 minYear(min, days);

 //prompt the user for their age
 var age = prompt("Okay " + userName + " how old are you? (In human years please.");
 //validate the variable with a while loop
 while ((age==="") || isNaN(age))
 //re-prompt the user to enter in something
if (age===""){
 age = prompt("Please enter something, it will be extremely helpful.");
} else {
 age = prompt("Drat! This needs to be a number!");
}

 //Print the age to the console
 console.log(userName +" is " + age + " years old.");

 //Create a function that calculates how much time the user would spend eating

 var lifeTimeEat = function(minYear, age){
  //code to run
  var howMuch = minYear * age;
 }
 var howMuch = lifeTimeEat(minYear, age);

 console.log(howMuch);


 //Verify the user really wants to know how much of their life they spend eating
 var areYouSure = prompt("Okay it's truth time, are you sure you want to know how much of your life you spend eating? \n On a scale of 1-10 1 being not at all and 10 being absolutely how badly do you want to know?");

 //Validate using a while loop
 while((areYouSure>=6) || (areYouSure<=5))
 if (areYouSure>=6){
  areYouSure = alert("Alright, alright! I'll tell you! You've spent " + howMuch + " minutes of your life eating.");
 } else {
  areYouSure = alert("Well I'm going to tell you anyway!! You've spent " + howMuch + " minutes of your life eating.");
 }