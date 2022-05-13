/*
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
*/

var plusOne = function (digits) {
  return (Number(digits.join("")) + 1)
    .toString()
    .split("")
    .map((str) => Number(str));
};

const result = plusOne([1, 2, 3]);
console.log(result);
