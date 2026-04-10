const ids = [15,20,4,5,3,2,15,20];

// const uniqueSorting = ids.filter((val, index, arr) => arr.indexOf(val) === index).sort((a, b)=> {
//     return a-b;
// });
// console.log(uniqueSorting);

const uniqueSorting = ids.filter((ele, index, arr) => arr.indexOf(ele) === index).sort((a,b) => {
    return a-b;
});
console.log(uniqueSorting);