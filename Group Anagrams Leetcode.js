/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/
var groupAnagrams = function(strs) {
    if(strs.length === 1) return [strs];

    let sortMap = new Map();
    for(let str of strs){
        const sortedStr = str.split("").sort().join("");//sort words
        if(!sortMap.has(sortedStr)){ //check if sorted word is in map
            sortMap.set(sortedStr, [str]); //add sorted word as key with original word as value
        }else{
            sortMap.get(sortedStr).push(str); // if the sorted word is already in the map then add the anagramed word in at sorted key
        }
    }
    return [...sortMap.values()];//return values of map
};