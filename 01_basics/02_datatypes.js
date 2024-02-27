// javascript data types
// 1. number
// 2. string
// 3. boolean
// 4. undefined
// 5. null
// 6. symbol
// 7. object
// 8. function
// 9. bigint
// 10. array
// 11. tuple
// 12. enum
// 13. any
// 14. unknown
// 15. never

/*Certainly! Here's an explanation of the JavaScript data types you listed:

1. **Number**: Represents numeric values, including integers and floating-point numbers.
2. **String**: Represents sequences of characters, enclosed within single ('') or double ("") quotes.
3. **Boolean**: Represents a logical value, either `true` or `false`.
4. **Undefined**: Represents a variable that has been declared but not assigned any value. It's also the default value of uninitialized variables.
5. **Null**: Represents the intentional absence of any object value. It's a primitive value.
6. **Symbol**: Represents a unique and immutable data type introduced in ES6. Symbols are often used as property keys in objects to prevent unintended property name collisions.
7. **Object**: Represents a collection of key-value pairs, where values can be of any data type, including other objects. Objects in JavaScript are reference types.
8. **Function**: Represents a block of reusable code that performs a specific task.
9. **BigInt**: Represents arbitrary-precision integers, which can represent whole numbers larger than 2^53 - 1, the largest number JavaScript can reliably represent with the Number primitive type.
10. **Array**: Represents a collection of elements, indexed by contiguous integers. Arrays can contain elements of any data type, including other arrays or objects.
11. **Tuple**: Not a built-in data type in JavaScript, but tuples can be represented using arrays where the types of elements at specific indices are fixed.
12. **Enum**: Not a built-in data type in JavaScript, but similar functionality can be achieved using objects or constants to represent a set of named constants.
13. **Any**: Represents a dynamic data type that can hold values of any data type. It's used to opt-out of type checking during compilation in TypeScript.
14. **Unknown**: Similar to the `any` type, but provides type safety. Variables of type `unknown` can't be directly assigned to other types without type assertion or type checking.
15. **Never**: Represents the type of values that never occur. It's used to indicate functions that never return, or variables that are always assigned never.

These are the common data types in JavaScript, covering both primitive and composite data types. Each serves its purpose in different scenarios, allowing developers to build versatile and robust applications. */

// examples
// Number: Represents numeric values, including integers and floating-point numbers.
let integerNumber = 42;
let floatingPointNumber = 3.14;
// String: Represents sequences of characters, enclosed within single ('') or double ("") quotes.
let greeting = 'Hello, world!';
let name = "Alice";
// Boolean: Represents a logical value, either 'true' or 'false'.
let isSunny = true;
let isRaining = false;
// Undefined: Represents a variable that has been declared but not assigned any value.
let undefinedVariable;
// Null: Represents the intentional absence of any object value. It's a primitive value.
let nullValue = null;
// Symbol: Represents a unique and immutable data type introduced in ES6. Symbols are often used as property keys in objects to prevent unintended property name collisions.
let symbol = Symbol('my-symbol');
// Object: Represents a collection of key-value pairs, where values can be of any data type, including other objects.
let person = {
    name: 'Alice',
    age: 25,
    address: '123 Main St',
};
// Function: Represents a block of reusable code that performs a specific task.
function greet() {
    console.log('Hello, world!');
}
// BigInt: Represents arbitrary-precision integers, which can represent whole numbers larger than 2^53 - 1, the largest number JavaScript can reliably represent with the Number primitive type.    
let bigIntValue = 9007199254740991n;
// Array: Represents a collection of elements, indexed by contiguous integers.
let numbers = [1, 2, 3, 4, 5];
// Tuple: Not a built-in data type in JavaScript, but tuples can be represented using arrays where the types of elements at specific indices are fixed.
let tuple = [1, 'hello', true];
// Enum: Not a built-in data type in JavaScript, but similar functionality can be achieved using objects or constants to represent a set of named constants.
const Direction = {
    UP: 'UP',
    DOWN: 'DOWN',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT'
};
// Any: Represents a dynamic data type that can hold values of any data type. It's used to opt-out of type checking during compilation in TypeScript.
let dynamicValue; // Can hold any type of value
dynamicValue = 42;
dynamicValue = 'Hello';
// Unknown: Similar to the 'any' type, but provides type safety. Variables of type 'unknown' can't be directly assigned to other types without type assertion or type checking.
let unknownValue; // Type is initially unknown
unknownValue = 42; // Can be assigned any value
if (typeof unknownValue === 'number') {
    let doubled = unknownValue * 2; // Type safety
}
// Never: Represents the type of values that never occur

/**
 * Throws an error with the given message.
 *
 * @param {string} message - The error message to be thrown
 * @return {never} 
 */
