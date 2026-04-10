// 4.Count of duplicate in array
const duplicate= ["may", "june", "may", "july"];

// const arrayCount = duplicate.reduce((obj,month) =>{
//     if(obj[month] == undefined){
//         // console.log("ooo",obj[month])
//         obj[month] = 1;
//         return obj;
//     }
//     else
//     {
//         obj[month]++;
//         // console.log("obj",obj)
//         // console.log("ffff",obj[month])
//         return obj;
//     }    
// },{})
// console.log(arrayCount);
function countofDuplicate(duplicate){
const obj = {};

for(let i=0; i < duplicate.length; i++){  
    const item = duplicate[i]
    if(obj[item] === undefined){
         obj[item] = 1;
    }else{
         obj[item]++;
    }

    if(obj[item] > 1){
     return item;
    }
}
// return obj 
}
console.log(countofDuplicate(duplicate))