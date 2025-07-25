 /*variables and data types
 let const var 
 
 */

/*  let name = "shubham";
 const age = 22;
 var city = "Dehradun"; */


 /*  Write a function that checks if a number is even or odd.

Create a loop that prints numbers from 10 to 1 (reverse).

Write a function that accepts 2 numbers and returns the larger one.

Create an object person with name, age, and city. Use a for...in loop to print keys.

Bonus: Use ternary to return "Positive", "Negative" or "Zero" for a number.

 */


// Question 1

/* function checkEvenOdd(num) {
  // validation check 
   if(num <= 0){
     return"Please enter positive integer";
   }
    if(num % 2 === 0) {
       return `Even: ${num}`;
    }else{
      return `Odd: ${num}`;
    }
   }
 console.log(checkEvenOdd(12))
 */

 // Question 2 

function reverseNumber(num) {
  // validation 
 
  let result = " "
 for(let i = num; num >= 1; i--) {
    result += i + " ";
 }

}

console.log(reverseNumber(10))