console.log('Replit Exercise 9-11');

// Directions

// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

// Pseudocode Goes Here
// the function should read through the given array of candies. 
// for each item in the array, we are going to add extra candies, one at a time, and check to see if the result of that operation makes them the kid with the highest candy. 
// if the current item in the array is the greatest number, return true. 
// return the values as an array. 


// TWO ways of doing this, object or array. 

function kidsWithCandies(candies, extraCandies) {
    let booleanArray = [];
    const maxValue = Math.max(...candies);
    for (i = 0; i < candies.length; i++) {
        let kidWithCandies = candies[i] + extraCandies;
        if (kidWithCandies >= maxValue) {
            booleanArray.push(true);
        } else {
            booleanArray.push(false);
        }
    }
    return booleanArray;
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // [true,true,true,false,true]
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // [true,false,false,false,false]
console.log(kidsWithCandies([12, 1, 12], 10)); // [true,false,true]