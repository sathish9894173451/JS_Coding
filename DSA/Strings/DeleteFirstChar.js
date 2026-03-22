//Removing characters from a string in JavaScript can be done in several ways, 
// depending on the situation. Whether using replace(), split() and join(), substring(), slice(),
//  or advanced methods like filter(), each approach is suited to specific needs.

let s1 = "GeeksforGeeks";
let s2 = s1.slice(1);
console.log(s2); //op:eeksforGeeks

let str = "GeeksforGeeks";
let newStr = str.substring(1);
console.log(newStr); //op: eeksforGeeks

// Using Array Destructuring with join()
let s3 = "GeeksforGeeks";
let s4 = [...s3].slice(1).join('');
console.log(s4); //op:eeksForGeeks

let s = "GeeksForGeeks";
res = s.replace("G", "");
console.log(res); //op:eeksForGeeks

s = "GeeksForGeeks";
res = s.replace(/G/g, "");
console.log(res); //op:eeksForeeks

let str1 = "Hello World";
let newStr1 = str1.substring(0, 4) + str1.substring(5);
console.log(newStr1); //op:Hell World

let str2 = "Hello World";
let newStr2 = str2.slice(0, 4) + str2.slice(5);
console.log(newStr2); //op:Hell World

let s11 = "GeeksForGeeks";
let res1 = s11.split("G").join("");
console.log(res1); //op:eeksForeeks

let s5 = "GeeksForGeeks";
let c = 'G';
let res2 = Array.from(s5)
    .filter(char => char !== c)
    .join('');
console.log(res2); //op:eeksForeeks