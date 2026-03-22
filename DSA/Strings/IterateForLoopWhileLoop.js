// Using Normal for loop
let str = "Hello";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
// H
// e
// l
// l
// o

// Using for of loop
let str1 = "Hello";
for(let char of str1){
    console.log(char);
}
// H
// e
// l
// l
// o

// Using for in loop
let str2 = "Hello";
for (let index in str2) {
    console.log(str2[index]);
}
// H
// e
// l
// l
// o

// Using forEach Loop
let str3 = "Hello";
str3.split('').forEach((char, index) => {
    console.log(`${index}: ${char}`);
});
// 0: H
// 1: e
// 2: l
// 3: l
// 4: o

