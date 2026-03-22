// Move all zeros to the end of an array.
let arr = [0,2,0,8,10];

let positionIndex = 0
for(let i=0; i<arr.length; i++){
    if(arr[i] !== 0){
        arr[positionIndex] = arr[i];
        positionIndex++;
    }
}
while(positionIndex < arr.length){
    arr[positionIndex] = 0;
    positionIndex++;
}
console.log("result",arr)
// while (condition) {
//     // repeat this block until condition becomes false
// }