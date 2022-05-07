/*
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Input: head = [1,2,3,4]
Output: [2,1,4,3]
*/

var swapPairs = function (head) {
  const swap = (node) => {
    if (node && node.next && node.next.next) {
      const first = node.next;
      const second = first.next;

      first.next = second.next;
      second.next = first;
      node.next = second;

      swap(first);
    }
  };

  const start = new ListNode(null);
  start.next = head;
  swap(start);

  return start.next;
};

const result = swapPairs([1, 2, 3, 4]);
console.log(result);
