// learning dates in js
// 01_basics\07_date.js

let date = new Date(); // creates a new Date object07

console.log(date); // returns the current date and time

console.log(date.toString()); // returns the date and time in string
console.log(date.toDateString()); // returns the date in string
console.log(date.toTimeString()); // returns the time in string
console.log(date.toLocaleString()); // returns the date and time in string
console.log(date.toLocaleDateString()); // returns the date in string
console.log(date.toLocaleTimeString()); // returns the time in string

let date2 = new Date(2022, 1, 1); // creates a new Date object with specified date and time
console.log(date2);
let timestamp = Date.now(); // returns the number of milliseconds elapsed since January 1, 1970
console.log(timestamp);

