let num = [1, 2, 3, null, undefined, "", [4, 5, 6]];

// let result = num.flat().filter((item) => item != undefined && item != null && item != "")

// console.log("result", result)

let result1 = num.flat().filter((item) => { //filter will filter all undefined, null, "", 0, false, NaN 
    if(item){
        return item;
    }
})
console.log("result1", result1)

//without inbuild function
let nums = [1, 2, 3, null, undefined, "", [4, 5, 6]];
function cleanArray(nums){
    let result = [];
for(let i=0; i < nums.length; i++){
    let temp = nums[i];

    if(Array.isArray(temp)){
        for(j=0; j< temp.length; j++){
            if(temp[j]){
            result.push(temp[j])
            }
        }
    }else if(temp){
        result.push(temp)
    }
}
return result;
}
console.log("result", cleanArray(nums))