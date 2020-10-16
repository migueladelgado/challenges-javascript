//https://leetcode.com/problems/rotting-oranges/


const rot = (grid, i, j) => {
    let found = false;
    if(i - 1 >= 0 && grid[i - 1][j] === 1)
        grid[i - 1][j] = 2, found = true;
    
    if(i + 1 < grid.length && grid[i + 1][j] === 1)
        grid[i + 1][j] = 2, found = true;
    
    if(j - 1 >= 0 && grid[i][j - 1] === 1)
        grid[i][j - 1] = 2, found = true
    
    if(j + 1 < grid[i].length && grid[i][j + 1] === 1)
        grid[i][j + 1] = 2, found = true

    return found;
}

const solve = (grid, mins = 1, fresh = 0) => {
    let pass = false;
    let goal = 0;
    let acc = 0;

    grid.forEach((oranges, i) => {
        for(j = 0; j < grid[i].length; j++){
            if(grid[i][j] === 2 && !pass)
                pass = rot(grid, i, j)
            if(grid[i][j] === 2)
                acc += 2, goal += 2
            if(grid[i][j] === 1)
                fresh += 1, goal += 2
        }
    });

    //if no fresh oranges at all
    if(!fresh)
        return 0
    //if impossible to get to
    if(mins > 2 * grid.length * grid[0].length)
        return -1
    //num of minutes taken
    if(acc === goal)
        return mins;
    
    mins++;
    return solve(grid, mins, fresh);
}

let grid =[[0, 2]]
let r = solve(grid);
console.log(r)