let str = '*|*|******|****|***'//'|**|*|*';
let start = [-1, 1], end = [1, 20]


for(i = 0; i < start.length; i++){
    //slice the characters
    let s = start[i], e = end[i]
    let sub = str.split('').slice(s -1, e);

    //tracking vars
    let total = 0, closed = null, count = 0, j = 0;

    while(j < sub.length){
        //find the opening of first container
        if(closed === null && sub[j] === "|")
            closed = 0;
    
        //close container
        if(j > 0 && sub[j] === "|" && closed === 0)
            closed = 1

        if(!(closed === null) && closed)
            (total += count,
                count = 0,
                    closed = 0)
                    
        else if(sub[j] === "*" && !(closed === null))
            count++;
    
        j++
    }
    console.log(total)
}

 