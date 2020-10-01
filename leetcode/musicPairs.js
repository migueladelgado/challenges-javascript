/**
 * Solving this problem
 * https://leetcode.com/discuss/interview-question/861432/
 */

let songs = [30, 20, 150, 100, 40];
//find how many pairs may add to a multiple of 60
let songsObject = songs.reduce((a,b) => (a[b] = 0, a), {})
let pairs = 0;

songs.forEach( song => {
    let dur = song % 60
    let targ = (60 - dur) % 60
    pairs += songsObject[targ] || 0
    songsObject[dur] = (songsObject[dur] || 0) + 1
});

console.log(pairs)
//3