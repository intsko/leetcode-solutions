/*
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/

var reverseList = function (head) {
  const reversed = [];

  for (let i = head.length - 1; i >= 0; i--) {
    reversed.push(head[i]);
  }

  return reversed;
};

console.log(reverseList([5, 4, 3, 2, 1]));
