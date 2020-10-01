


let arr = [9, 5, 3, 1, 2]
let n = arr.length
console.log('starting', arr)
quicksort(arr, 0, n-1)
console.log('YO', arr)

function quicksort(arr, low, high){
    console.log(low, high)
    if(low < high){
        let part = partition(arr, low, high)
        quicksort(arr, low, part - 1);
        quicksort(arr, part + 1, high);
    }
}

function partition(arr, low, high){
    let i = low - 1
    let pivot = arr[high]
    let temp;
    for(j = low; j < high; j++){
        console.log(arr[j] < pivot)
        if(arr[j] < pivot){
            i += 1;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            console.log('inner swap', arr)
        }
    }
    console.log('index', i)
    temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    console.log('outer swap', arr)
    return (i + 1);
}


function p(x){
    console.log(x)
}