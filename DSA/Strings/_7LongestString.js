// Input: arr[] = ["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks"]
// Output: "GeeksforGeeks"
// Explanation: name "GeeksforGeeks" has maximum length among all names. 
var arr = ["Geek", "Geeks", "Geeksfor", "GeeksforGeeksss", "GeeksforGeeks"]
function longestString(arr){
    let result = ""
    for(let str of arr){
        
        if(str.length > result.length){
            result = str
        }

    }
    return result
}
console.log(longestString(arr))