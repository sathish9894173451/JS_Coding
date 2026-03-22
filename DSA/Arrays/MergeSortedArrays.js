var nums1 = [1,2,3,0,0,0];
var m = 3; 
var nums2 = [2,5,6];
var n = 3;
var op = [...nums1.concat(nums2)]
// Output: [1,2,2,3,5,6]

var sorting = op.sort((a,b) =>{
    return a-b;
})

var filterZero = sorting.filter((e) => {
    return e !==0
}) 

console.log("sorting", filterZero)
//Shortcut
var sorting1 = op.sort((a, b) => a - b).filter((e) => {return e })
console.log("sortings", sorting1)