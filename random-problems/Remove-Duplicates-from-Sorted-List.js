/*
Input: head = [1,1,2,3,3]
Output: [1,2,3]
*/

var deleteDuplicates = function(head) {
    const unique = []

    for (let i = 0; i < head.length; i++) {

        if (unique.indexOf(head[i]) === -1) unique.push(head[i])

    }

    return unique
};

console.log(deleteDuplicates([1,1,2,3,3]));