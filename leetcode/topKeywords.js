
/**
 * Solving top keywords problem: https://leetcode.com/discuss/interview-question/542597/
 */
let k = 2;
let keywords = ["anacell", "cetracular", "betacellular"];

let reviews = [
    "Anacell provides the best services in the city",
    "betacellular has awesome test services",
    "Best services test provided by anacell, everyone should use anacell",
];


let ko = {}
//create object of keywords
keywords.forEach(word => ko[word] = 0)

reviews.forEach( review => {
    let words = review.split(' ');
    words.forEach( word => {
        let w = word.toLowerCase();
        if(ko[w] >= 0)
            ko[w] = ko[w] + 1
    })
})

sortedList = Object.entries(ko).sort((a, b) =>  a[0] < b[0] ? -1 : 1).sort((a, b) =>  b[1] - a[1]);
topWords = sortedList.splice(0, k).map( x => x[0]);

console.log(topWords)
// ['anacell', 'betacellular']

