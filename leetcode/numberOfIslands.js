//https://leetcode.com/problems/number-of-islands/

let grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]

const visitIsland = (grid, i, j) => {
    if(i < 0 || i > grid.length - 1)
        return
    if(j < 0 || j > grid[i].length - 1)
        return
    if(grid[i][j] === '0')
        return
        
    grid[i][j] = '0';
    
    visitIsland(grid, i, j - 1)
    visitIsland(grid, i, j + 1)
    visitIsland(grid, i - 1, j)
    visitIsland(grid, i + 1, j)
}

let numOfIslands = 0;
grid.forEach((values, i) => {
    values.forEach((value, j) => {
        if(value === '1')
            visitIsland(grid, i, j), numOfIslands++
    })
})

console.log(numOfIslands)