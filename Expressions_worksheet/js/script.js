/*
Kelsey M. Brickel
SDI 03
Expressions Worksheet
1-7-15
 */

/*Choose a problem to solve
Dog Years
Calculate how old Sparky is in dog years based on his actual age
Sparky's actual age is 4

test to see if the js is connected
 */

//alert("Hello world!");
//Create a variable for the dog's age
var aGe = 4;


//Print Sparky's age to the console
console.log("Sparky's age is " + aGe + ".");

//Create a variable for Sparky's age in dog years
var dogAge = aGe * 7;

//Print the result to the console
console.log("Sparky is " + aGe + " human year old, which is " + dogAge + " in dog years!");


/*
Slice of Pie part I
Calculate the number of slices per pizza
Calculate the number of people at the party
Calculate the number of pizzas ordered

 */

//Create a variable for pizza slices
var slicesNo = 8;

//print the number of slices per pizza to the console
console.log("The number of slices per pizza is" + slicesNo + ".");

//Create a variable for the number of people at the party
var peopleNo = 32;

//print the number of people at the party to the console
console.log("The number of people at the party is " + peopleNo + ".");

//Create a variable for number of pizzas ordered
var pizzaNo = 10;

//print the number of pizzas ordered to the console
console.log("The number of pizzas ordered is " + pizzaNo + ".");

//Calculate the number of slices per person at the party
//Create a variable for slices per person
var slicesPer = (pizzaNo * slicesNo)/peopleNo;

//print the result to the console
console.log("Each person ate " + slicesPer + " slices of pizza at the party");


/*
Slice of Pie part II
Use the numbers from Slice of Pie part I to calculate how many WHOLE slices Sparky gets
Calculate how much is left over from each whole slice
 */

//Create a variable for how much is left
var whatsLeft  = slicesPer % 2;

//Calculate how many "WHOLE" slices Sparky will get to eat
//Create a variable for this
var wholeSlice = whatsLeft * peopleNo;

//print to the console the number of WHOLE slices Sparky will get to eat
console.log("Sparky got " + wholeSlice + " slices of pizza!");


/*
Average Shopping Bill
Use an array of 5 weekly grocery bill totals to calculate average weekly grocery spending
Create a variable for the grocery Totals
 */

var storeTotals = [108.38, 156.25, 94.16, 24.02, 195.09];

//Calculate the total of all the grocery bills
var result = storeTotals[0] + storeTotals[1] + storeTotals[2] + storeTotals[3] + storeTotals[4];

//Calculate the average weekly grocery total
var weekAverage = result/5;

//Print the result to the console
console.log("You have spent a total of $" + result + " on groceries over 5 weeks. That is an average of $" + weekAverage + " per week.");

/*
Discounts
Calculate the discounted price for an item
Create a variable for the original price
 */

var priceOrig = 2100.99;

//Create a variable for the discount percentage
var disCount = .40;

//Create a variable for the description of the item
var itEm = "iMac 27in with Retina Display";

//Create a variable for the tax percentage
var taxPercent = .07;

//Create a variable to calculate the discounted price
var disPrice = (priceOrig - (priceOrig *disCount));

//Create a variable to calculate the price of the discounted item with tax
var wtaxResult = disPrice + (disPrice * taxPercent);

//Print the result to the consult
console.log("Your " + itEm + " was originally $" + priceOrig + ", but after a 40% discount it is now $" + disPrice + " without tax, and $" + wtaxResult + " with tax.");


