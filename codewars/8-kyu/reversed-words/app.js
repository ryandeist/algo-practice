console.log('Reversed Words Practice');

// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

let exampleString = "Lisa apart me tearing you're";

function reverseWords(str){
    let stringArr = [];
    let splitStr = str.split(' ');
    for (let i = splitStr.length - 1; i > -1; i--) {
        stringArr.push(splitStr[i]);
    };
    return stringArr.join(' '); // reverse those words
  }

reverseWords(exampleString);

// OR

function reversedWords(str){
    return str.split(' ').reverse().join(' ');
};