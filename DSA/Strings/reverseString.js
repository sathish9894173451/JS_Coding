// Reverse an array without using reverse() method.
var str = "hello";

function reversedStr(str){
    var reverseStr = ""
for(let i=str.length -1; i >= 0; i--){
    reverseStr += str[i];
}
return reverseStr;
}
console.log(reversedStr(str))