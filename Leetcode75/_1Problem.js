var word1 = "abc";
var word2 = "pqr";
//Output: "apbqcr"
var output = "";

for (let i=0; i<word1.length; i++){
    output += word1[i] + word2[i]
}
console.log(output); //Output: "apbqcr"


var word1 = "abcd";
var word2 = "pq"
// Output: "apbqcd"
var output = ""
for(let i=0; i<word1.length; i++){
    if(word2[i] != undefined){  //because its giving "apbqcundefineddundefined" this output
    output += word1[i] + word2[i];
}else{
    output += word1[i];
}
}
console.log("output", output) // Output: "apbqcd"


