

// declaring and initializing the array with integers
//// This program computes the sum of all the integers(+ve and -ve) in an array and prints the sum.
const numbers = [-5 , 10 , 12 , 16 , -9 , 20 , -6 , 12 , -14 , 2];

// using the length method determining the size of the array
let length = numbers.length;

// initialize the sum variable to 0
let sum = 0;

// for loop to traverse all the elements of the array
for(let i = 0 ; i < length ; i++)
{
 // adding the integer in the array to the sum with each iteration
 sum = sum + numbers[i];
}

// display the sum of all the integers
document.write("The Sum of all the Integers in the Array : " + sum);

