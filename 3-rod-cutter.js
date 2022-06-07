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

function rodCutter(cost, n) {

    // Initializing rod array
    let rod = [n + 1];
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


/* pseudocode for possible combinations

rodCutterCombinations(cost[],n):
  
    initialize rod[n+1] as a new array
    rod[0] = 0

    // This will save number of combinations for all length of rods
    initialize combinations[n+1] as a new array
    combinations[0] = 1

    for i from 1 to n:
        max_val = -INF

         for j from 1 to i:
            // If we have found the best possibility
            if( max_val < cost[j] + rod[i-j] )
                max_val = cost[j] + rod[i-j]
                 combinations[i] = combinations[i-j]
      
            // If another optimum option is found same as before
            else if( max_val = cost[j] + rod[i-j] )
                combinations[i] = combinations[i] + combinations[i-j]

        rod[i] = max_val

    return combinations[n] */