/*
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

var rotate = function (nums, k) {
  if (k > nums.length) {
    k = Math.round(
      (k / nums.length - Math.floor(k / nums.length)) * nums.length
    );
  }
  if (nums.length === k) {
    return nums;
  }

  let arr = [];
  if (nums.length > k) {
    arr = nums.splice(nums.length - k, nums.length);
    for (let i = arr.length - 1; i >= 0; i--) {
      nums.unshift(arr[i]);
    }
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
