function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min != i) {
    //   let temp = arr[i];
    //   arr[i] = arr[min];
    //   arr[min] = temp;
    // This is called array destructuring assignment in JavaScript, and it’s a short and elegant way to swap two 
    [arr[i],arr[min]] = [arr[min],arr[i]]
    }
  }

  return arr;
}

const arr = [4, 5, 1, 3, 9];

console.log("selection sorted array is  ", selectionSort(arr));
