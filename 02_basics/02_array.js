// array methods
let myArr = [0, 1, 2, 3, 4, 5];
let myHeors = ["shaktiman", "naagraj"];
myArr.push(myHeors);
// console.log(myArr); // prints [0, 1, 2, 3, 4, 5, ["shaktiman", "naagraj"]] gives am multi dimensional array
// create an multi dimensional array
let myArr2 = [
    [0, 1],
    [2, 3],
    [4, 5]
]

// console.log(myArr2);
// console.log(myArr2[0][1]); // prints 1
// concatenation in array
let myArr3 = myArr.concat(myArr2);
// console.log(myArr3);

// another way of concatenation
let myArr4 = [...myArr, ...myArr2]; // spread operator
// console.log(myArr4);
// using falt operator
let myArr5 = myArr.concat(myArr2).flat(); //form a single dimensional array from a multi dimensional array
// console.log(myArr5);
// isArray
console.log(Array.isArray(myArr)); // returns true if the object is an array
// arry.from
console.log(Array.from(myArr));// creates an array from an object
console.log(Array.from({ name: "hitesh" })); // gives empty array because not declared to create either key or value to an array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
