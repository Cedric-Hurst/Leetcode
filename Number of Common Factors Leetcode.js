/*
Given two positive integers a and b, return the number of common factors of a and b.

An integer x is a common factor of a and b if x divides both a and b.
*/
var commonFactors = function(a, b) {
    const lower = a < b ? a : b;
    let common = 0;
    for(let i = 1; i <= lower; i++){

        const aFac = a%i === 0 ? i : 0;
        const bFac = b%i === 0 ? i : -1;
        if(aFac === bFac){
        common++;
        }
    }
    return common;  
};
