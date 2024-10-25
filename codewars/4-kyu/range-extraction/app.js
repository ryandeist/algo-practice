// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
// Courtesy of rosettacode.org

let list = [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]

function solution(list){
    // iterarte through array
    // if the numbers are sequential, check to see if the third number is sequential 
    // if third number is sequential, check to see if next numbers are sequential
    // when the next number is no longer sequential access the value at the first sequentail index and the value at the last seqential index and send them to the result. 
    // if the numbers are no sequential, push to res 
    // return res.
    let res = [];

    for (i = 0; i < list.length; i++) {
        let range = []
        if (list[i + 2] - list[i] === 2) {

        } 
        } else {
            res.push(list[i]);
        }
    }
    console.log(res)
}

solution(list);