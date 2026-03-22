let arr1 = [1, 3, 5, 7];
let arr2 = [0, 2, 6, 8, 9];
function mergeArrays(arr1, arr2) {
    var  mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } 
        else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    
    while(i < arr1.length){
        mergedArray.push(arr1[i]);
        i++
    }

    while(j < arr2.length){
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray
}
var mergedArray = mergeArrays(arr1, arr2);

arr1 = mergedArray.slice(0, arr1.length);
arr2 = mergedArray.slice(arr1.length)

console.log("arr1[] =", arr1);
console.log("arr2[] =", arr2);