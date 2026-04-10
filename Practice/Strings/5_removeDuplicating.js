// 👉 Input: "programming"
// 👉 Output: "progamin"

var input = "programming";
function removeDup(input){
    var result = ""
    for(let i=0; i < input.length; i++){
        char = input[i]
        if(!result.includes(char)){
         result += char   
        }
    }
    return result;
}
console.log(removeDup(input))