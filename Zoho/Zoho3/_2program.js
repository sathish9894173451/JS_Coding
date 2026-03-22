// Sort odd posotion in desc order and sort even position in asc order
// Input: 13,2 4,15,12,10,5
// Output: 13,2,12,10,5,15,4
var input = [13,2,4,15,12,10,5]
function sortingElement(input){
    let evenPos = []
    let oddPos = []
    
    for(let i=0; i<input.length; i++){
        if(i%2 ==0){
            oddPos.push(input[i])
        }else{
            evenPos.push(input[i])
        }
    }
     oddPos.sort((a,b) => {return b -a})
    evenPos.sort((a,b)=> {return a - b})

    let result = []
    let evenIndex = 0, oddIndex = 0
    for(i=0; i<input.length; i++){
        if(i%2===0){
            result.push(oddPos[oddIndex++])
        }else{
            result.push(evenPos[evenIndex++])
        }
    }
    return result
}
console.log(sortingElement(input).join(",")) //Output: 13,2,12,10,5,15,4