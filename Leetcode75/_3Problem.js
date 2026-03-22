// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 
// Explanation: The current max value is 5 which is held by Kid 3

// Kid 1, they will have 2 + 3 = 5 candies, which is greater or equal to the current max of 5.
// Kid 2, they will have 3 + 3 = 6 candies, which is greater or equal to the current max of 5.
// Kid 3, they will have 5 + 3 = 8 candies, which is greater or equal to the current max of 5.
// Kid 4, they will have 1 + 3 = 4 candies, which is less than the current max of 5.
// Kid 5, they will have 3 + 3 = 6 candies, which is greater or equal to the current max of 5

var candies = [2,3,5,1,3];
var extraCandies = 3
var arr = [];
let maxCandies = Math.max(...candies);
console.log("maxCandies", maxCandies)
for(let i=0; i < candies.length; i++){
    if(candies[i] + extraCandies >= maxCandies){
     arr.push(true)
    }else{
    arr.push(false)
    }
}
console.log("op", arr)



