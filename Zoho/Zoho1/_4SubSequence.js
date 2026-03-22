const A = "AXY"; 
const B = "YADXCP";

function subSequence(A,B){
    let j = 0;
    for(let i = 0; i < B.length && j < A.length; i++){
        if(A[j] === B[i]){
            j++;
        }
    }
    return j === A.length;
}

if(subSequence(A,B)){
    console.log("true")
}else{
    console.log("false")
}