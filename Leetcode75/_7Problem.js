// Not cleared
// let nums = [1,2,3,4]
// Output: [24,12,8,6]
// let result = []
// for(i=0; i<nums.length; i++){
//     if(nums[i]){
//         result.push(nums[i++]) 
//     }
// }
// console.log("result", result)
function productExceptSelf(nums) {
    let n = nums.length;
    let output = new Array(n).fill(1);

    // Step 1: Calculate left products
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        output[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Step 2: Calculate right products and update output
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return output;
}

// Example usage:
let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]
