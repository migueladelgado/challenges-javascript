/**
 * Solving this problem
 * https://leetcode.com/discuss/interview-question/861432/
 */

let songs = [60, 60, 60];
//create an object to store durations
let songsObject = songs.reduce((a,b) => (a[b] = 0, a), {})
let pairs = 0;

songs.forEach( song => {
    let duration = song % 60;
    pairs += songsObject[duration] || 0
    songsObject[duration] = (songsObject[duration] || 0) + 1;
});

console.log(pairs)
//3