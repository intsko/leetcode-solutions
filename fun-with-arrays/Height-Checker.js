/*
Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation: 
heights:  [1,1,4,2,1,3]
expected: [1,1,1,2,3,4]
Indices 2, 4, and 5 do not match.
*/

var heightChecker = function (heights) {
  let sum = 0;
  const hgts = [...heights];
  const expected = heights.sort((a, b) => a - b);

  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== hgts[i]) sum += 1;
  }

  return sum;
};

const result = heightChecker([1, 1, 4, 2, 1, 3]);
console.log(result);
