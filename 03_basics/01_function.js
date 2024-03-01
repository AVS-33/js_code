// define function
function greet() {
	//syntax to define a function
	// console.log('Hello, world!');
}
greet(); //invoke function/function call
// define function with parameters
function greet(name) {
	//name is a parameter which is passed to the function
	// console.log(`Hello, ${name}!`);
}
greet("John"); //jhon is an argument which is passed to the function when it is invoked
// define function with default parameters
function greet(name = "World") {
	//name is a parameter which is passed to the function
	// console.log(`Hello, ${name}!`);
}
// greet(); //greet('World') is an argument which is passed to the function when it is invoked and the default value is used
// greet('John'); //greet('John') is an argument which is passed to the function when it is invoked
// define function with return statement
function addTwoNumbers(num1, num2) {
	return num1 + num2; //return statement is used to return a value
}
let result = addTwoNumbers(2, 3);
// console.log(result);
// define function with infinite parameters
function calculateCartTotal(val1, val2, ...items) {
	// return items.reduce((total, item) => total + item, 0);//reduce method
	return items;
}
console.log(calculateCartTotal(1, 2, 3, 4));
// passing array to function
function myobj(myObject) {
    console.log(`username is ${myObject.username} and email is ${myObject.email}`);
}
myobj({
    username: "suresh",
    email: "avs@google.com"
});
// passing an array to function
function myarr(myArray) {
    console.log(`array value is ${myArray}`);
    
}
myarr([1,2,3,4])