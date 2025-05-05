// Given an array of positive integers representing coin denominations, write a function that returns the minimum amount of change (the minimum sum of money) that cannot be created with the given coins. The given coins can have any positive integer value and are not necessarily unique (i.e. you can have multiple coins of the same denomination). 

// for example, if the coins are [1, 2, 5], the minimum amount of change that cannot be created is 4. If you're given no coins, the minimum amount of change that cannot be created is 1. 

// Sample Input
// coins = [5, 7, 1, 1, 2, 3, 22]

// Sample Output
// 20

function nonConstructibleChange(coins) {
    if (coins.length === 0) {
        return 1
    }

    let mostChange = 0
    let sortedCoins = coins.sort((a, b) => a - b)

    for (let i = 0; i < sortedCoins.length; i++) {
        if (sortedCoins[i] > (mostChange + 1)) {
            return mostChange + 1
        } else {
            mostChange += sortedCoins[i]
        }
    }
    return mostChange + 1;
}