// // Majority ELement or repeating element
// var nums = [2,2,1,1,1,2,2,5]
//Output: 2

// var op = nums.sort((a,b) => { return a- b})
// console.log(op); // 1,1,1,2,2,2,2,5

// function majority(op){
//     let maxCount = 0
//     let majorityval = op[0];
//     let count = 1;
//     for(let i =0; i<op.length-1; i++){
//         if(op[i] === op[i+1]){
//             count++;
//         }else{
//             if(count > maxCount){
//             maxCount = count;
            
//             }
//             count = 1; 
//         }
//     }
//     return majorityval
// }

// console.log("output", majority(op));


// var nums = [2,2,1,1,1,2,2,5];

// var sorting = nums.sort((a,b) => {return a - b}) // 1,1,1,2,2,2,2,5
// console.log('s', sorting)

// function majorityEle(sorting){
//     let count = 1;
//     let majority = sorting[0];
//     let maxCount = 0;

//     for(let i=0; i < sorting.length - 1; i++){
//         if(sorting[i] === sorting[i+1]){
//             count++;
//         }else{
//             if(count > maxCount){
//             majority = sorting[i];
//             maxCount = count;
//             }
//             count = 1
//         }
//     }
//     if(count > maxCount){
//         majority = sorting[sorting.length - 1]
//     }
//     return majority;
// }
// console.log(majorityEle(sorting));


// function findMajorityElement(nums) {
//     let candidate = null;
//     let count = 0;

//     // Find potential candidate for majority element
//     for (const num of nums) {
//         if (count === 0) {
//             candidate = num;
//         }
//         count += (num === candidate) ? 1 : -1;
//     }

//     // Verify if candidate is majority element
//     count = 0;
//     for (const num of nums) {
//         if (num === candidate) {
//             count++;
//         }
//     }

//     // Check if candidate is indeed majority element
//     if (count > nums.length / 2) {
//         return candidate;
//     } else {
//         return null; // No majority element found
//     }
// }

// const nums = [2, 2, 1, 1, 1, 2, 2, 5];
// const majorityElement = findMajorityElement(nums);
// console.log("Majority Element:", majorityElement);


var nums = [2,2,1,1,1,1,1,1,2,2,5];

function majorityElement(nums){
    let obj = {}; // number : count
    let maxCount = 0;
    let result;

    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        if(obj[num]){
            obj[num]++;
        }else{
            obj[num] = 1;
        }

        if(obj[num] > maxCount){
            maxCount = obj[num];
            result = num;
        }
    }

    return result;
}

// console.log(majorityElement(nums));

console.log("output", majorityElement(nums));


