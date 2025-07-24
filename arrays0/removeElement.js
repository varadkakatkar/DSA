function removeElement(nums, val) {
  let x = 0;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element !== val) {
      nums[x] = element;
      x = x + 1;
    }
  }
  return x;
}

const nums = [3, 1, 3, 4, 3, 3, 3, 7];
console.log(removeElement(nums, 3));
console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
