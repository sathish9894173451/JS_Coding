//String Manipulation
// Example usage:
// const S = "abcd";
// const T = "abcde";

// //  const diff = (S,T) => (S.split(T).join()).slice(1);
// //  console.log("diff",diff(T,S))

// const diff = (S,T) => (S.split(T).join()).split(1);
// // console.log("differ",diff(S,T));
// console.log("diff",diff(T,S));
// const C = diff(T, S)

// console.log(C)

// const A = "The quick brown fox"

// const B = "The quick brown fox jumps over the lazy dog."

// const diff = (diffMe, diffBy) => diffMe.split(diffBy).join('')

// const C = diff(B, A)

// console.log(C)

// const var = "string"
// const var2 = "string 2"
// const differences = s.split(t)
// console.log(differences);

// console.log("Print", s.localeCompare(t))

// function compared(s,t)
// {
//     var s = s.toLowerCase();
//     var t = t.toLowerCase();
//     var result;
// //  s = s.split("").sort().join("");
// //  t = t.split("").sort().join("");
// //  console.log("s", s)
// // return s===t;
// // if(s !== t){
// for(let schar of s){
//     sresult = schar.length;
//     // console.log(result, "in s")
//     for (let tchar of t){
//         // console.log(result, "in t")
//         tresult =tchar
//     }
//     if (sresult !== tresult){
//         return tresult
//     }
//     else{
//         return sresult 
//     }
    
// }
// // }
// }
// console.log(compared(s,t))
// console.log(findAddedLetter(s, t)); // Output: "e"

// Example usage:
function diff(A, B){

var output1 =""
var difference = ""
for(i=0; i <A.length && B.length; i++){
     if(A[i] === B[i]){
        output1 += A[i]
     }else{
        difference += B[i]
     } 
}

   if(B.length > A.length){
     difference += B.slice(A.length)
   }
 return difference
}
console.log("op",diff("abcd", "abcde"))
