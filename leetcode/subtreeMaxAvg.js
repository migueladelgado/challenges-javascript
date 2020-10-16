//https://leetcode.com/discuss/interview-question/349617

let tree = {
    20 : {
        18: {
            15 : null,
            8 : null
        },
        12: {
            11: null, 
            2: null,
            3: null
        }
    }
}

const getSum = (tree, key) => {
    let sum = 0
    for(let key in tree){
        sum += Number(key);
    }
    return { sum, key }
}

const helper = (tree, sum = 0, sums) => {
    for(let key in tree){
        if(tree[key]){
            sum = getSum(tree[key], key)
            helper(tree[key], sum, sums)
        } else {
            sums.push(sum)
        }
    }
    return sums
}

const solve = (tree) => {
    let sums = []
    let res = null;
    for(let key in tree){
       res = helper(tree[key], 0, sums)
    }

    let set = new Set(res);
    let max = 0, maxKey = ''
    set.forEach( x => {
        if(x.sum > max)
            max = x.sum, maxKey = x.key
    })
    return maxKey;
}

let x = solve(tree);
console.log(x)
//18