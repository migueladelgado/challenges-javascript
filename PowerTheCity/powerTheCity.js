

let grid = [
    [1,0,0,0,0,0],
    [0,0,0,0,0,1],
    [0,0,1,0,0,0],
    [0,0,0,0,1,0]
];
let rows = grid.length;
let cols = grid[0].length;
let target = rows * cols;

let totalDays = daysToFullPower(grid, rows, cols)
console.log(totalDays);



function daysToFullPower(grid, rows, cols, target, days = 1){
    const reducer = (acc, curr) => acc + curr;
    let rowsCompleted = 0;
    grid.forEach( (v, ii, a) => {
        for(let i = 0; i <= v.length - 1; i++){
            if( i === 0 && v[i] === 1 && v[i + 1] === 0){
                grid[ii][i + 1] = 1;
                break;
            }
            else if (i === v.length - 1 && v[i - 1] === 0 && v[i] === 1){
                grid[ii][i - 1] = 1;
                break;
            }
            else if (v[i] === 1 && v[i + 1] === 0){
                grid[ii][i + 1] = 1;;
                break;
            } 
            else if (v[i] === 1 && v[i - 1] === 0){
                grid[ii][i - 1] = 1;;
                break;

                
            } else if (
                v.reduce(reducer) === 5
            ){
                rowsCompleted++;
            }
        }
    });

    console.log(JSON.stringify(grid))
    if(rowsCompleted < cols)
        return daysToFullPower(grid, rows, cols, target, days += 1);
    console.log(JSON.stringify(grid), days)
    return days;
}

// function checkIfAllHavePower(grid, target){
//     let flatArray = [].concat(...grid);
//     return (
//         flatArray.reduce((a, b) => a + b, 0) === target
//     );
// }