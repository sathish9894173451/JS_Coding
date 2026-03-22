// Input: txt = "GeeksForGeeks", pat = "Fr"
// Output: -1
// Explanation: Fr is not present in the string GeeksForGeeks as substring.

// Input: txt = "GeeksForGeeks", pat = "For"
// Output: 5
// Explanation: For is present as substring in GeeksForGeeks from index 5 (0 based indexing).
var txt = "GeeksForGeeks" , pat = "For";
function firstOccurence(txt, pat){
    let txtLength = txt.length;
    let patLength = pat.length;
    for(let i=0; i < txtLength-patLength;i++){
        let match = true;
        for(j=0; j < patLength; j++){
           if(txt[i+j] !== pat[j]){
                match = false;
                break;
            }
        }
        if(match){
            return i
        }
    }
    return -1
}
console.log(firstOccurence(txt, pat))
