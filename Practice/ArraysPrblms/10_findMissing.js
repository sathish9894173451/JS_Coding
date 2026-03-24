// 👉 Input: [1,2,4,5]
// 👉 Output: 3

var input = [1,2,4,5];

function sequenceNumber(input){
    let n = input.length + 1; //because one number is missing so we added + 1
    let set = new Set(input) // [1,2,4,5]
    for(let i=1 ; i<= n; i++){
        if(!set.has(i)){ // set is used to store unique values , now [1,2,4,5] is stored. So i value is checking inside the stored array, and 3 is returning
            return i
        }
    }
}
console.log(sequenceNumber(input))