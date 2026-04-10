const arrList = [10,20,90,40,50,100];
// //Find max value 
function findMax(arrList){
    return arrList.reduce((prev, curr) => {
       return prev > curr ? prev : curr
    })
}
console.log("Max Number",findMax(arrList));

// find min val
function findMin(arrList){
    return arrList.reduce((prev, curr) => {
       return prev < curr ? prev : curr
    })
}

console.log("Min Number",findMin(arrList));
// without inbuilt function 
var greatestNum = arrList[0];
for(let i=0; i<arrList.length; i++){
    if(arrList[i] > greatestNum){
        greatestNum = arrList[i]
    }
}
console.log("greatestNum", greatestNum)

const arrList1 = [10,20,90,40,50];
var MinmumNum = arrList1[0];
for(let i=0; i<arrList1.length; i++){
    if(arrList1[i] < MinmumNum){
        MinmumNum = arrList1[i]
    }
}
console.log("MinmumNum", MinmumNum)

// var maxNum = arrList[0];
// for(let i=0; i < arrList.length; i++){
//     if(arrList[i] > maxNum){
//       maxNum = arrList[i]
//     }
// }
// console.log("max", maxNum)

// var minNum = arrList1[0];
// for(let i=0; i< arrList1.length; i++){
//     if(arrList1[i] < minNum){
//        minNum =arrList1[i]
//     }
// }
// console.log("min",minNum)