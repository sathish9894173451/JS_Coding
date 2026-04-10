var a = "madam";
function palindromeCheck(a){
    var result1 = ""
    var result2 = ""
    for(let i=0; i < a.length; i++){
        result1 += a[i];
    }
    for(let i= a.length-1; i >= 0; i--){
        result2 += a[i]
    }
    if(result1 === result2){
        return true;
    }else{
        return false;
    }
}
console.log(palindromeCheck(a))