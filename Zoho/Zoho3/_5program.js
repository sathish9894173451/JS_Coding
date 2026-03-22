// Eg 1: Input: one two three
//       Output: three two one
var input = "one two three";
function reverseString(s){
    let result = ""
    let word = ""
    for(let i=s.length-1; i >=0; i--){
        if(s[i] !== " "){
            word = s[i] + word
        }else {
            result += " " + word  // (result ? " " : "") + word
            word=""  
        }
       
    }
    if(word !== ""){
        result += (result ? " " : "") + word
    }
    
    return result
}
console.log(reverseString(input)) //three two one