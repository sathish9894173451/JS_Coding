// slice
const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits1.slice(1, 3); //start from 1st index and end with 2nd index because 3 is last. should not consider 3rd index 
console.log(citrus) // "Orange", "Lemon"

const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fruits2.slice(-3, -1); // minus starting from last index as -1
console.log(myBest) // "Lemon", "Apple"
//splice
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits3) // "Banana", "Orange", "Lemon", "Kiwi","Apple", "Mango"

const fruits4 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits4.splice(2, 2);
console.log(fruits4) // "Banana", "Orange", "Kiwi"

const myFish = ["angel", "clown", "drum", "sturgeon"];
myFish.splice(2, 1, "trumpet"); //2nd index should remove and add the string
console.log(myFish) // "angel", "clown", "trumpet", "sturgeon"



