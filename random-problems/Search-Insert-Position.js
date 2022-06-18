/*
Input: nums = [1,3,5,6], target = 5
Output: 2
*/

/*
Input: nums = [1,3,5,6], target = 2
Output: 1
*/

/*
Input: nums = [1,3,5,6], target = 7
Output: 4
*/

var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === target) {
            return i
        } else {
            nums.push(target)
            nums.sort((a,b) => a - b)
            return nums.indexOf(target)
        }

    }
};

console.log(searchInsert([1, 3, 5, 6], 5));
