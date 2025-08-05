let array =[4,9,1,0,2];

function linearSearch(array,target) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if(element == target){
            return i;
        }
        
    }

    return -1;
}

result = linearSearch(array,0);

console.log('result ',result);