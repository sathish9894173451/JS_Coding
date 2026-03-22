const s = "IceCreAm"; 
// Output: "AceCreIm"
function reArrange(s){
var arr = s.split('');
console.log(arr)

var isVowel = (char) => 'aeiouAEIOU'.includes(char)

let vowels = [];
for(let i=0; i< arr.length; i++){
    if(isVowel(arr[i])){
        vowels.push(arr[i])
    }
}
// console.log("vowels", vowels)
vowels.reverse();
console.log("After reverse", vowels)
for(let i=0; i<arr.length;i++){
    if(isVowel(arr[i])){
       arr[i] = vowels.shift()
    }
}
console.log("arr",arr)
return arr.join('');
}
let result = reArrange(s)
console.log("result",result)