// 217. CONTAINS DUPLICATE
// Given an integer array nums, return true if any value appears at
// least twice in the array, and return false if every element is distinct.
// https://leetcode.com/problems/contains-duplicate

// for example =>
// Input: nums = [1,2,3,1]
// Output: true

const containsDuplicate = (nums) => {
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true
    }
    set.add(nums[i])
  }
  return false
}

const nums = [1, 2, 3, 1]
const output = containsDuplicate(nums)

console.log(output)

// output

// true
