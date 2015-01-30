
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

 