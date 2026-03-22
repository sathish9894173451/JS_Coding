var nums = [1,2,3,4,5,6,7];
var k = 3;
//op: [5,6,7,1,2,3,4]

var arry = nums.length - k;
console.log("arry", arry) //4

var extractArray = nums.splice(arry); //[5,6,7]
console.log("extractArray", extractArray);
console.log("nums", nums) //[1,2,3,4]
var op = extractArray.concat(nums);
console.log("op", op);