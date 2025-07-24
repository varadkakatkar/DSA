/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let original = x;
    x = Math.abs(x);
    let reverseNum = 0;

    while(x > 0){
        let reminder = x % 10;
        reverseNum = (10 * reverseNum) + reminder;
        x = Math.floor(x/10)
    }

    return original > 0 ? reverseNum: -reverseNum;
};

console.log(reverse(121))
console.log(reverse(321))
console.log(reverse(-123))

console.log(reverse(120))