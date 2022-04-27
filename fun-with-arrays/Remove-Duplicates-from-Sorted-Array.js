/*
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return nums.length;
};

const result = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

console.log(result); // Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
