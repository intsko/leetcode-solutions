/*
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/

var merge = function (nums1, m, nums2, n) {
  nums11 = nums1.filter((num) => num !== 0);

  nums11 = [...nums11, ...nums2];

  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = nums11[i];

    if (nums1[i] == undefined) nums1[i] = 0;
  }
  nums1.sort((a, b) => a - b);
};

const result = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
console.log(result);
