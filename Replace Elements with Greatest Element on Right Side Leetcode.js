/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

*/
var replaceElements = function(arr) {
    let max = -1;

    for(let i = arr.length-1; i >= 0; i--){
        let newMax = Math.max(arr[i], max);
        arr[i]=max;
        max = newMax;
    }
    return arr
};