/*
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
*/

var myPow = function(x, n) { //second attempt with help
function recur(x,n){
    if(n === 0) return 1;
    if(x === 0) return 0;
    const half = recur(x, Math.floor(n/2));
    if(n%2 === 1) return half * half * x;
    return half * half;
}
    let ans = recur(x,Math.abs(n))
    return ans = n >= 0 ? ans : 1/ans;
};

//im pretty sure my first attempt worked but runtime was too long
/* var myPow = function(x, n) {
    let power = x;
    let isNeg = false;
    if(n === 0) return 1;
    if(X === 0) return 0;
    if(n<0){
        n*=-1;
        isNeg = true;
    }
    if(n>0){
        for(let i = 1; i < n; i++){
        power *= x;   
        }
    if(isNeg) return (1/power);
    return power;
    }  
}; */