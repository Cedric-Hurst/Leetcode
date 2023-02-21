/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

*/

var threeSum = function(nums) {
    let res = [];
    nums.sort((a,b) => a-b);
    for(let i = 0; i < nums.length-1; i++){
        if(nums[i] === nums[i-1]){
            continue;
        }
        let a = nums[i]
        let x = i+1;
        let y = nums.length -1

        while(x<y){
            if(a + nums[x] + nums[y] > 0){
                y--;
            } 
            else if(a + nums[x] + nums[y] < 0){
                x++;
            }
            else{
                res.push([a,nums[x],nums[y]]);
                x++;
                y--;
                while(nums[x] === nums[x-1] && x < y){
                    x++
                }
            }
        }
    }
    return res;
};