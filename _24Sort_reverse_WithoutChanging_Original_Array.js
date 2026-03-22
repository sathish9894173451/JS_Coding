//24. How do you sort and reverse an array without changing a original array?
let students = ["a", "b", "c", "d", "e"];

const newArr = students.slice().reverse();
console.log(newArr); //if the input is array we can use slice(). 
// If the input is string we can use split('') and also slice()