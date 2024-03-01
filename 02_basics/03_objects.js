// declaring an symbol
const symbol = Symbol("key1"); 

// declaring an object
const object = {
    key1: "value1",
    key2: "value2",
    [symbol]: "value3", //using the symbol as a key
};
// accessing an object
console.log(object.key1); // prints value1 // dot notation method
console.log(object["key2"]); // prints value2 // bracket notation method
console.log(object[symbol]); // prints value3 // acessing the symbol key
// freeze an object
Object.freeze(object);// prevents the object from being modified
// 