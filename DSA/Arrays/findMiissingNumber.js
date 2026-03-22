// Find the missing number in a sequence.
let arr =[1,2,3,4,6];
let sequence = [];
function missingNum(){
for(let i=0; i < arr.length;i++){
    if(arr[i] === i + 1){
        sequence.push(arr[i])
    }else{
        return i + 1;
    }
}
}
console.log(missingNum());