// S = "geeksforgeeks"
// Output: g
// Explanation: g, e, k and s are the repeating
// characters. Out of these, g occurs first.
var str = "geeksforgeeks";
function firstRepeatingCharacter(str) {
    const freq = {};
    for(let char of str){ // If char is not there in freq it is undefined 
        freq[char] = (freq[char] || 0) + 1 // (undefined || 0) is 0
    }                     // If char is there in freq it is 1 and we are adding again 1 so it is 2
    for (let char of str){
        if(freq[char] > 1){
            return char
        }
    }
    return null
}
console.log(firstRepeatingCharacter(str)); // Output: g

