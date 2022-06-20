/*
Input: nums = [1,2,3,1]
Output: true
*/

var containsDuplicate = function(nums) {
    
    return nums.length !== new Set(nums).size ? true : false

};

console.log(
    containsDuplicate([1,2,3,1])
);