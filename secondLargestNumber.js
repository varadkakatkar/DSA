let arr = [4, 9, 0, 12, 8, 7, 1];
let arr1 = [4, 4, 4, 4]

function findSecondLargest(arr) {
    if(arr.length <2){
        return "Array should have atleast 2 elements"
    }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest)  {
      secondLargest = arr[i];
    }
  }
  return secondLargest === -Infinity ?'No Second largest number':secondLargest;
}

const result = findSecondLargest(arr1);

// Input: arr = [0, 3, 5, 2, 7, 9] → Output: 7

// Input: arr = [4, 4, 4, 4] → Output: No second largest found

// Input: arr = [5] → Output: Array should have at least two numbers

// Input: arr = [10, 20] → Output: 10
console.log("The second largest element in an array is:- " + result);
