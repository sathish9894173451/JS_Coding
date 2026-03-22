//  var nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// var k = 1;
// var a = []
// var b = [];
// for(let i =0; i< nums.length; i++){
//     if(nums[0] !== 0){
//        a.push(nums.shift(0));
//     }
//     console.log("nums",nums)
// console.log("a value",a)
//  return nums
// }
// b = nums.splice(1,0,10);
//  console.log("b",b)

// console.log("After nums",nums)
var nums = [2,3,1,1,4]
var a = nums[0];
var b = nums.splice(2,0,a);
console.log("nums",nums);
nums.shift(0);
if(a === nums[1]){
    nums.push(a);
}
nums.splice(1,1);
console.log("nums",nums);



// console.log("b",b.splice(1,0, a))
// console.log("last nums",a)
// console.log("last nums",nums)

