const number = [1,2,3,4]; //[2,4,6,8]

function reArrange(number){
    var output = [];
    for(let i =0; i< number.length; i++){
        output.push(number[i] + number[i]);
    }
    return output;
}
console.log("output", reArrange(number));