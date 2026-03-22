// let arr =  [45, 12, 75, 2, 89, 89, 65];
let arr = [4,6,8,3,9,5]

    let max = -Infinity;  //we can also assign 1
    let secondMax = -Infinity //we can also assign 0
for(let i=0; i < arr.length; i++){
    if(arr[i] > max){
        secondMax = max //Something assigning to secondmax
        max = arr[i];   //Something assigning to max
    }else if(arr[i] > secondMax && arr[i] < max){ //inbetween both condition
        secondMax = arr[i];
    }
}
console.log("Second Largest is", secondMax)
