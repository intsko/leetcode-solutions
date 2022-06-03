/*
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/

var reverseWords = function (string) {
  const arr = string.split(" ").filter((word) => word);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("").reverse().join("");
  }

  return arr.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
