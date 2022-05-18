/*
Input: nums = [1,4,3,2]
Output: 4
Explanation: All possible pairings (ignoring the ordering of elements) are:
1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4.
*/

var arrayPairSum = function (nums) {
  let sum = 0;
  const sorted = nums.sort((a, b) => a - b);

  sorted.forEach((_, i) => {
    i % 2 === 0 ? (sum += sorted[i]) : "";
  });

  return sum;
};

const result = arrayPairSum([1, 4, 3, 2]);
console.log(result);
