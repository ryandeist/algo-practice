// The aim of this Kata is to write a function which will reverse the case of all consecutive duplicate letters in a string. That is, any letters that occur one after the other and are identical.

// If the duplicate letters are lowercase then they must be set to uppercase, and if they are uppercase then they need to be changed to lowercase.

const reverseCase = (string) => {
    let stringArr = string.split("")

    newString = ""

    for (i = 0; i <= stringArr.length; i++)
            console.log(stringArr[i])
            // newString += (stringArr[i]).toUpperCase() + (stringArr[i+1]).toUpperCase()
            // i++

    // stringArr.forEach((char, index) => {
    //     if (stringArr[index] === stringArr[index+1]) {
    //         newString += char.toUpperCase() 
    //     } else {
    //         newString += char
    //     }
    // iterate over the string - 
}

reverseCase('puzzles')