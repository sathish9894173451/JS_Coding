//Strings in JavaScript are immutable.
// Using Single Quote
let s1 = 'abcd';
console.log(s1); //op : abcd

// Using Double Quote
let s2 = "abcd";
console.log(s2); //op : abcd

//1.Template Literals (String Interpolation)
let s3 = 'gfg';
let s4 = `You are learning from ${s3}`; //op: You are learning from gfg

// 2.Empty String
let s5 = '';
let s6 = "";
console.log(s5); //op: ''
console.log(s6); //op: ''

//3.Multiline Strings (ES6 and later)
let s7 = `
    This is a
    multiline
    string`;

console.log(s7);
// This is a
//     multiline
//     string

//4.Finding the length of a String
let s8 = 'JavaScript';
let len = s8.length; // op:10

//5.String Concatenation
let s9 = 'Java';
let s10 = 'Script';
let res = s9 + s10; 
console.log("Concatenated String: " + res); //Concatenated String: JavaScript

//6. Escape Characters
// \' - Inserts a single quote
// \" - Inserts a double quote 
// \\ - Inserts a backslash
const s11 = "\'GfG\' is a learning portal";
const s12 = "\"GfG\" is a learning portal";
const s13 = "\\GfG\\ is a learning portal";
console.log(s11); //   'GfG' is a learning portal
console.log(s12); //   "GfG" is a learning portal
console.log(s13); //   \GfG\ is a learning portal

//7.Breaking Long Strings
const s14 = "'GeeksforGeeks' is \
a learning portal";
console.log(s14); // op: 'GeeksforGeeks' is a learning portal
//Note: Below  method might not be supported on all browsers. A better way to break a string is by using the string addition.
const s15 = "'GeeksforGeeks' is a"
    + " learning portal";
console.log(s15); //'GeeksforGeeks' is a learning portal

//8. Find Substring of a String
let s16 = 'JavaScript123 Tutorial';
let s17 = s16.substring(0, 10);
console.log(s17); //op:JavaScript

//9.Convert String to Uppercase and Lowercase
let s18 = 'JavaScript';
let uCase = s18.toUpperCase();
let lCase = s18.toLowerCase();
console.log(uCase); //op:JAVASCRIPT
console.log(lCase); //op:javascript

//10.String Search in JavaScript
let s19 = 'def abc abc';
let i = s19.indexOf('abc');
console.log(i); //op: 4

//11.String Replace in JavaScript
let s20 = 'Learn HTML at GfG and HTML is useful';
let s21 = s20.replace(/HTML/g , 'Javascript')
console.log(s21); //op: Learn JavaScript at GfG and JavaScript is useful

//12.Trimming Whitespace from String
let s22 = '    Learn JavaScript       ';
let s23 = s22.trim();
console.log(s23); // op: JavaScript

//13.Access Characters from String
let s24 = 'Learn JavaScript';
let s25 = s24[6];
console.log(s25); //J

s26 = s24.charAt(6);
console.log(s26); //J

//14.String Comparison in JavaScript
let s27 = "Ajay"
let s28 = new String("Ajay");

console.log(s27 == s28);  // true (type coercion)
console.log(s27 === s28); // false (strict comparison)
console.log(s27.localeCompare(s28)); // 0 (means they are equal lexicographically

//15.Passing JavaScript String as Objects
const s29 = new String("GeeksforGeeks");
console.log(s29); //op: [String: 'GeeksforGeeks']

const str1 = new String("GeeksforGeeks");
const str2 = "GeeksforGeeks";

console.log(str1 == str2);  //true
console.log(str1 === str2); //false


