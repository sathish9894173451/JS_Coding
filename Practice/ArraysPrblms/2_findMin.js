// 👉 Input: [3, 7, 2, 9, 5]
// 👉 Output: 2

var input = [3, 7, 2, 9, 5]

function findMin(input){
    var smallest = input[0];
    for(let i=1; i < input.length; i++){ //why i start from 1, because  already assign input[0] as minimum.This is best way of solving problems
        if(input[i] < minimum){
            smallest = input[i]
        }
    }
    return smallest
}
console.log(findMin(input))