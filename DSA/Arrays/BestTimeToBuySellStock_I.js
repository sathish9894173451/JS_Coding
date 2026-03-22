const prices = [7, 1, 5, 3, 6, 4];
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

function maxProfitFun(prices){

    minProfit = prices[0];
    maxProfit = 0;
    for(let i = 1 ; i <= prices.length-1; i++){

        minProfit = Math.min(minProfit , prices[i]);
        console.log("minProfit", minProfit)

        maxProfit = Math.max(maxProfit , prices[i] - minProfit);
        console.log("maxProfit", maxProfit)
    }
    return maxProfit;

}
console.log("result",maxProfitFun(prices));