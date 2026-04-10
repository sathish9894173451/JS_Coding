let arr = [1,2,4,5,6]

function findMissingNumber(arr){
    arr.sort((a,b) =>  a -b )

    for(let i=0; i < arr.length; i++){
        if(arr[i] !== i + 1){
            return i + 1
        }
    }
    // return arr.length + 1
}
console.log(findMissingNumber(arr))

// Using set
let arr1 = [1,2,4,5,6]
function missing(arr1){
let set = new Set(arr1);
for(let i=1; i < arr1.length +1; i++){ //why i started from 1. because if i start from 0, 0 is returning.So started from 1 and ended as length + 1
    if(!set.has(i)){
        return i
    }
}
}
console.log(missing(arr1))