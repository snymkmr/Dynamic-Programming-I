/* 
Problem Statement: You want to reach heaven that is at the top of this staircase. The staircase 
has n steps. And at each step you can climb either 1 step or 2 steps further. In how many ways 
can you reach heaven? 
*/

function stairwayToHeaven(n) {

    let ways = [];
    ways[0] = 1;
    ways[1] = 1;

    for (var i = 2; i <= n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2];
    }
    return ways[n];
}

console.log(stairwayToHeaven(4));
