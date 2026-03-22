var s = "aaaabbbccc";

function StringNumber(s){
    let count = 1;
    let op  = "";
    for(let i = 0; i < s.length; i++){
        if(s[i] === s[i + 1]){
            count++;
        }else{
            op += s[i] + count;
            count = 1;
        }
    }
    return op;
}

console.log(StringNumber(s));