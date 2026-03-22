// Input: nums = [1,2,3,4,5]
// Output: true
// Given an integer array nums, return true if there exists a triple of indices (i, j, k) 
// such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

function triplet(nums){
    n = nums.length
    for(let i=0; i<n-2; i++){
        for(let j=i+1; j < n-1; j++){
            for(let k=j+1; k < n; k++){
                if(nums[i] < nums[j] && nums[j] < nums[k]){
                return true
                }
            }
        }
    }
    return false
}


var nums = [1,2,3,4,5];
console.log("output", triplet(nums))


