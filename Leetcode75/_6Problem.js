// Input : s = "the sky is blue"
// output : "blue is sky the"
// var S = "the sky is    blue";
// const op = S.split(' ').reverse().join(' ');
// console.log("op", op)
// word = ""
// for(let i = S.length-1; i >= 0; i--){
//     if(S[i] === " "){
//         word = S[i] + word;
//     }
//     // else{
//     //     word += " "
//     // }
// }
// console.log("word", word)

function reverseWords(s) {
   let result = ""
   let word = ""
    for(i = s.length - 1 ; i >= 0 ; i--){
        if(s[i] !== ' '){
            word =  s[i] + word
            console.log("word", word)
        }
        
        else if(word !== ""){
           result += (result ? " " : "") + word
           word = ""
        }  
    }
    if(word !== ""){
           result += (result ? " " : "") + word
           
        }
    return result
}

let s = "hello world";
console.log(reverseWords(s));  // Output: "world hello"


