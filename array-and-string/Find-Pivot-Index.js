/*
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
*/

var pivotIndex = function (nums) {
  const total = nums.reduce((acc, curr) => acc + curr);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const rightSum = total - leftSum;
    leftSum += nums[i];

    if (leftSum === rightSum) return i;
  }

  return -1;
};

const result = pivotIndex([1, 7, 3, 6, 5, 6]);
console.log(result);
