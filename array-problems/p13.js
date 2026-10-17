// Given an array of integers nums and 
// an integer target, return indices of 
// the two numbers such that they add up
// to target. You may assume each input 
// has exactly one solution.
// Input: nums = [2, 7, 11, 15], target = 9
// Output: 
// [0, 1] (Because nums[0] + nums[1] = 2 + 7 = 9)

function twoSum(nums, target) {
    const map = new Map();

    const twoSums = []

    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];

        if (map.has(needed)) {
            twoSums.push([map.get(needed), i])
        }

        map.set(nums[i], i);
    }
    return twoSums;
}

console.log(twoSum([2, 7, 11, 15, 5, 4], 9));