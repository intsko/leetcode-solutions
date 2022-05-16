/*
Input: a = "11", b = "1"
Output: "100"
*/

var addBinary = function (str1, str2) {
  let carry = 0;
  const res = [];
  let l1 = str1.length,
    l2 = str2.length;
  for (let i = l1 - 1, j = l2 - 1; 0 <= i || 0 <= j; --i, --j) {
    let a = 0 <= i ? Number(str1[i]) : 0,
      b = 0 <= j ? Number(str2[j]) : 0;
    res.push((a + b + carry) % 2);
    carry = 1 < a + b + carry;
  }
  if (carry) {
    res.push(1);
  }
  return res.reverse().join("");
};

const result = addBinary("11", "1");
console.log(result);
