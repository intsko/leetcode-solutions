/*
Input: nums = [2,2,1]
Output: 1
*/

var singleNumber = function(nums) {
    
    nums = nums.sort()

    for (let i = 0; i < nums.length; i+=2) {

        if (nums[i] !== nums[i + 1]) return nums[i]

    }

};

console.log(
    singleNumber([2, 2, 1])
);