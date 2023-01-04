/*
Given an integer x, return true if x is a 
palindrome
, and false otherwise.
*/
var isPalindrome = function(x) {
    return (x.toString().split('').reverse().toString() === x.toString().split('').toString());
    
};


//or

var isPalindrome = function(x) { return (makeArray(x).toString() === reverse(makeArray(x))); };
let reverse = (arr) => { return arr.reverse().toString(); };
let makeArray = (num) => { return num.toString().split(''); };