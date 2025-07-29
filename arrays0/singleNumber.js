function findSingleNumber1(nums) {
    const hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        if(!hashMap[nums[i]]){
            hashMap[nums[i]] = 1;
        }else {
            hashMap[nums[i]]++;
        }
        
    }
    for (let i = 0; i < nums.length; i++) {
        if(hashMap[nums[i]] == 1){
            return nums[i];
        }
    }
}


console.log("Single number in the array is ",findSingleNumber1([4,1,2,1,2]));
console.log("Single number in the array is ",findSingleNumber1([3,1,5,7,1,5,3]));


// XOR Approach

function findSingleNumber2(nums) {

    let xor = 0;
    for (let j = 0; j < nums.length; j++) {
        xor = xor^nums[j];
    
    }
    return xor;
}

console.log("Single number using XOR in the array is ",findSingleNumber2([4,1,2,1,2]));
console.log("Single number using XOR in the array is ",findSingleNumber2([3,1,5,7,1,5,3]));
console.log("Single number using XOR in the array is ",findSingleNumber1([1,2,1,3,2,5]));

