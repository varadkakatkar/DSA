function sumOddNumbersOfArray(arr, n) {
    const sumIfOdd = arr[n] % 2 !== 0 ? arr[n] : 0;

    if (n === 0) return sumIfOdd;

    return sumIfOdd + sumOddNumbersOfArray(arr, n - 1);
}

const arr = [5, 3, 2, 0, 1];
console.log("Sum of all odd numbers is " + sumOddNumbersOfArray(arr, arr.length - 1));
