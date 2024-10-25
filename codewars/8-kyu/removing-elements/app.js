// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

let keepDelete = ['keep', 'delete', 'keep', 'delete', 'keep', 'delete', 'keep', 'delete'];

function removeEveryOther(arr) {
    evenArray = [];
    arr.forEach((el, index) => {
        if (index % 2 === 0) {
            evenArray.push(el);
        };
    });
    return evenArray;
};

removeEveryOther(keepDelete);