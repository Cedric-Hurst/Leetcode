/*

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

*/

let longestConsecutive = function (nums) {
    const numSet = new Set(nums);
    let longest = 0;
    for (let num of nums) {
        if (numSet.has(num - 1)) continue;
        let length = 0;
        while (numSet.has(num + length + 1)) {
            length += 1;
        }
        length += 1;
        if (length > longest) longest = length;
    }
    return longest;
};