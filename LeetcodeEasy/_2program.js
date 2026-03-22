// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// var x = 121
// var y = [];
// function palindrome(x){
//     for(let i=x.length-1; i>=0; i--){
//         if(x[i]){
//             y.push(x[i])
//         }
//     }
//     console.log("y", y)
//     if(x === y){
//         return true
//     }
// else{
//     return false
// }
// }
// console.log(palindrome(x))



function palindrome(x){
    let str = x + "";
    let reversedStr = ""
    for(let i = str.length-1; i >= 0 ; i--){
        reversedStr += str[i]
    }
    if(reversedStr === str){
        return true
    }else{
        return false
    }

}
var x = 121
console.log(palindrome(x));