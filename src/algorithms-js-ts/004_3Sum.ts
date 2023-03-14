export const threeSum = (nums: number[]): number[][] => {
  const triplets: number[][] = [];
  let sortedNums = nums.sort((a, b) => { return a - b });

  console.log(sortedNums);

  for (let i = 0; i < sortedNums.length-2; i++) {
    
    if (i === 0 || ( i > 0 && sortedNums[i] !== sortedNums[-1] )) {
      let low:number = i + 1;
      //let high:number = 
    }
    
  }

  return triplets;
};

/*
Given an integer array nums, return all the triplets 
[nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, 
and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.



Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
*/
