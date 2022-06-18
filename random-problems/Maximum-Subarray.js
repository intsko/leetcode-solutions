/*
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

var maxSubArray = function(nums) {
    let sum = 0
    let max = nums[0]

    for (let i = 0; i < nums.length; i++) {
        
        sum < 0 ? sum = nums[i] : sum += nums[i]
        if (sum > max) max = sum

    }

    return max
};

console.log(
    maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
);