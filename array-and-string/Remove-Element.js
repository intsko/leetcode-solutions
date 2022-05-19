/*
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
*/

var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return nums.length;
};

const result = removeElement([3, 2, 2, 3]);
console.log(result);
