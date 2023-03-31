/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects 
of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.
*/
var sortColors = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    let i = 0;

    while (i <= r) {
        if (nums[i] === 0) {
            let temp = nums[l];
            nums[l] = nums[i];
            nums[i] = temp;
            l++;
        }
        else if (nums[i] === 2) {
            let temp = nums[r];
            nums[r] = nums[i];
            nums[i] = temp;
            r--;
            i--;
        }
        i++;
    }
};