// Javascript Object compare
const obj1 = {"a": 1, "b": 2};
const obj2 = {"a": 1, "b": 2};

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true
// Javascript Object compare example 2
// import _ from "lodash";

const obj3 = {"a": 1, "b": 2};
const obj4 = {"b": 2, "a": 1};

// console.log(_.isEqual(obj3, obj4)); // true

//Javascript Array compare
const arr1 = [1, 2, 3];  
const arr2 = [1, 2, 3];  

const equalsCheck = (arr1, arr2) => {  
    return JSON.stringify(arr1) === JSON.stringify(arr2);  
}  

if (equalsCheck(arr1, arr2))  
console.log("The arrays have the same elements.");  //op
else  
console.log("The arrays have different elements.");  

// String to number
const quantity = "12";
console.log("1",typeof quantity); //string
console.log("2",Number(quantity)); //12

const a = 12.45
console.log("3",parseInt(a)); //12
console.log("4",parseFloat(a)); //12.45 Floating means number with Decimal values

console.log("3",parseInt(a ,10)); //12 A number between 2 and 36 which represents the base in a numeral system. For example, 2 would represent the binary system, while a  10 represents the decimal system.
const b = "F12.99";
console.log(parseFloat(b)); //NaN

const c = "12";
console.log(+c); //12
const d = "12.99";
console.log(+d); //12.99

const e = "12.78";
console.log(e * 1); //12.78
console.log(e / 1); //12.78
console.log("g",e - 0); //12.78

const usingFloorCeil = "13.45"; 
console.log("floor",Math.floor(usingFloorCeil)); //13
console.log("ceils",Math.ceil(usingFloorCeil)); //14

const usingCeilRound = "7.18";
console.log(Math.ceil(usingCeilRound)); //8
console.log(Math.round(usingCeilRound));//7

//Number to String
var num = 10;
console.log("Number to string",num.toString()); //10
console.log("35 lines",String(num)); //10
console.log("36 lines",num.toLocaleString()); //10
var num1 = 10.50;
console.log("Number to string using float",num1.toString()); //10.5