/* 
Problem Statement:
You are being given an array in which the i'th element is the price of a given stock on day 'i'. 
If you are permitted to complete at most 1 transaction (i.e. buy once and sell once), what is the
maximum profit you can gain? It is to be noted that you cannot sell a stock before you buy one.

Day      | 0    1   2   3   4   5  
---------------------------------
Price    | 8    1   2   4   6   3

Maximum Profit = 5
*/

let price = [8, 1, 2, 4, 6, 3];

function maxProfit(price) {

    let n = price.length;
    // Initializing all the arrays and variables
    let minUptil = [n];
    let profit = [n];
    let maximumProfit = Number.MIN_VALUE;

    // Min price uptil 0th day is Price[0]
    minUptil[0] = price[0];

    // Filling the minUptil array
    for (let i = 1; i <= n - 1; i++) {
        minUptil[i] = Math.min(minUptil[i - 1], price[i]);
    }

    // Filling the profit array
    for (let i = 0; i <= n - 1; i++) {
        profit[i] = price[i] - minUptil[i];
        if (maximumProfit < profit[i])
            maximumProfit = profit[i];
    }
    return maximumProfit;

}

console.log(maxProfit(price));
