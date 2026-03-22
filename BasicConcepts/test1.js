// function twoSum(nums, target) {
//     console.log("f",nums)
// };
// twoSum(2,4)

var l1 = [2,4,3];
var l2 = [5,6,4];
var additionNum1 = 0;
var additionNum2 = 0;
// var value = [];
// var value1 = [];
function addTwoNumbers(l1, l2) {
   for(let i=0;i<l1.length;i++){
       additionNum1 += l1[i];
   }
   for(let i=0;i<l2.length; i++){
       additionNum2 += l2[i];
   }
   console.log(additionNum1);
//    for(let l2Data of l2){
//     additionNum2 += l2Data;
//     console.log(additionNum2);
//    }
    value = additionNum1 + additionNum2
//     // value1.sort(value)
    console.log("value", value)
};
addTwoNumbers(l1,l2);