// 1. TWO SUM
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// https://leetcode.com/problems/two-sum

// for example =>
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

const twoSum = (nums, target) => {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const currDiff = target - nums[i]
    if (map.has(currDiff)) {
      return [map.get(currDiff), i]
    }
    map.set(nums[i], i)
  }
  return [-1, -1]
}

const nums = [2, 7, 11, 15]
const target = 9
const output = twoSum(nums, target)

console.log(output)

// output

// [0,1]
