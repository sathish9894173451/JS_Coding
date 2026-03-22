// var  N = 8;
// var arr = [0, 1, 2, 3, 4, 5, 6, 7];
// // Output: 0 2 4 6 7 5 3 1
// // Explanation: 
// // Even-place elements : 0, 2, 4, 6
// // Odd-place elements : 1, 3, 5, 7
// function reArraging(N, arr){
//     let evenPlaced = [];
//     let oddPlaced = [];

//     for(let i=0;i<N;i++){
//         if(i % 2 === 0){
//             evenPlaced.push(arr[i]);
//         }else{
//             oddPlaced.push(arr[i]);
//         }
//     }
//     evenPlaced.sort((a,b) => a-b); //asc
//     oddPlaced.sort((a,b) => b-a); //desc

//     let reArranged = [];
//     let evenIndex = 0;
//     let oddIndex = 0;
//     for(let i = 0; i < N; i++){
//         if(i %2 === 0){
//             reArranged.push(evenPlaced[evenIndex]);
//             evenIndex++;
//         }else{
//             reArranged.push(oddPlaced[oddIndex]);
//             oddIndex++;
//         }
//     }
//     return reArranged.join(' ')
// }
// console.log("output",reArraging(N,arr));

function rearrangeArray(N, arr) {
    let evenPlace = [];
    let oddPlace = [];

    // Separate even and odd-placed elements
    for (let i = 0; i < N; i++) {
        if (i % 2 === 0) {
            evenPlace.push(arr[i]);
        } else {
            oddPlace.push(arr[i]);
        }
    }

    // Sort even-place elements in increasing order
    evenPlace.sort((a, b) => a - b);

    // Sort odd-place elements in decreasing order
    oddPlace.sort((a, b) => b - a);

    // Merge both even and odd-place elements alternatively
    let rearrangedArray = [];
    // let evenIndex = 0;
    // let oddIndex = 0;
    // for (let i = 0; i < N; i++) {
        // if (i % 2 === 0) {
            rearrangedArray.push(evenPlace);
            // evenIndex++;
        // } else {
            rearrangedArray.push(oddPlace);
            // oddIndex++;
        // }
    // }

    return rearrangedArray.join(',');
}

const N = 8;
const arr = [0, 1, 2, 3, 4, 5, 6, 7];
const output = rearrangeArray(N, arr);
console.log(output);

