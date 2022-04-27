/*
Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
*/

var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] * 2 === arr[j] && i !== j) return true;
    }
  }
  return false;
};

const result = checkIfExist([3, 1, 7, 11]); // false
const result1 = checkIfExist([10, 2, 5, 3]); // true
console.log(result);
