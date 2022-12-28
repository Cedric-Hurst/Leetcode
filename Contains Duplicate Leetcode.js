/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.*/
var containsDuplicate = function(nums) {
   const numsSet = new Set(nums);
    const isEqual = numsSet.size === nums.length;

    return !isEqual;
};