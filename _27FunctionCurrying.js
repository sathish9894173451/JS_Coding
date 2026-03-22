// E.g:1 using bind method
// let multiply = function (x,y){
//     console.log(x * y);
// }

// let result = multiply.bind(this, 2);
// result(3);
// E.g:2 using closure
let multiply = function(x){
    return function(y){
        console.log(x * y)
    }
}
let result = multiply(2);
result(5);