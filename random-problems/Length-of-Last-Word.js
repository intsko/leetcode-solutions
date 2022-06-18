/*
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
*/

var lengthOfLastWord = function(s) {
    const arr = s.trim().split(' ')
    return arr[arr.length - 1].length
};

console.log(
    lengthOfLastWord("   fly me   to   the moon  ")
);