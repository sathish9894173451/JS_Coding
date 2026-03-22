let num = [1, 2, 3, null, undefined, "", [4, 5, 6]];

let result = num.flat().filter((item) => item != undefined && item != null && item != "")

console.log("result", result)