// declaring and initializing the array with real numbers
//// This program computes the sum of all the real numbers (Integers and Decimals) in an array and prints the sum.
const numbers = [20 , 5.45 , 14.8 , 8 , -17.5 , 25.4 ];

// using the length method determining the size of the array
let length = numbers.length;

// initialize the sum variable to 0
let sum = 0;

// for loop to traverse all the elements of the array
for(let i = 0 ; i < length ; i++)
{
 // adding the number in the array to the sum with each iteration
 sum = sum + numbers[i];
}

// display the sum of all the Numbers in the array
document.write("The Sum of all the Integers in the Array : " + sum);