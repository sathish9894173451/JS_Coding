const arrList = [10,20,90,40,50];
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
var greatestNum = 0;
for(let i=0; i<arrList.length -1; i++){
    if(arrList[i] > 0 &&  arrList[i] > greatestNum){
        greatestNum = arrList[i]
    }
}
console.log("greatestNum", greatestNum)

const arrList1 = [10,20,90,40,50];
var MinmumNum = arrList1[0];
for(let i=0; i<arrList1.length -1; i++){
    if(arrList1[i] < MinmumNum){
        MinmumNum = arrList1[i]
    }
}
console.log("MinmumNum", MinmumNum)