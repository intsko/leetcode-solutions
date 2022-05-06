/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
*/

var findDisappearedNumbers = function (nums) {
  const missed = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) missed.push(i);
  }
  return missed;
};

const result = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]); // [5, 6]
console.log(result);
