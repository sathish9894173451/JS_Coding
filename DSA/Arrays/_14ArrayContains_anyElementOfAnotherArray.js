// 14.How to check if an array contains any element of another array?
const studentId = [1,2,3,4,5];

const passedId = [9,8];

let valued = studentId.some(e => passedId.includes(e)); // if it match output is true otherwise false
console.log("valued", valued)