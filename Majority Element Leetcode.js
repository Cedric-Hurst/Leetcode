/*

Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

*/

var majorityElement = function(nums) {
    let myMap = new Map();
    for(let num of nums){
        if(myMap.has(num)) myMap.set(num, myMap.get(num) + 1)
        else myMap.set(num, 1);
    }
    for(let [key, value] of myMap){
        if(value > (nums.length/2)) return key
    }
};