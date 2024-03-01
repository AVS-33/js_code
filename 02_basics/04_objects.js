// working with objects
let obj = {
    id: 1,
    name: "hitesh",
    age: 25,
    fullName: {
        userFULLName: {
            firstName: "Venkata Suresh",
            lastName: "Akula",
        },


        }
    }

console.log(obj.fullName.userFULLName.firstName + " " + obj.fullName.userFULLName.lastName)
// // log by literals
console.log(`Hello ${obj.fullName.userFULLName.firstName} ${obj.fullName.userFULLName.lastName}`);
// object concatination
let obj1 = {
	1: "A",
	2: "B",
};
let obj2 = {
	3: "C",
	4: "D",
};
let obj3 = {
    5: "E",
    6:"F"
}

let obj4 = Object.assign({},obj1, obj2, obj3); // concatination using Object.assign
let obj5 = { ...obj1, ...obj2, ...obj3 }; // spread operator
console.log(obj4);
console.log(obj5);
console.log(obj1);
console.log(Object.keys(obj1)); // returns an array of keys
console.log(Object.values(obj1)); // returns an array of values
console.log(Object.entries(obj1)); // returns an array of arrays
console.log(obj1.hasOwnProperty("1")); // returns true if the object has the property
