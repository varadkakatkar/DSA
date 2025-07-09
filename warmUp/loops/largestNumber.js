

let arr = [5,0,7,10,8,17,1,55,-10]; // 55


function findLargest(arr){
    let largestNum = -Infinity;
    for(let i =0 ; i< arr.length;i++){
        if(arr[i] > largestNum){
            largestNum = arr[i]
        }
    }

    return largestNum;
}


const largest = findLargest(arr);

console.log('The largest number in an array is ',largest);