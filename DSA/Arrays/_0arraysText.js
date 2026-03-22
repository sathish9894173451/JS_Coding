// 0. Create Array using Literal
let a = [];
console.log(a); //op :[]
// Creating an Array and Initializing with Values
let b = [10, 20, 30];
console.log(b); //op : [ 10, 20, 30 ]
// 2. Create using new Keyword (Constructor)
let a1 = new Array(10, 20, 30);
console.log(a1); //op : [ 10, 20, 30 ]

// 1. Accessing Elements of an Array
let a2 = ["HTML", "CSS", "JS"];
console.log(a2[0]); //op:HTML
console.log(a2[1]); //op:CSS

// 2. Accessing the First Element of an Array
let a3 = ["HTML", "CSS", "JS"];
let fst = a3[0];
console.log("First Item: ", fst); // op: First Item:  HTML

//3. Accessing the Last Element of an Array
let a4 = ["HTML", "CSS", "JS"];
let lst = a4[a4.length - 1];
console.log("Last Item: ", lst); //op: JS

//4. Modifying the Array Elements
let a5 = ["HTML", "CSS", "JS"];
console.log(a5); //op:[ 'HTML', 'CSS', 'JS' ]
a5[1]= "Bootstrap";
console.log(a5); //op:[ 'HTML', 'Bootstrap', 'JS' ]

//5. Adding Elements to the Array
let a6 = ["HTML", "CSS", "JS"];
// Add Element to the end of Array
a6.push("Node.js");
// Add Element to the beginning
a6.unshift("Web Development");
console.log(a6); //op:[ 'Web Development', 'HTML', 'CSS', 'JS', 'Node.js' ]

//6. Removing Elements from an Array
let a7 = ["HTML", "CSS", "JS"];
console.log("Original Array: " + a7); //op:HTML,CSS,JS

// Removes and returns the last element
let last = a7.pop();
console.log("After Removing the last: " + a7);//op:HTML,CSS

// Removes and returns the first element
let first = a7.shift();
console.log("After Removing the First: " + a7);//op:CSS,JS

// Removes 2 elements starting from index 1
a7.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + a7); //op:HTML

//7. Array Length
let a8 = ["HTML", "CSS", "JS"];
let len = a8.length;
console.log("Array Length: " + len); //op: 3

//8. Increase and Decrease the Array Length
let a9 = ["HTML", "CSS", "JS"]

// Increase the array length to 7
a9.length = 7;

console.log("After Increasing Length: ", a9); //[ 'HTML', 'CSS', 'JS', <4 empty items> ]

// Decrease the array length to 2
a9.length = 2;
console.log("After Decreasing Length: ", a9) //[ 'HTML', 'CSS' ]

//9. Iterating Through Array Elements
let a10 = ["HTML", "CSS", "JS"];

// Iterating through for loop
for (let i = 0; i < a10.length; i++) {
    console.log(a10[i])
}
//op
// HTML
// CSS
// JS

//For each
// Creating an Array and Initializing with Values
let a11 = ["HTML", "CSS", "JS"];

// Iterating through forEach loop
a11.forEach(function myfunc(x) {
    console.log(x);
});
//op
// HTML
// CSS
// JS

//10. Array Concatenation
let a12 = ["HTML", "CSS", "JS", "React"];
let b12 = ["Node.js", "Expess.js"];

// Concatenate both arrays
let concateArray = a12.concat(b12);

console.log("Concatenated Array: ", concateArray); //opConcatenated Array:  [ 'HTML', 'CSS', 'JS', 'React', 'Node.js', 'Expess.js' ]

//11.Conversion of an Array to String
let a13 = ["HTML", "CSS", "JS"];

// Convert array ot String
console.log(a13.toString()); //op:HTML,CSS,JS

//12.Check the Type of an Arrays
let a14 = ["HTML", "CSS", "JS"];

// Check type of array
console.log(typeof a14); //op: object

const courses = ["HTML", "CSS", "Javascript"];
console.log("Using Array.isArray() method: ", Array.isArray(courses)) //op: true
console.log("Using instanceof method: ", courses instanceof Array) //op: true

//13.A common error is faced while writing the arrays?
const a15 = [5]
// and
const a16 = new Array(5) 
// The above two statements are not the same.
//Output: This statement creates an array with an element " [5] ". Try with the following examples
// Example 1
const a17 = [5]
console.log(a17) //op:[ 5 ]

// Example 2
const a18 = new Array(5) 
console.log(a18) //op: [ <5 empty items> ]



