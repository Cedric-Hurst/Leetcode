/*
Given an integer array nums, move all 0's to the end of it while maintaining the 
relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/
var moveZeroes = function (nums) {
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] !== 0) {
            let temp = nums[l]
            nums[l] = nums[r];
            nums[r] = temp;
            l++;
        }
    }
};