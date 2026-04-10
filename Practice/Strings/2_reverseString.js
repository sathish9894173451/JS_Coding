var aa = "hello";
function reverseString(aa){
    let reversed = ""
    for(let i=aa.length-1; i >=0 ; i--){
        reversed += aa[i]
    }
    return reversed
}
console.log(reverseString(aa))
