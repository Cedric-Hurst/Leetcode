/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it array.
*/
var generate = function (numRows) {
    const res = [[1]];

    for (let i = 0; i < numRows - 1; i++) {
        const temp = [0, ...res[i], 0];
        const row = []
        for (let j = 0; j < res[i].length + 1; j++) {
            row.push(temp[j] + temp[j + 1]);
        }
        res.push(row);
    }
    return res;
};