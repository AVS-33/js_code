// array

const myArr = [0, 1, 2, 3, 4, 5] //creates an array with 6 elements of type number
const myHeors = ["shaktiman", "naagraj"] //creates an array with 2 elements of type string by object
// console.log(myArr[1]);

// Array methods

myArr.push(6) //adds an element to the end of the array
// myArr.push(7) //adds an element to the end of the array
myArr.pop() //removes the last element of the array

myArr.unshift(9) //adds an element to the beginning of the array
myArr.shift() //removes the first element of the array

console.log(myArr.includes(9)); // returns true if the element is present in the array
console.log(myArr.indexOf(3)); // returns the index of the first occurrence of the element

const newArr = myArr.join() // joins all the elements of the array into a string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //creates a new array with the elements from index 1 to 3 (3 is not included)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //removes the elements from index 1 to 3 (3 is not included) and returns the removed elements
console.log("C ", myArr);
console.log(myn2);