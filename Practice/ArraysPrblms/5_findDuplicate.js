// 👉 Input: [1,2,3,1,2]
// 👉 Output: [1,2]

var input = [1,2,3,1,2];

function findDuplicate(input){
    var count = {};
    var duplicate = [];
    for(let i=0; i < input.length; i++){
        let temp = input[i];  
        if(count[temp] == undefined){
            count[temp] = 1;
        }else{
            count[temp]++;
        }

        if(count[temp] > 1){
            duplicate.push(temp)
        }
    }
    return duplicate;
}
console.log(findDuplicate(input))