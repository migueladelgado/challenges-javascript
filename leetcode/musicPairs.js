/**
 * Solving this problem
 * https://leetcode.com/discuss/interview-question/861432/
 */

let songs = [30, 20, 150, 100, 40];
//create an object to store durations
let songsObject = songs.reduce((a,b) => (a[b] = 0, a), {})
let pairs = 0;

songs.forEach( song => {
    //get duration
    let dur = song % 60
    //set target (determine what value for it to be multiple of 60)
    let targ = (60 - dur) % 60
    //add to pairs if found
    pairs += songsObject[targ] || 0
    //add to object
    songsObject[dur] = (songsObject[dur] || 0) + 1
});

console.log(pairs)
//3