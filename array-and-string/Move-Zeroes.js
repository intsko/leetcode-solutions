/*
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

var moveZeroes = function (nums) {
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }

  return nums;
};

const result = moveZeroes([0, 1, 0, 3, 12]);
console.log(result);
