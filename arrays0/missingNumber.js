function findMissingNumber(nums) {
    let n = nums.length;
    let totalSum = n*(n+1)/2;
    let partialSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        partialSum = partialSum + nums[i];
        
    }

    const missingNumber = totalSum - partialSum;
    console.log('missingNumber ',missingNumber);
    return missingNumber;
}


console.log("Missing number in the array is "+findMissingNumber([9,6,4,2,3,5,7,0,1]))