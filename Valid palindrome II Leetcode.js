/*
Given a string s, return true if the s can be 
palindrome after deleting at most one character from it.
*/
var validPalindrome = function(s) {
    let l = 0;
    let r = s.length -1;
    if(s.split('').reverse().join('') === s) return true;
    while(l < r){
        if(s[l] !== s[r]){
            let subL = s.substring(l,r);
            let subR = s.substring(l+1, r+1);
            if(subL === subL.split('').reverse().join('')) return true;
            else if(subR === subR.split('').reverse().join('')) return true;
            else return false;
        }
        l++;
        r--;
    }  
    return false;
};