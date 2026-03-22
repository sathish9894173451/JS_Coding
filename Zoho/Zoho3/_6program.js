// Alternate sorting: Given an array of integers, rearrange the array
//  in such a way that the first element is first maximum and second element is first minimum.
//  Input  : {1, 2, 3, 4, 5, 6, 7}
//  Output : {7, 1, 6, 2, 5, 3, 4} 
var s = [1,2,3,4,5,6,7];
function sortingAlg(arr){
    let result = [];
//    arr.sort((a,b)=> {return a - b})
    // console.log("sorted", sorted)
    let maxArr = arr.slice().reverse(); // Reverse for max values
    let minArr = arr.slice();
    // console.log("maxArr", maxArr)
    // console.log("minArr", minArr)
    for(let i=0; i < arr.length / 2 ; i++){
        if(i < maxArr.length){
            result.push(maxArr[i])
        }
        if(i < minArr.length){
            result.push(minArr[i])
        }
    }
       return result.slice(0 , arr.length) //[7, 1, 6, 2,5, 3, 4, 4] slice is used to remove the last value 4
}
console.log(sortingAlg(s))

// function alternateSort(arr) {
//     arr.sort((a, b) => a - b); // Sort in ascending order

//     let maxArr = arr.slice().reverse(); // Reverse for max values
//     let minArr = arr.slice(); // Keep original sorted for min values
//     let result = [];

//     for (let i = 0; i < arr.length / 2; i++) {
//         if (i < maxArr.length) result.push(maxArr[i]); // Add max element
//         if (i < minArr.length) result.push(minArr[i]); // Add min element
//     }

//     return result.slice(0, arr.length); // Ensure correct length
// }

// // Example Usage:
// let input = [1, 2, 3, 4, 5, 6, 7];
// console.log(alternateSort(input)); // Output: [7, 1, 6, 2, 5, 3, 4]

