//Actual
function checkPalindrome(str){
    str = str.replace(/\W/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
     
}
//My try
// function checkPalindrome(str){
//     var string1 = str.split('').reverse().join('');
//     return string1 === str;
// }

console.log(checkPalindrome('madaM'));//radar, level , madam are palindrome
// without inbuilt function
function reverseStr(str){
var reversed = ""
for(let i=str.length - 1; i >= 0 ; i--){
    reversed += str[i]
}
if(str == reversed){
    return true
}else{
    return false
}
}
console.log("reverseStr", reverseStr("madam"))