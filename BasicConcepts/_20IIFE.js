//20.Can you create a function and invoked?
//Answer: normal function inside the bracket
// IIFE stands for immediately invoked function expression
function somefun(){
    console.log("Hi, Normal fun")
}

(function somefun(){
    console.log("Hi, I am invoked function")
})();