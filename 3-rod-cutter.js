/* 
Problem Statement:
You are given a rod of length 'n' inches and an array of prices. This array 
contains prices of smaller pieces of that rod when sold. Find the maximum 
value that could be earned by cutting up the rod and selling the pieces.

length   | 0    1   2   3   4   5   6   7  
------------------------------------------
Price    | 0    2   4   5   7  11  13  17

*/

let cost = [0, 2, 4, 5, 7, 11, 13, 17];

function rodCutter(cost, n){

    // Initializing rod array
    let rod = [n+1];
    rod[0] = 0;

    // Loop for each rod length 'i'
    for (let i = 1; i <= n; i++) {
        let maxValue = Number.MIN_VALUE;
        // Loop for smaller cut lengths 'j'
        for (let j = 1; j <= i; j++) {
            // Updating maxValue
            maxValue = Math.max(maxValue, cost[j] + rod[i - j]);
        }
        rod[i] = maxValue;
    }
    return rod[n];
}

console.log(rodCutter(cost, 4));
