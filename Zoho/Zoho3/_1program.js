// Eg 1: Input: a1b10;
//    Output: abbbbbbbbbb
function expandString(s) {
    let result ="";
    let i=0;
    while(i < s.length){
        let char = s[i];
        i++;
        let count = "";
        while(i < s.length && !isNaN(s[i])){
            count += s[i]
            i++
        }
        let value = Number(count)
        result += char.repeat(value)
    }
    return result
}

// console.log(expandString("a1b10")); // Output: "abbbbbbbbbb"
// console.log(expandString("x2y3z1")); // Output: "xxyyyz"
// console.log(expandString("p5q2r4")); // Output: "pppppqqrrrr"
console.log(expandString("b3c6d15"));
