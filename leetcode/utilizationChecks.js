//https://leetcode.com/discuss/interview-question/895097/



const solve = (instances, averageUtil) => {
    
    let _instances = instances;

    for(i = 0; i < averageUtil.length; i++){
        if(averageUtil[i] < 25)
            _instances = instances / 2, i += 10

        if(averageUtil[i] > 60 && _instances * 2 < (2 * Math.pow(10, 8)))
            _instances = _instances * 2, i += 10
    }

    console.log(_instances)
}



let instances = 2, averageUtil = [25, 23, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 76, 80];
let x = solve(instances, averageUtil);