/* 
Problem Statement:
You are located at the top-left corner of a m x n grid.
You can only move either right or down at any point in time. Your home is
located at the bottom right corner of this grid.
In how many unique ways can you reach your home? 
*/

// Assuming the dimensions m and n are non-negative integers
function numWays(m, n) {

	// Creating 2D Arrays using new()constructor
	let ways = new Array(m * n);
	for (var i = 0; i < ways.length; i++) {
		ways[i] = new Array(m * n);
	};

	// Number of ways to reach bottom right corner from last column of grid is 1
	for (var i = 0; i <= m - 1; i++) {
		ways[i][n - 1] = 1;
	}

	// Number of ways to reach bottom right from corner last row of grid is 1 too
	for (var j = 0; j <= n - 1; j++) {
		ways[m - 1][j] = 1;
	}

	for (var i = m - 2; i >= 0; i--) {
		for (var j = n - 2; j >= 0; j--) {
			ways[i][j] = ways[i][j + 1] + ways[i + 1][j];
		}
	}

	return ways[0][0];
}

console.log(numWays(2, 3))