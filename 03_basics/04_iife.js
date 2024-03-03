// Immediately Invoked Function Expressions (IIFE)
// IIFE = Immediately Invoked Function Expression or anonymous function which is executed as soon as it is defined


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
