/*
In this activity, we are going to create a function that can calculate which coins we should use when we need to give change.

Change Calculator
We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

Instruction
Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill. Return a new object that describes the total amount of change for the cashier to give back. Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.

Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)
*/

const calculateChange = function (total, cash) {
  // Your code here
  let change = cash - total;
  let changeObj = {};
  if (change >= 2000) {
    changeObj.twentyDollar = Math.floor(change / 2000);
    change = change % 2000;
  }
  if (change >= 1000) {
    changeObj.tenDollar = Math.floor(change / 1000);
    change = change % 1000;
  }
  if (change >= 500) {
    changeObj.fiveDollar = Math.floor(change / 500);
    change = change % 500;
  }
  if (change >= 200) {
    changeObj.twoDollar = Math.floor(change / 200);
    change = change % 200;
  }
  if (change >= 100) {
    changeObj.oneDollar = Math.floor(change / 100);
    change = change % 100;
  }
  if (change >= 25) {
    changeObj.quarter = Math.floor(change / 25);
    change = change % 25;
  }
  if (change >= 10) {
    changeObj.dime = Math.floor(change / 10);
    change = change % 10;
  }
  if (change >= 5) {
    changeObj.nickel = Math.floor(change / 5);
    change = change % 5;
  }
  if (change >= 1) {
    changeObj.penny = Math.floor(change / 1);
    change = change % 1;
  }
  return changeObj;
};

console.log(calculateChange(1787, 2000)); // { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

module.exports = calculateChange;
