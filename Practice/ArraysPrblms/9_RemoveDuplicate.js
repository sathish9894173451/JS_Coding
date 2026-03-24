// 👉 Input: [1,1,2,2,3]
// 👉 Output: [1,2,3]

var input = [1,1,2,2,3];

function removeDuplicate(input){
    var count = {}
    var uniqueVal = [];
    for(let i= 0; i < input.length;i++){
        let temp = input[i];
        if(count[temp] == undefined){
            count[temp] = 1;
        }else{
            count[temp]++;
        }

        if(count[temp] === 1){
            uniqueVal.push(temp)
        }
    }
    return uniqueVal;
}
console.log(removeDuplicate(input))