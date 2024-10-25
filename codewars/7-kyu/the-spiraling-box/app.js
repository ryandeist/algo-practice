console.log("The 'Spiraling' Box");

// Task
// Given two positive integers m (width) and n (height), fill a two-dimensional list (or array) of size m-by-n in the following way:

// (1) All the elements in the first and last row and column are 1.

// (2) All the elements in the second and second-last row and column are 2, excluding the elements from step 1.

// (3) All the elements in the third and third-last row and column are 3, excluding the elements from the previous steps.

// And so on ...

// Examples
// Given m = 5, n = 8, your function should return

// [[1, 1, 1, 1, 1],
//  [1, 2, 2, 2, 1],
//  [1, 2, 3, 2, 1],
//  [1, 2, 3, 2, 1],
//  [1, 2, 3, 2, 1], 
//  [1, 2, 3, 2, 1],
//  [1, 2, 2, 2, 1],
//  [1, 1, 1, 1, 1]]
// Given m = 10, n = 9, your function should return

// [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
//  [1, 2, 3, 3, 3, 3, 3, 3, 2, 1], 
//  [1, 2, 3, 4, 4, 4, 4, 3, 2, 1], 
//  [1, 2, 3, 4, 5, 5, 4, 3, 2, 1], 
//  [1, 2, 3, 4, 4, 4, 4, 3, 2, 1], 
//  [1, 2, 3, 3, 3, 3, 3, 3, 2, 1], 
//  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1], 
//  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]


// ** this is not my solution **
const createBox = (m, n) => {
    const res = Array(n).fill(Array(m).fill(1))
  
    for (let i = 2; i < n; i++) {
      const row = res[i].slice()
  
      for (let j = i - 1; j <= m - i; j++) {
        row[j] = i
      }
  
      for (let k = i - 1; k <= n - i; k++) {
        res[k] = row
      }
    }
  
    return res
  }

createBox(7, 8);