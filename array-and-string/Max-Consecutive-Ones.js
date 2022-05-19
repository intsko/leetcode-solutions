/*
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
*/

var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let curr = 0;

  for (let i = 0; i < nums.length + 1; i++) {
    if (nums[i] === 1) {
      curr++;
    } else {
      max = max < curr ? curr : max;
      curr = 0;
    }
  }

  return max;
};

const result = findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
console.log(result);
