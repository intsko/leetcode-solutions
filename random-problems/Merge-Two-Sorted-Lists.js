/*
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
*/

const mergeTwoLists = function(list1, list2) {
    const merged = []

    for (let i = 0; i < list1.length; i++) {
        merged.push(list1[i])
    }

    for (let i = 0; i < list2.length; i++) {
        merged.push(list2[i])        
    }

    return merged.sort((a, b) => a - b)
};

console.log(
    mergeTwoLists([1,2,4], [1,3,4])
);