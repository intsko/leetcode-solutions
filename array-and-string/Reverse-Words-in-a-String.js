/*
Input: s = "the sky is blue"
Output: "blue is sky the"
*/

var reverseWords = function (s) {
  const arr = s.split(" ").filter((c) => c);
  return arr.reverse().join(" ");
};

console.log(reverseWords("the sky is blue"));
