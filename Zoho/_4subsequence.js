const A = "AXY"; 
const B = "YADXCP";

function subSequence(A,B){
    let j =0;

    for(let i=0; i < B.length && j < A.length; i++){
        if(A[j] === B[i]){
            j++;
        }
    }
    return j === j.length;
}

if(subSequence(A,B)){
    console.log("This is sub Sequence")
}else{
    console.log("This is not Subsequence")
}