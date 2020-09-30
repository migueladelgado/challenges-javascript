/**
 * Solving this problem
 * https://leetcode.com/discuss/interview-question/861432/
 */

let songs = [10, 50, 90, 30];
//find how many pairs may add to a multiple of 60
let songsObject = songs.reduce((a,b) => (a[b] = true, a), {})
let pairs = 0;
let pairObj = {}

songs.forEach( song => {
    let x = Math.ceil(song / 60)
    let diff =  (60 * x) - song;
    if(songsObject[diff.toString()] && diff !== song && !checkIfPairExists(diff, song)){
        pairObj[`${diff}:${song}`] = true;
        pairs += 1;
    } 
});

function checkIfPairExists(diff, song){
    if(pairObj[`${diff}:${song}`] || pairObj[`${song}:${diff}`]){
        return true
    }
    return false
}

console.log(pairs)
// 2