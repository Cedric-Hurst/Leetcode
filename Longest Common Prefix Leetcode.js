/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

*/

var longestCommonPrefix = function(strs) {
    let shortWord = strs[0];
    let count = 0;
    if(strs.length === 1) return strs[0];
    for(let str of strs){
        if(str.length < shortWord.length){
            shortWord = str
        }
    }
    for(let i = 0; i < strs.length; i++){ 
        if(strs[i].startsWith(shortWord) || strs[i] === shortWord){
            count++;
        }else{
            i--;
            shortWord = shortWord.substring(0, shortWord.length - 1);  
        }
        if(count === strs.length){
            return shortWord;
        }
        if(shortWord.length === 1 && !strs[0].startsWith(shortWord)){
            return "";
        }   
    }
};