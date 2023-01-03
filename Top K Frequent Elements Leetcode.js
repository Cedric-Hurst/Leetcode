/*

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
*/
var topKFrequent = function(nums, k) {
 const map = new Map()
for(let num of nums){ //add num in nums to map and count freq
    map.set(num, map.get(num) + 1 || 1)
}
const ansArr = [];
for(let[key, value] of map){
    ansArr.push([key,value]); //adding key and value to array
    console.log(value);
}
ansArr.sort((a,b) => b[1] - a[1]); // sort by desending order by the freq (biggest to smallest)
return ansArr.slice(0,k).map((x) => x[0]); // slice from begin to k and map the num

};