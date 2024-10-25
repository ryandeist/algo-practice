console.log('Counting Sheep');

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

let sheepsArray = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(sheep) {
    let sheepsCounted = 0;
    sheep.forEach((oneSheep) => {
        if (oneSheep) {
            Number(sheepsCounted += 1)
        }; 
    });
    console.log(sheepsCounted);
    return sheepsCounted;
  };

  countSheeps(sheepsArray);

  // OR

  function countTheSheeps(sheep) {
    // console.log(sheep.filter(Boolean))
    return sheep.filter(Boolean).length // returns the length an array of only truthy values
  };

  countTheSheeps(sheepsArray);
