/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/
var twoSum = function(nums, target) {
 for(let i = 0; i < nums.length; i++){
    for(let j = 1; j < nums.length; j++){
        if(j === i){
            continue;
        }   
        if(nums[i] + nums[j] === target)
        {
            let answer = [i,j];
            return answer;
        }
     
    }
 }
    
};

var twoSum = function(nums, target, map = new Map()) {
 for(let i = 0; i < nums.length; i++){  
    if(map.has(target - nums[i])){
        return [i,map.get(target - nums[i])];
    }
    map.set(nums[i],i);
 }   
};