/*
Input: haystack = "hello", needle = "ll"
Output: 2
*/

var strStr = function (haystack, needle) {
  if (!needle.length) return 0;
  if (haystack.length < needle.length) return -1;

  loop: for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        continue loop;
      }
    }

    return i;
  }

  return -1;
};

const result = strStr("hello", "ll");
console.log(result);
