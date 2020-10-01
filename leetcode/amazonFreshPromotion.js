/**
 * assessment: https://leetcode.com/discuss/interview-question/762546/
 */
let apple = 'apple';
let banana = 'banana';
let orange = 'orange';
let anything = 'anything';

let codelists = [
    [[apple, apple], [banana, anything, banana]],
    [[apple, apple], [banana, anything, banana]],
    [[apple, apple], [banana, anything, banana]],
    [[apple, apple], [apple, apple, banana]],
    [[apple, apple], [apple, apple, banana]],
]

let carts = [
    [orange, apple, apple, banana, orange, banana],
    [banana, orange, banana, apple, apple],
    [apple, banana, apple, banana, orange, banana],
    [apple, apple, apple, banana],
    [orange, apple, orange, apple, apple, apple, apple, banana]
]

codelists.forEach( (cl, i) => {
    let result = solve(cl, carts[i]);
    console.log(result)
});

//loop results 1, 0, 0, 0

function solve(codeList, cart){
    //flatten arrays
    let flatCl = codeList.reduce((a, b) => {
        a = [...a, ...b];
        return a
    }, [])     

    let fi = 0 //set index for flat array
    let target = flatCl.length; //fint target value
    let matches = 0; //track matches

    //loop through shoppin cart
    cart.forEach( item => {
        if(item == flatCl[fi] || flatCl[fi] === 'anything'){
            matches++;
            fi++;
        } else {
            fi = 0;
            matches = 0;
        }
    })

    return matches === target ? 1 : 0
}
