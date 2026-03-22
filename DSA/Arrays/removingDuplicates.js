// Remove duplicate elements from an array.

// Calculate the sum of all elements in an array.
var arr = [10,20,30,10,20];
var count = {};
const duplicates = [];
let result = []
function removeDuplicate(arr){
    for(let i=0; i<arr.length;i++){
        let item = arr[i]
        if(count[item] == undefined){
            count[item] = 1
        }else{
            count[item]++
        }
        if(count[item] === 2){  //count[item] ===1 means getting unique values
        duplicates.push(item)
        }else{
         result.push(item);   
        }
    
}  
return result;
}
// removeDuplicate(arr)
console.log(removeDuplicate(arr));