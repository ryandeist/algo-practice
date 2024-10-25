// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

function singleNumber(nums) {
    numsObj = {};
    nums.forEach((num) => {
        numsObj[num] = numsObj[num] + 1 || 1;
    });
    console.log(numsObj);

    for(const obj in numsObj) {
        if (numsObj[obj] === 1) {
            return obj;
        };
    };
  };
  
console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1