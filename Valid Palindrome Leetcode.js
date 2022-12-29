/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.*/
var isPalindrome = function (s) {
    let newS = s.replace(/[^0-9a-zA-Z]+/gmi, "");
    newS = newS.toLowerCase();
    var p2 = newS.length - 1;
    var p1 = 0;
    while (p1 < p2) {
        if (newS.charAt(p1) != newS.charAt(p2)) {
            return false;
        }
        p1++;
        p2--;
    }
    return true;
};