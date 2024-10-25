// Direections

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// 1. Creating 

function mergeAlternatively(word1, word2) {
    let word1Array = word1.split('');
    let word2Array = word2.split('');
    let endingArray = [];

    let length = Math.max(word1Array.length, word2Array.length);

    for (let i = 0; i < length; i++) {
        if (word1Array[i]) {
            endingArray.push(word1Array[i])
        };

        if (word2Array[i]) {
            endingArray.push(word2Array[i])
        };
    }
    return endingArray.join('');
};

mergeAlternatively('aceg', 'bdfh');

// console.log(mergeAlternatively('abc', 'pqr')); // apbqcr
// console.log(mergeAlternatively('ab', 'pqrs')); // apbqrs
// console.log(mergeAlternatively('abcd', 'pq')); // apbqcd