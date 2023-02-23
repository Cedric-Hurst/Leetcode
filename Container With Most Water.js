/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

*/

var maxArea = function (height) {
    let l = 0;
    let r = height.length - 1;
    let res = height[l] > height[r] ? (height[r] * (r - l)) : (height[l] * (r - l));
    while (l < r) {
        if (height[l] > height[r]) {
            if (res < (height[r] * (r - l))) res = (height[r] * (r - l));
            r--;
        }
        else if (height[l] <= height[r]) {
            if (res < (height[l] * (r - l))) res = (height[l] * (r - l));
            l++;
        }
        else {
            l++;
        }
    }
    return res;
};