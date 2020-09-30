/**
 * Solving amazon online assesment problem: https://leetcode.com/discuss/interview-question/868302/
 */
let suppliers = 2;
let inventory = [3, 5]
let order = 6;

inventory = inventory.sort((a, b) => b-a)

let currIndx = 0;
let totalProfit = 0;

//a linear method to calculate the total profit
while(order > -1){
    let inBounds = currIndx < inventory.length;
    //to maximize profit, start by ordering from the suppliers that have the most supply
    if(inBounds && inventory[currIndx] > inventory[currIndx + 1] && inventory[currIndx] > 0){
        totalProfit += inventory[currIndx]
        inventory[currIndx] = inventory[currIndx] - 1
        currIndx = 0
    } else if (inBounds && inventory[currIndx] == inventory[currIndx + 1] && inventory[currIndx] > 0){
        totalProfit += inventory[currIndx]
        inventory[currIndx] = inventory[currIndx] - 1
        currIndx += 1
    } else if (inBounds && inventory[currIndx - 1] < inventory[currIndx] && inventory[currIndx] > 0){
        totalProfit += inventory[currIndx]
        inventory[currIndx] = inventory[currIndx] - 1
        currIndx += 1
    } else {
        currIndx = 0
    }
    order -= 1;
}


console.log(totalProfit)
//19