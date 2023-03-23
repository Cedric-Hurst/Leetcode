/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
*/
var reverseString = function(s) { // first attempt 
    const reverse = [];

    for(let i = s.length-1; i >= 0; i--){
        reverse.push(s[i]);
    }
    for(let i = 0; i < s.length; i++){
        s[i] = reverse[i];
    }
};

var reverseString = function(s) { // two pointer attempt
    let i = 0;
    let j = s.length-1;

    while (i<=j){
        let leftVal = s[i];
        let rightVal = s[j];

        s[i] = rightVal;
        s[j] = leftVal;

        i++;
        j--;
    }
};