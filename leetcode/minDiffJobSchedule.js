//https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/

const solve = (days, complexities) => {
    
    if(days > complexities.length)
        return -1

    days = days - 1;
    let output = 0;
    //do the first days in order
    let left = complexities.slice(0, days);

    //on the last day find the highest difficulty
    let right = complexities.slice(days, complexities.length)

    //difficulty on the last day
    let max = right[0];

    let i = 1;
    let subSlice = right.slice(i, right.length);
    //find if there is anything with higher difficulty to do
    let subMax = Math.max(...subSlice)
    let subMin = Math.min(...subSlice)
    
    //if more difficult then do that task, else do the minimum
    if(subMax >= max)
        output += subMax
    else
        output += subMin
    
    return output + left.reduce((a, b) => a + b, 0);
}
//let d = 2, comps = [6,5,4,3,2,1]
//let d = 4, comps = [9, 9, 9]
//let d = 3, comps = [7,1,7,1,7,1]
let d = 6, comps = [11,111,22,222,33,333,44,444]
console.log(solve(d, comps))
//843