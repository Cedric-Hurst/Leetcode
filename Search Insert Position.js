/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

var searchInsert = function(nums, target) {
    if(nums.indexOf(target) >= 0){
        return nums.indexOf(target);
    }else{
        for(let num of nums){
            if(target < num){
                return (nums.indexOf(num));
            }
        }
        return nums.length
    }
    
};