// Find the largest element in an array.
let arr =  [45, 12, 75, 2, 89, 65];
let largest = 0
for(let i=0; i< arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i]
    }
}
console.log("Largest value",largest)
