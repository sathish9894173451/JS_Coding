// Input: s1 = "geeksforgeeks", s2 = "geeksquiz"
// Output: "fioqruz"
// Explanation: The characters 'f', 'i', 'o', 'q', 'r', 'u', and 'z' are present in either s1 or s2, but not in both.
var s1 = "geeksforgeeks", s2 = "geeksquiz";
function uncommonChar(s1,s2){
    let set1 = new Set(s1);
    let set2 = new Set(s2);
    let result = "";
    for(let char of set1){
        if(!set2.has(char)){
        result += char
    }
    }
    for (let char of set2){
        if(!set1.has(char)){
            result += char
        }
    }
     return result  
}
console.log(uncommonChar(s1,s2))
