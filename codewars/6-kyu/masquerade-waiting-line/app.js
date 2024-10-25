// Your friend has invited you to a party, and tells you to meet them in the line to get in. The one problem is it's a masked party. Everyone in line is wearing a colored mask, including your friend. Find which people in line could be your friend.

// Your friend has told you that they will be wearing a RED mask, and has TWO other friends with them, both wearing BLUE masks. Your friend and their friends will be adjacent to one another, and you don't know which order they will be standing in.

// Input to the function will be an array of strings, each representing a colored mask. For example:

// var line = ['blue','blue','red','red','blue','green'];
// The output of the function should be the number of people who could possibly be your friend.

// friendFind(['blue','blue','red','red','blue','green','chipmunk'])  // return 1

function friendFind(line) {
    let i = 0;
    let friendCounter = 0;

    if (line.length < 3) {
        return friendCounter;
    };

    while (i < line.length) {
        if ((line[i] === 'red') &&
            ((line[i - 2] === 'blue' && line[i - 1] === 'blue') ||
                (line[i + 2] === 'blue' && line[i + 1] === 'blue') ||
                (line[i - 1] === 'blue' && line[i + 1] === 'blue'))) {
            friendCounter++;
        };
        i++;
    };
    return friendCounter;
};
