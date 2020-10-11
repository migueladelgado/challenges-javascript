//https://leetcode.com/discuss/interview-question/862600/

const solve = (target, transactions) => {
    //init trackers
    let tracker = {}
    let results = {}

    //iterate through data
    transactions.forEach( tran => {
        let tmpTrkr = {}
        let uIds = tran[0].split(' ')
        uIds.forEach( id => {
            if(tracker[id] && !tmpTrkr[id])
                tracker[id] = tracker[id] + 1, tmpTrkr = 1
            else
                tracker[id] = 1
            if(tracker[id] >= target)
                results[id] = true;
        })
    })
    let output = Object.keys(results).sort((a,b)=> b-a).slice(0, target);
    console.log(output)
} 


let targ = 3;
let data = [
    ['345366 89921 45'],
    ['029323 38239 23'],
    ['38239 345366 15'],
    ['029323 38239 77'],
    ['345366 38239 23'],
    ['029323 345366 13'],
    ['38239 38239 23']
]

solve(targ, data);
//[ '345366', '38239', '029323' ]