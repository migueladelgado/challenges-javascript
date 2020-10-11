//https://leetcode.com/discuss/interview-question/877624/


const helper = (str, arr) => {
    //turn into set and check that the length is 1 less than the length
    //this will ensure that there was only 1 repeating char.
    let set = new Set(str)
    if(set.size === str.length - 1)
        arr.push(str);
}

const solve = (str, k) => {
    let winners = []
    for(i = 0; i < str.length; i++){
        //find substrings according to k size
        if(i + k <= str.length){
            let substr = str.substring(i, i + k)
            helper(substr, winners)
        }
    }
    console.log(winners)
}


str = 'democracy', k = 5

 

solve(str, k);
//[ 'ocrac', 'cracy' ]
str = 'awaglk', k = 4
solve(str, k);
//['awag']
str = 'wawaglknagagwunagkwkwagl', k = 4
solve(str, k);