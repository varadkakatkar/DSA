function findSumOfAllArrayElements(arr, n) {
    if (n === 0) return arr[0];

    const sum = arr[n] + findSumOfAllArrayElements(arr, n - 1);
    return sum;
}

const arr = [5, 3, 2, 0, 1];
console.log("Sum of all array elements is " + findSumOfAllArrayElements(arr, arr.length - 1));
const arr2 = [20];
console.log("Sum of all array2 elements is " + findSumOfAllArrayElements(arr2, arr2.length - 1));