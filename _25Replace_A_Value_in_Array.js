const studentId = [10,20,30,40];
//Need to change 20 as 15
const replaceAt = 1; //position
const changingNumber = 15; //changing value

console.log(...studentId.slice(0, replaceAt), changingNumber,...studentId.slice(replaceAt+1))