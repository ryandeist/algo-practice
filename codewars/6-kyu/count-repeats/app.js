// Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

// Note: This includes any characters

const checkMatch = (str, count) => {
    if (!str.length) return count;
    if (str[0] === str[1]) {
        count++;
    };
    return checkMatch(str.slice(1), count);
};

function countRepeats(str) {
    return checkMatch(str, 0);
};