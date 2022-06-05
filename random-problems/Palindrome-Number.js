/*
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/

function isPalindrome(number) {
  const string = number.toString();
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return string === reversedString ? true : false;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(10)); // false
