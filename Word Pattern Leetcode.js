/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter 
in pattern and a non-empty word in s.
*/
var wordPattern = function (pattern, s) {
    s = s.split(' ');

    if (s.length !== pattern.length) return false

    const wordToChar = new Map();
    const charToWord = new Map();

    for (let i = 0; i < pattern.length; i++) {
        charToWord.set(pattern[i], s[i]);
        wordToChar.set(s[i], pattern[i]);
    }

    for (let i = 0; i < pattern.length; i++) {
        if (wordToChar.get(s[i]) !== pattern[i] || charToWord.get(pattern[i]) !== s[i]) return false
    }
    return true
};