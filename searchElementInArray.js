// write a function that searches for an element in an array and retuns index ,if non found then just return -1

function searchElement(array,x) {
    for(let i = 0; i < array.length; i++ ) {
        if(array[i] == x){
            return i;
        }
    }

    return -1
}

let arr = [4,2,0,10,8,30];

let a = searchElement(arr, 4)
let b = searchElement(arr, 10)
let c = searchElement(arr, 49)

console.log('a ',a);
console.log('b ',b)
console.log('c ',c)

// searchElement(arr, 4) => 0
// searchElement(arr, 10) => 0
// searchElement(arr, 49) => -1