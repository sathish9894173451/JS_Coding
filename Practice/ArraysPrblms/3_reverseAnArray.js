// 👉 Input: [1,2,3,4]
// 👉 Output: [4,3,2,1];

var input = [1,2,3,4];

function reverseValue(input){
    var reversed = [];
    for(let i = input.length-1; i >= 0; i--){
        reversed.push(input[i]);
    }
    return reversed
}
console.log(reverseValue(input))