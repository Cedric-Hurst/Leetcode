/*
Given a string s, find the length of the longest 

substring without repeating characters.

*/

var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let l = 0;
    let longest = 0;

    for(let r = 0; r < s.length; r++){
        while(set.has(s[r])){
            set.delete(s[l]);
            l++;
        }
        set.add(s[r]);
        if(set.size > longest){
            longest = set.size;
        }
    }
    return longest;
};