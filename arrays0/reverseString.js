const stringArr = ["h","e","l","l","o"];

function reverseStringArray(str){
    const length = str.length;
    const halfLength = length/2;

    for (let index = 0; index < halfLength; index++) {
        
        const temp = str[index];
        str[index] = str[length-1-index];
        str[length-1-index] = temp;
    }
    return str
}

console.log("reverse string of hello is "+reverseStringArray(stringArr));
