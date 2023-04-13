/*
There is a rectangular brick wall in front of you with n rows of bricks. 
The ith row has some number of bricks each of the same height (i.e., one unit) 
but they can be of different widths. The total width of each row is the same.

Draw a vertical line from the top to the bottom and cross the least bricks. 
If your line goes through the edge of a brick, then the brick is not considered 
as crossed. You cannot draw a line just along one of the two vertical edges of 
the wall, in which case the line will obviously cross no bricks.

Given the 2D array wall that contains the information about the wall, 
return the minimum number of crossed bricks after drawing such a vertical line.
*/
var leastBricks = function(wall) {
    const gapCounter = new Map([
        [0,0]
        ]);
    
    for(let row of wall){
        let position = 0
        for(let b = 0;  b < row.length-1; b++){
            position += row[b];
            if(gapCounter.has(position)){
                gapCounter.set(position, 1 + gapCounter.get(position))
            } else {
                gapCounter.set(position, 1)
            }
        }
    }
    let maxGap = 0;
    const iterate = gapCounter.values();
    for(let i = 0; i <= gapCounter.size; i++){
        let gap = iterate.next().value;
        if(gap >= maxGap){
            maxGap = gap;
        }
    }
    return(wall.length - maxGap);
};