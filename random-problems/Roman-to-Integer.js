/*
Input: s = "III"
Output: 3
Explanation: III = 3.
*/

function romanToInt(s) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (romans[s[i + 1]] > romans[s[i]]) {
      sum += romans[s[i + 1]] - romans[s[i]];
      i++;
    } else {
      sum += romans[s[i]];
    }
  }

  return sum;
}

console.log(romanToInt("III"));
