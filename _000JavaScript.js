let a = [2];
let b = [2];
console.log(a == b);  // false, because they are different objects

// Both a and b are arrays, but they are created separately.
// Even though they have the same values ([2]), they are stored at different memory locations.
// In JavaScript, objects (including arrays) are compared by reference, not by value.
// Since a and b are different objects in memory, a == b returns false.

let c = a;
console.log(a == c);  // true, because they reference the same object

// Here, c is assigned the reference of a, meaning c and a point to the same memory location.
// Since they are the same object, a == c returns true.
// Arrays and objects in JavaScript are compared by reference, not by value.
// Two separately created arrays with the same values are not equal (false).