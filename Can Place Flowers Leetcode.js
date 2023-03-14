/*
You have a long flowerbed in which some of the plots are planted, and some are not. 
However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, 
and an integer n, return if n new flowers can be planted in the flowerbed without violating the 
no-adjacent-flowers rule.
*/
var canPlaceFlowers = function (flowerbed, n) {
    let numOfSpots = 0;
    flowerbed.push(0);
    flowerbed.unshift(0);
    for (let i = 1; i < flowerbed.length - 1; i++) {
        if (flowerbed[i] === 1) {
            i++;
        }
        if (flowerbed[i] === 0 && flowerbed[i + 1] === 0 && flowerbed[i - 1] === 0) {
            i++;
            numOfSpots++;
        }
    }
    return n <= numOfSpots ? true : false;
};