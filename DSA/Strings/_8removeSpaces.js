// Input: s = "geeks  for geeks"
// Output: "geeksforgeeks"
// Explanation: All the spaces have been removed.
var S = "geeks  for geeks"
function removeSpace(S){
    let word = ""
for(let space of S){
    if(space === " "){
        word = word + ""
    }else{
    word = word + space
    }
}
    return word
}
console.log(removeSpace(S))