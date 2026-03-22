// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5
// for (let i = 1; i <= 5; i++) {
//     let row =""
//     for (let j = 1; j <= i; j++) {
//         row += j + " "
//     }
//     console.log(row)
// }
// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 
// for (let i = 5; i >= 1; i--) {
//     let row =""
//     for (let j = 1; j <= i; j++) {
//         row +=  j + " "
//     }
//     console.log(row)
// }
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// for(let i=1; i <= 3;i++){
//     for(j=1; j <= 3; j++){
//         console.log(`${i} x ${j} = ${i * j}`)
//     }
// }
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
// for(i=1;i<=5;i++){
//     let row =""
//     for(j=1; j <=i; j++){
//        row += "*"  
//     }
//     console.log("row", row)
// }
// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15
var num = 1;
for(let i=1; i<= 5; i++){
    let row = ""
    for(let j=1; j <= i; j++){
        row += num + " ";
        num++
    }
   
    console.log(row)
}

