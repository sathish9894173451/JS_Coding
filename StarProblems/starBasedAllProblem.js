// 1. Left Triangle
// *
// * *
// * * *
// * * * *
// Logic :
//1. no of outer loop  = no of lines(rows) in result
//2. no of inner loop = columns to identify
//3. What to print
function leftTriangle(){
var n = 4;
for(let row =1; row <= n; row++){
    let print = ""
    for(let col=1; col <= row; col++){
        print += " * "
    }
    console.log(print)
}
}
// leftTriangle()

// 2. Square
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// Logic : 
// 1.no of rows = n
// 2.no of col = n 
function squareStar(){
    var n = 5;
    for(let row=1; row <= n; row++){
        let print = ""
        for(let col=1; col <= n; col++){
            print += " * "
        }
        console.log(print)
    }
}
// squareStar()

// 3.LeftCorner Triangle
// * * * * *
// * * * * 
// * * * 
// * * 
// *
// Logic:
// 1. 1st row printing n and decreasing the star
// 2. Each and every outer loop row is decreasing and assigning as n and print
// 3. Inner loop executes upto row
// Another formula If i = 1 => n - i + 1 = 5 - 1 + 1
// If i = 2 => n - i + 1 = 5 - 2 + 1
function leftCornerTriangle(){
    var n=5;
    for(let row = n; row >= 1; row--){
        let print = ""
        for(let col=1; col <= row; col++){
            print += " * "
        }
        console.log(print)
    }
}
// leftCornerTriangle()

// 4.Left Triangle with number
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// Logic:
// 1. Same as 1st problem but printing the column number
function leftTriangleNumber(){
    var n=5;
    for(let row=1; row <= n; row++){
        let print = ""
        for(let col=1; col <= row; col++){
            print += " " +col+ " "
        }
        console.log(print)
    }
}
// leftTriangleNumber()

// 5. Pyramid

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * * 
// * * 
// * 

// Logic:
// 1. upto row 5 formula is n - i if row starts as 0
// 2. Again its reducing so outer for loop formula is 2 * n - 1 because n = 5 , so we have 9 rows.
// 3. 2 * n - row is the formula to find columns
function pyramidStars(){
    var n = 5;
    for(let row=1; row <= 2 * n - 1; row++){
        var print = ""
        let totalCount = row > n ? 2 * n - row : row;
            for(let col=1; col <= totalCount; col++){
                print += "* "
            }  
            console.log(print)        
        }
       
    }
// pyramidStars()

// 6. Diamond Star
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * * 
//     *

// Logic: Same as previous but Leading spaces we have to find



