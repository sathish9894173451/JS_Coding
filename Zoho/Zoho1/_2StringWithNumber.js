var s = "aaaabbbccc";

function compressedFun(s){
    let compressed = ""
    let count = 1;

    for(let i = 0; i < s.length ; i++){
        if(s[i] === s[i + 1]){
            count++; 
        }else{
            compressed += s[i] + count;
            count = 1;
        }
        
    }
    console.log("compressed", compressed)
    return compressed
}
compressedFun(s);

