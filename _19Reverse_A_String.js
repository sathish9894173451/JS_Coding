const str = "Welcome to ARC tutorials";

var reverseStr = reversedFun(str, "")

function reversedFun(str, separator){
    return str.split(separator).reverse().join("")
}

console.log("reverseStr", reverseStr)
// var op = str.split("").reverse().join("");
// console.log(op)
// without inbuilt function
var reversed = ""
console.log(str.length)
console.log(str.length -1)
for(let i=str.length -1; i >= 0; i--){
    reversed += str[i]
}
console.log("reversed", reversed)
