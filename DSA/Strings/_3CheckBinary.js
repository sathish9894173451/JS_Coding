// Input: s = "101"
// Output: true
// Input: s = "75"
// Output: false
var input = "101";
function checkBinary(input){
    for(let i=0; i < input.length; i++){
        if(input[i] !== '0' && input[i] !== '1'){
            return false
        }
    }
    return true
}
console.log(checkBinary(input))