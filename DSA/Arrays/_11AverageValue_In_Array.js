const ids = [23, 45, 32, 56, 78];

const arrTotal = ids.reduce((a, b) => a + b)

const arrLength = ids.length;
console.log("arrLength", arrLength)

console.log("Average value is" ,arrTotal/arrLength);

// without inbuilt function
var addingArray = 0
for(let i=0; i<ids.length; i++){
    addingArray += ids[i]
}
console.log("addingArray", addingArray)
var ArrayValue = ids.length
var AverageValue = addingArray / ArrayValue;
console.log("AverageValue", AverageValue)
