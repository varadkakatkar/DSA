/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var binarySearch = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (right >= left) {
        let middle = Math.floor((left + right) / 2);

        if (target === nums[middle]) {
            return middle;
        }

        if (target < nums[middle]) {
            right = middle - 1;
        } else if (target > nums[middle]) {
            left = middle + 1;
        }
    }

    return -1;
};

console.log(binarySearch([-1,0,3,5,9,12],9));

