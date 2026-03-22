// You have a long flowerbed in which some of the plots are planted, and some are not. However, 
// flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not 
// empty, and an integer n, return true if n new flowers can be planted in the flowerbed without 
// violating the no-adjacent-flowers rule and false otherwise.

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
var flowerbed = [1,0,0,0,1]
var newFlower = 1;
count =0
function flowered(flowerbed, newFlower){
    
for(let i =0 ; i < flowerbed.length;i++){
    // if(flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && 
    //     (i === flowerbed.length -1 || flowerbed[i + 1] === 0)){
        // flowerbed[i] = newFlower
        // count++;
    if(flowerbed[i] === 0 && i === flowerbed.length -1 === 0 && flowerbed[i + 1] ===0 ){
        flowerbed[i] = newFlower
        count++;
    }else if(flowerbed[i - 1] === 0 && flowerbed[i+1] === 0){
        flowerbed[i] = newFlower
        count++;
    }
       
    }
    if(count >= newFlower){
        return true
    }else{
        return false
    } 
} 


let res = flowered(flowerbed, newFlower)
console.log("res",res)

