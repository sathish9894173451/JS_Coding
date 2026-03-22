// Input: s = "testsample"
// Output: 'e'
// Explanation: e is the character which is having the highest frequency.

// var s = "testsample"
// function mostFrequent(s){
//     let Freq = {};
//     let maxChar =""
//     let maxCount = 0
//     for(let i=0; i < s.length; i++){
//         let char = s[i]
//         if(Freq[char] === undefined){
//             Freq[char] = 1
//         }else{
//             Freq[char]++
//         }
//         if(Freq[char] > maxCount){
//             maxCount = Freq[char]
//             maxChar = char
//         }
//     }
//     return maxChar
// }
// console.log(mostFrequent(s))
function highestFrequencyChar(s) {
    let freq = {};
    let maxCount = 0;
    let resultChar = '';
    // First pass: Count frequencies
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        console.log("freq[char]", freq[char])
        console.log("char", char)
        if (freq[char] === undefined) {
            freq[char] = 1;
        } else {
            freq[char]++;
        }

        if (freq[char] > maxCount) {
            maxCount = freq[char];
        }
    }

    // Second pass: Find first character with max frequency
    

    for (let char in freq) {
        if (freq[char] === maxCount) {
            if (resultChar === '' || char < resultChar) {
                resultChar = char;
                break;
            }
        }
    }
    return resultChar;
}

// Example usage:
let s = "output";
let output = highestFrequencyChar(s);
console.log(output); // Output: 't'
