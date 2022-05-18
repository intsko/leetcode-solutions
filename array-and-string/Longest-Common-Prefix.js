/*
Input: strs = ["flower","flow","flight"]
Output: "fl"
*/

var longestCommonPrefix = function (strs) {
  let result = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let current = strs[i];
    let j = 0;

    while (
      j < current.length &&
      j < result.length &&
      current[j] === result[j]
    ) {
      j++;
    }

    result = current.substring(0, j);
  }

  return result;
};

const result = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(result);
