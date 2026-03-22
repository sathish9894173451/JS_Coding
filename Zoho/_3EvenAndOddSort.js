const N = 8;
const arr = [0, 1, 2, 3, 4, 5, 6, 7];
// Output: 0 2 4 6 7 5 3 1

function reArranging(arr){
    let evenPlace = [];
    let oddPlace = [];

    for(let i =0; i< arr.length; i++){
        if(i % 2 === 0){
            evenPlace.push(arr[i])
        }else{
            oddPlace.push(arr[i]);
        }
    }

    evenPlace.sort((a,b) => a - b);
    oddPlace.sort((a,b) => b-a);

    let mergedArray = [];
    mergedArray.push(evenPlace);
    mergedArray.push(oddPlace);

    console.log("MergedArray" , mergedArray.join())

}
reArranging(arr);