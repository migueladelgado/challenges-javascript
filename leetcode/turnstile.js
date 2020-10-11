//https://leetcode.com/discuss/interview-question/853053/

const { lemonchiffon } = require("color-name");

const helper = (dir, arrTimes, results) => {

}



const solve = (n, arrTime, dir) => {
    //find the same time arrivals
    let sameTimeArrs = {}
    let mappings = {}
    let max = Math.max(...arrTime)
    max = max > arrTime.length ? max : arrTime.length;
    //map seconds to current values
    let acc = -1;
    arrTime.forEach((time, index) => {
        if(time === acc)
            mappings[index] = acc + 1, acc ++
        else 
            mappings[index] = time, acc++
    })

    
    arrTime.forEach((time, index) => {
        if(sameTimeArrs[time] >= 0)
            sameTimeArrs[time] = sameTimeArrs[time] + 1
        else
            sameTimeArrs[time] = 1
    });

    let results = arrTime.map(x => -1);

    let i = 0;
    let secs = 0;
    let queue = [];
    let prev = null;
    

    while(i < dir.length){
        console.log(i, queue)
        let sameTime = sameTimeArrs[arrTime[i]]
        if(sameTime > 1){
            
            if(dir[i] >= dir[i + 1] && !dir[i] > prev){
                
                results[i] = mappings[secs] 
                queue.push(i + 1);
            } else if(dir[i] >= dir[i + 1] && dir[i] > prev) {
                results[i + 1] = mappings[secs]
                queue.push(i)
            }
                
            else if(dir[i] < dir[i + 1]){
                console.log('here', i)
                results[i + 1] = mappings[secs] 
                queue.push(i);
            }
            i++;
            secs++
        } else if(prev = 1 && dir[i] === 1 && !queue.length){
            results[i] = mappings[secs]
            secs++
        }
        else if(queue.length){
            console.log(queue)
            let ind = queue.pop()
            results[ind] = secs;
            secs++
        } else {
            results[i] = secs
            secs++
        }

        prev = dir[i];
        i++
    }

    console.log(results)
}


// let n = 4, 
// arrTime =   [0, 0, 1,5], 
// dir =       [0, 1, 1, 0]

let n = 5, arrTime = [0,1,1,3,3], dir = [0, 1, 0, 0, 1]
solve(n, arrTime, dir)
