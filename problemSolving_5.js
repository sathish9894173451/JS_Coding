// String Algorithms / String Manipulation
let input = "AABBBCCCC"
// output = A2B3C4D5E6

function compressedString(input){
    let compressed ="";
    let count = 1;

    for (let i =0; i<input.length; i++){
        if(input[i] === input[i + 1]){
            count++;
        }else{
            compressed += input[i] + count;
            count = 1;
        }
    }
    return compressed;
}

console.log("output", compressedString(input));


