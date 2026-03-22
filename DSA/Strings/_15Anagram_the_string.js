// 15.Given two strings, how can you check if the strings are anagram for each other?
var string1 = "Army";
var string2 = "Mary";

function compare(string1,string2)
{
    var a = string1.toLowerCase();
    var b = string2.toLowerCase();

 a = a.split("").sort().join("");
 b = b.split("").sort().join("");
return a===b;
}
console.log(compare(string1,string2))
