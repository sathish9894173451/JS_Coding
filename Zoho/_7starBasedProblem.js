// Input: 5

// Output:
// *
// **
// ***
// ****
// *****
// let input = 5;
// for(let i=1 ; i <= input; i++){
//     let row = ""
//     for(let j=1; j <= i; j++){
//         row += "*"
//     }
//     console.log(row)
// }

// Output
// *****
// ****
// ***
// **
// *
// for(let i = input; i >= 1; i--){
//     let row = ""
//     for(let j=1; j <= i; j++){
//         row += "*"
//     }
//     console.log(row)
// }

// Output
//     *
//    ***
//   *****
//  *******
// *********
// let n = 5;
// for(let i=1 ; i <=n; i++){
//     let spaces = " ".repeat(n - i);
//     let stars = "*".repeat(2 * i - 1); // Odd number of stars like 1, 3, 5
//     console.log(spaces + stars)
// }

// Output
//   *
//  ***
// *****
//  ***
//   *
let n = 3;
// Upper Part (including middle row)
for(let i =1; i <= n; i++){
    let spaces = " ".repeat(n-i); // Leading spaces
    let stars = "*".repeat(2 * i - 1) // Odd number of stars like 1, 3, 5
    console.log(spaces + stars)
}
// Lower Part
for(let i = n-1; i >= 1; i--){
    let spaces = " ".repeat( n- i); // Leading spaces
    let stars = "*".repeat(2 * i -1); // Decreasing stars
    console.log(spaces + stars)
}
