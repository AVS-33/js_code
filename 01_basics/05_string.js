// basic string methods

let firstName = "Venkata Suresh";

console.log(firstName.length);  //.length returns the length of string
console.log(firstName.toUpperCase()); //.toUpperCase() returns the string in uppercase
console.log(firstName.toLowerCase()); //.toLowerCase() returns the string in lowercase
console.log(firstName.charAt(0)); //.charAt() returns the character at the specified index
console.log(firstName.indexOf('S')); //.indexOf() returns the index of the first occurrence of the specified value
console.log(firstName.lastIndexOf('S')); //.lastIndexOf() returns the index of the last occurrence of the specified value
console.log(firstName.slice(0, 4)); //.slice() extracts a part of a string
console.log(firstName.split(' ')); //.split() splits a string into an array of substrings
console.log(firstName.replace('S', 'D')); //.replace() replaces a substring with another string
console.log(firstName.trim()); //.trim() removes whitespace from both ends of a string
console.log(firstName.repeat(3)); //.repeat() repeats a string
