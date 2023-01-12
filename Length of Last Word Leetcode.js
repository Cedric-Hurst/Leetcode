/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
*/

var lengthOfLastWord = function(s) { //second attempt using substring
    return s.trim().substring(s.trim().lastIndexOf(' ')+1).length
};

//first attempt with arrays
var lengthOfLastWord = function(s) {
    const strArr = s.trim().split(' ');
    return strArr[strArr.length - 1].toString().length;
};