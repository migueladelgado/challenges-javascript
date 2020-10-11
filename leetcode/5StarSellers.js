//https://leetcode.com/discuss/interview-question/854110/


const solve = (n, ratings, threshold, accum = 0, prev = null) => {
    
    let x = []
    let room = null;
    let acc = accum;
    //keep track of last product that got a review added
    prev = prev === ratings.length - 1 ? null : prev;

    ratings.forEach((rating, index) => {
        let a = rating[0], b = rating[1];
        let weight = a/b;
        x.push(weight)
        if(room == null)
            room = room === null && weight < 1 && index != prev ? index : null
    })

    prev = room;
    let sum = x.reduce((a, b) => a + b, 0);
    let final = sum/3*100
   
    if(final >= threshold)
        return acc

    //increment accumulator
    //and ratings
    acc++ 
    ratings[room][0] = ratings[room][0] + 1
    ratings[room][1] = ratings[room][1] + 1
    
    return solve(n, ratings, threshold, acc, prev);
}

//solve
let n = 3, ratings = [[4,4],[1,2],[3,6]], t = 77
const x = solve(n, ratings, t)
console.log(x)
//3