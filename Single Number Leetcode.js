/*

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

*/

var singleNumber = function(nums) { // bit manipulation 
    let answer = 0;

    for( let num of nums){
        answer ^= num;
    }
    return answer;
};

var singleNumber = function(nums) { // first attempt very bad runtime
    for(let num of nums){
        if(nums.indexOf(num) === nums.lastIndexOf(num)){
            return num;
        }
    }
};