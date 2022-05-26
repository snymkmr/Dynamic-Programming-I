/*
The Fibonacci sequence, in which each number is the sum of the two preceding ones. 
The sequence commonly starts from 0 and 1, the next few values in the sequence are:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
*/

const fibonacci = (n) => {
    let res = [];
    res[0] = 0;
    res[1] = 1;

    for (var i = 2; i < n; i++) {
        res[i] = res[i - 1] + res[i - 2];
    }
    return res;
};


console.log(fibonacci(5));
