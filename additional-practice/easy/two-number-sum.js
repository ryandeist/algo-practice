// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find two numbers in the array that sum up to the target sum and return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

// The target sum has to be the sum of two distinct integers in the array. You cant use the same integer twice.

// You can assume that there will be at most one pair of numbers summing up to the target sum.

// Sample Input
// array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10

// Sample Output
// [11, -1]

function twoNumberSum(array, targetSum) {
    let twoNumArr = []
    
    if (array.length < 2) {
        return twoNumArr
    }

    for (let i = 0; i < array.length; i++) {
        let newArr = array.filter(num => num !== array[i])
        for (let j = 0; j < newArr.length; j++) {
            if (array[i] + newArr[j] === targetSum) {
                twoNumArr.push(array[i], newArr[j])
                return twoNumArr
            }
        }
    }
    return twoNumArr
}
