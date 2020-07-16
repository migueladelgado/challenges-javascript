/**
 * CHALLENGE NAME: POWER THE CITY
 * DESCRIPTION:
 * Given a 2D array, pretend each inner array is a street in a neighborhood.
 * The houses (items in the inner arrays) will have power if the value is 1 and will not have power if 0.
 * Write an algorithm to calculate the number of days it would take to power up all of the houses in the neighborhood.
 * RULES:
 * -all streets must have same number of houses (inner array lengths must all match)
 * -each street (array) must have at least 1 house (item) with power (value = 1)
 * -you can only power a house that is adjacent to a house that has power
 * -you can only power up one home in your neighborhood once a day
 * 
 * Dev Note: No error handling added now, methods expect data to be passed in correctly. Can add error handling later!
 */

const LIMIT = 100; //avoid infinite loops

//Test grid
let grid = [
    [1,1,0,0,0,0,0],
    [0,1,0,0,0,1,0],
    [0,1,1,0,0,0,0],
    [0,1,1,0,1,0,0]
];

let rows = grid.length;
let cols = grid[0].length;

//shortway is to  use the shape of the data to figure out
let result1 = daysToFullPower1(grid, cols);
print(result1)
// 5

function daysToFullPower1(grid, cols){
    let minTotal = 0;
    grid.forEach( (item, index) => {
        let currTotal = grid[index].reduce((a,b) => a + b);
        if(index === 0 || minTotal > currTotal)
            minTotal = currTotal;
    });
    return cols - minTotal;
}



//Long way is to write a method that performs a nested loop to figure this out. On^2
let result2 = daysToFullPower2(grid, rows, cols)
print(result2);
// 5

/**
 * 
 * @param { [][] } grid data grid that gets passed into method 
 * @param { number } rows number of rows in the grid 
 * @param { number } cols number of columns
 * @param { number } days day count
 * 
 * @returns { number } calculation of days it would take to power up the entire neighborhood 
 */
function daysToFullPower2(grid, rows, cols, days = 0){
    grid.forEach( (v, i) => {
        for(let j = 0; j <= v.length - 1; j++){
            if( j === 0 && v[j] === 1 && v[j + 1] === 0){
                grid[i][j + 1] = 1;
                break;
            }
            else if (j === v.length - 1 && v[j - 1] === 0 && v[j] === 1){
                grid[i][j - 1] = 1;
                break;
            }
            else if (v[j] === 1 && v[j + 1] === 0){
                grid[i][j + 1] = 1;;
                break;
            } 
            else if (v[j] === 1 && v[j - 1] === 0){
                grid[i][j - 1] = 1;;
                break;
            }
        }
    });

    if(!allRowsOn(grid, rows * cols) && days < LIMIT)
        return daysToFullPower2(grid, rows, cols, days += 1);
    return days + 1;
}

function allRowsOn(grid, target){
    let flat = [].concat(...grid);
    let val = flat.reduce((a,b) => a + b);
    return val === target ? true : false;
}

function print(data){
    console.log(data)
}
