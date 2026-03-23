// 👉 Input: [1,2,2,3,1]
// 👉 Output: {1:2, 2:2, 3:1}
var input = [1,2,2,3,1];

function countFrequency(input){
    var count = {}
    for(let i=0; i < input.length; i++){
        let temp = input[i]
        if(count[temp] == undefined){
            count[temp] = 1;
        }else{
            count[temp]++;
        }
    }
    return count;   
}

console.log(countFrequency(input))