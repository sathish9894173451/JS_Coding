//Two Pointer Technique
//Remove 3 in the original array; Output: k = 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
function removeElement(nums, val){
let k =0;
for(let i=0;i<nums.length;i++){
    if(nums[i] !== val){
        nums[k] = nums[i]
        k++;
    }
}
    return k;
}
let nums = [3,2,2,3], val = 3
let result = removeElement(nums, val);
console.log('nums', nums)
console.log('result', result)
console.log('result', nums.slice(0, result));
// function removeElement(nums, val) {
//     let k = 0; // Initialize a variable to track the position where non-val elements will be placed
    
//     // Iterate through the array
//     for (let i = 0; i < nums.length; i++) {
//         // If the current element is not equal to val, move it to the position k
//         if (nums[i] !== val) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }
    
//     return k; // Return the new length of the array
// }

// // Example usage:
// let nums = [3, 2, 2, 3];
// let val = 3;
// let result = removeElement(nums, val);
// console.log("Output:", result, ", nums =", nums.slice(0, result)); // Slice the array to only include elements up to the new length


// Input:
// nums = [0,1,2,2,3,0,4,2]
// val = 2

// Output:
// k = 5
// nums = [0,1,3,0,4]