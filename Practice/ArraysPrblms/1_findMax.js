// 👉 Input: [3, 7, 2, 9, 5]
// 👉 Output: 9

var input = [3, 7, 2, 9, 5, 10]
function findMax(input){
    var largest = input[0];
    for(let i=1;i < input.length;i++){ // why i start from 1, because  already assign input[0] as largest.This is best way of solving problems
        if(input[i] > largest){
            largest = input[i]
        }
    }
    return largest
}
console.log(findMax(input))