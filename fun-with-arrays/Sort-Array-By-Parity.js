/*
Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
*/

var sortArrayByParity = function (nums) {
  const evens = nums.filter((num) => num % 2 === 0);
  const odds = nums.filter((num) => num % 2 !== 0);

  return evens.concat(odds);
};

const result = sortArrayByParity([3, 1, 2, 4]);
console.log(result);
