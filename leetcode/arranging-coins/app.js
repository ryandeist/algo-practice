// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.
const recursiveFunction = (n, rows) => {
    // check for 0
    if (n < rows) {
        return --rows
    };

    if (n >= rows) {
        n -= rows;
        rows++;
        return recursiveFunction(n, rows);
    };
};


const arrangeCoins = (n) => {
    rows = 1;
    return recursiveFunction(n, rows);
};