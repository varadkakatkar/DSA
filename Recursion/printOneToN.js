const n = 10;

function printOneToN(num) {
    if(num > n) return;

    console.log(num);
    num = num +1;
    printOneToN(num)

}

printOneToN(1);