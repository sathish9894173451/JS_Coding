var prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

let buy1 = prices[1];
let sell1 = prices[2];
let buy2 = prices[3];
let sell2 = prices[4]

let firstProfit = sell1 - buy1;
let secondProfit = sell2 - buy2;

let op = secondProfit + firstProfit;
console.log("op", op)