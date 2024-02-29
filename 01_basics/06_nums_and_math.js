const score = 400
console.log(score);

const balance = new Number(100) //way to create a number using a constructor
console.log(balance);

console.log(balance.toString().length); //convert number to string and get length (output 3)
console.log(balance.toFixed(1)); // method to round a number (output 100.0)

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); // method to round a number (output 123.9)

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // method to convert number to locale string in India format (output 1,00,00,000)

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math); // object/class of maths
console.log(Math.abs(-4)); // absolute value of a number (output 4)
console.log(Math.round(4.6)); // round a number (5)
console.log(Math.ceil(4.2)); // ceiling a number (5)
console.log(Math.floor(4.9)); // floor a number (4)
console.log(Math.min(4, 3, 6, 8)); // minimum number (3)
console.log(Math.max(4, 3, 6, 8));  // maximum number (8)

console.log(Math.random()); // Generate a random number from 0 to 1
console.log((Math.random()*10) + 1); // Generate a random number from 1 to 10 and multiply by 10 and add 1 to avoid 0
console.log(Math.floor(Math.random()*10) + 1); // Generate a random number from 1 to 10 and multiply by 10 and add 1 to avoid 0 and round it down to an integer using Math.floor method

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Generate a random number from 10 to 20 and multiply by 10 and add 1 to avoid 0 and round it down to an integer using Math.floor method 