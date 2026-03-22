// 7.Sorting in array
const numbers1 = [10,4,8,2,15,28,56];

const sorting = numbers1.sort((a,b) =>{
    return a-b; //asc order a-b, desc order b-a
})
console.log("sorting", sorting)
// without inbuilt function using bubble sort
const numbers = [10,4,8,2,15,28,56];
function sortingNumber(numbers){
for(let i=0; i < numbers.length -1;i++){
    for(let j=0; j < numbers.length - 1 - i; j++){ //(7 - 1 - 0) //until (7 - 1 - 6)
        if(numbers[j] > numbers[j+1]){
            // swap
        let temp = numbers[j];
        numbers[j] = numbers[j+1];
        numbers[j+1] = temp;
    }
}
}
console.log("Final Sorted Array:", numbers);
}
sortingNumber(numbers);

// if you want 1st element comes first like [10, 15, 2, 28,4, 56, 8] then use simple sort.It works as ASCII
// const sorting = numbers.sort()