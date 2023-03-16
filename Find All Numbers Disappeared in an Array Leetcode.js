/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the 
integers in the range [1, n] that do not appear in nums.
*/
var findDisappearedNumbers = function(nums) { // first try. good memory, really bad runtime
    let ans = [];
    for(let i = 1; i <= nums.length; i++){
        if(nums.find(num => num === i) === undefined){
            ans.push(i);
        }
    }
    return ans
};

var findDisappearedNumbers = function(nums) { //  second try. best runtime. not the best memory but not too bad
    const numSet = new Set(nums);
    const ans = [];
    for(let i = 1; i <= nums.length; i++){
        if(!numSet.has(i)){
            ans.push(i);
        }
    }
    return ans
};