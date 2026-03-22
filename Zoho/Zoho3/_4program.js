// Given two sorted arrays, merge them such that the elements are not repeated
// Eg 1: Input:
//         Array 1: 2,4,5,6,7,9,10,13
//         Array 2: 2,3,4,5,6,7,8,9,11,15
//        Output:
//        Merged array: 2,3,4,5,6,7,8,9,10,11,13,15
var arr1 = [2,4,5,6,7,9,10,13];
var arr2 = [2,3,4,5,6,7,8,9,11,15]
function mergingArray(arr1, arr2){
    var a = arr1.concat(arr2)
    // var result = a.indexOf(item)
    var getUnique = a.filter((item, index) => a.indexOf(item) === index)
        // console.log("item",a.indexOf(item),"index", index))
    var result = getUnique.sort((arr1, arr2) => {return arr1 - arr2})
    return result
}
console.log(mergingArray(arr1, arr2))
// item 0 index 0
// item 1 index 1
// item 2 index 2
// item 3 index 3
// item 4 index 4
// item 5 index 5
// item 6 index 6
// item 7 index 7
// item 0 index 8
// item 9 index 9
// item 1 index 10
// item 2 index 11
// item 3 index 12
// item 4 index 13
// item 14 index 14
// item 5 index 15
// item 16 index 16