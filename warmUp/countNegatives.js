

function countNegatives(array){
    let count = 0;
    for(let i = 0;i<array.length;i++ ){
        if(array[i] < 0){
            count++;
        }
    }
    return count;
}

let arr = [2,-9,17,0,1,-10,-4,8];


const result = countNegatives(arr)

console.log('negative numbers in an array is ',result);