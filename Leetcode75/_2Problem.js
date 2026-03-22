var str1 = "ABCABC";
var str2 = "ABC"
// Output: "ABC"
var output = ""
// for(let i=0 ; i<str1.length; i++){
function repeatingNumber(str1, str2){
    for(let i=0 ; i<str1.length; i++){
    if(str1[i] === str2[i]){
         output += str2[i]
    }           
}
return output 
}
console.log("op",repeatingNumber(str1,str2))

