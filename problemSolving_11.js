//Write a function that takes a two-dimensional array of integers as input and returns the path with the maximum sum of elements from the top-left to the bottom-right corner of the array.

var num1 = [[1,2,3,4,5], [6,7,8,9]];

let max = num1[0][0];

function findMax(num1){
    for(let i=0; i < num1.length;i++){
        for(let j=0; j<num1[i].length; j++){
            if(num1[i][j] > max){
               max = num1[i][j];
            }
        }
    }
    console.log("max", max);
}
findMax(num1);