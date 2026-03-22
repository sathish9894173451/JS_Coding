let arr = [1,2,4,5,6]

function findMissingNumber(arr){
    arr.sort((a,b) =>  a -b )

    for(let i=0; i < arr.length; i++){
        if(arr[i] !== i + 1){
            return i + 1
        }
    }
    return arr.length + 1
}
console.log(findMissingNumber(arr))