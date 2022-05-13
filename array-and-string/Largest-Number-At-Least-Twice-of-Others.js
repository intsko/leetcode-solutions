/*
Input: nums = [3,6,1,0]
Output: 1
Explanation: 6 is the largest integer.
For every other number in the array x, 6 is at least twice as big as x.
The index of value 6 is 1, so we return 1.
*/

var dominantIndex = function (nums) {
  const max = Math.max(...nums);
  const maxIndex = nums.indexOf(max);
  nums.splice(maxIndex, 1);
  const secondLargest = Math.max(...nums);

  return secondLargest * 2 <= max ? maxIndex : -1;
};

const result = dominantIndex([3, 6, 1, 0]);
console.log(result);
