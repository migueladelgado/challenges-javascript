//problem: https://leetcode.com/problems/swap-nodes-in-pairs/

let head = [1,2,3,4];
const listNode = (val, next) => ({ val, next });

//create linked list 
let ll = head.map((item, index) => {
    if((index + 1) >= head.length)
        return listNode(item, null)
    return listNode(item, head[index + 1])
})

const swap = ll => {

    let i = 0;
    while(i < ll.length){
        let temp = null;
        if(ll[i].next){
            temp = ll[i]
            ll[i] = ll[i + 1]
            ll[i + 1] = temp
            i++;
        }
        i++;
    }

    return ll;
    
}

const result = swap(ll).map(x => x.val);
console.log(result)