// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
var chars = ["a","a","b","b","c","c","c"];
function stringCompression(chars){
    let compress = ""
    let count = 1;
    for(let i=0; i<=chars.length -1; i++){
        if(chars[i] === chars[i+1]){
            count++;
            // console.log("compress", compress)
        }else {
            compress += chars[i] + count
             count =1;
        }
    }
    return compress
}
console.log(stringCompression(chars))