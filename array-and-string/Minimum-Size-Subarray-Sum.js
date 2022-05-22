/*
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
*/

var minSubArrayLen = function (target, nums) {
  let sum = 0;
  let start = 0;
  let length = Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum >= target) {
      length = Math.min(length, i - start + 1);
      sum -= nums[start];
      start++;
    }
  }

  if (length === Infinity) {
    return 0;
  }

  return length;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
