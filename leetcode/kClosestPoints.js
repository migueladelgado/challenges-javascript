//https://leetcode.com/discuss/interview-question/895851/


const calc = (points) => {
    let { pow, abs } = Math;
    let a = pow(abs(points[0]), 2)
    let b = pow(abs(points[1]), 2)
    return a + b;
}

const solve = (points, k) => {
    let tracker = {}
    points.forEach((point, index) => {
        let dist = calc(point)
        if(!tracker[dist]){
            tracker[dist] = point
        } 
    })
    let sortedKeys = Object.keys(tracker).sort((a, b) => a - b)
    let results = [];
    sortedKeys.forEach((key, index) => {
        if(index <= k - 1)
            results.push(tracker[key])
    })
    return results;
}


// let points = [[1,3],[-2,2]], k = 1
let points = [[3,3],[5,-1],[-2,4]], k = 2
let r = solve(points, k)
console.log(r)

