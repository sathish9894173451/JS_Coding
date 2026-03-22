// Find if a String2 is substring of String1. If it is, return the index of the first occurrence. 
// else return -1.
// Eg 1:Input:
//         String 1: test123string
//          String 2: 123
//         Output: 4
var str1 = "test123string";
var str2 = "123"; //If str2 is 1234 then it should return -1 
function findingElement(str1,str2){
        if(str1.indexOf(str2)){
            return str1.indexOf(str2)
        }else{
            return -1
        }
}
console.log(findingElement(str1,str2))

//If it match you need to print true, otherwise false.In this case we can use includes
function isSubstring(str1, str2) {
    return str1.includes(str2);
}

console.log(isSubstring("test123string", "123")); // Output: true
console.log(isSubstring("abcdef", "xyz")); // Output: false
