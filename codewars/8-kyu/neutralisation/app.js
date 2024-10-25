console.log('Neutralisation');

// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.
// Worked Example
// ("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.
// Examples
// ("--++--", "++--++") ➞ "000000"

// ("-+-+-+", "-+-+-+") ➞ "-+-+-+"

// ("-++-", "-+-+") ➞ "-+00"
// Notes
// The two strings will be the same length.

function neutralise(s1, s2) {
    // grab the first charactoer of the first string
    // grab the first charactor of the second string
    // compare the two strings and return a result based on the combination
    // if + and + return +
    // if - and - return - 
    // if different return zero 
    let newString = '';
    let s1Array = s1.split('');
    let s2Array = s2.split('');
    s1Array.forEach((char, index) => {
      if (s1Array[index] === '+' && s1Array[index] === s2Array[index]) {
        return newString += '+';
      } else if (s1Array[index] === '-' && s1Array[index] === s2Array[index]) {
        return newString += '-';
      } else {
        return newString += '0';
      }
    })
    
    return newString;
  }