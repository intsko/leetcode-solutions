/*
Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.
*/

var thirdMax = function (nums) {
  const sorted = [...new Set(nums.sort((a, b) => b - a))];
  return sorted.length < 3 ? sorted[0] : sorted[2];
};

const result = thirdMax([1, 2, 2, 3]); // 1
console.log(result);
