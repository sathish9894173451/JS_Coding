// Input: s = "Geeks"
// Output: "skeeG"
var input = "Geeks"
// var output = input.split("").reverse().join("");
// console.log("output", output)
function reverseString(input){
var char =""
for(let i=input.length -1; i >= 0; i--){
    // if(input[i])
    char += input[i]
}
return char
}
console.log(reverseString(input))
