// 287. FIND THE DUPLICATE NUMBER
// Given an array of integers nums containing n + 1 integers where
// each integer is in the range [1, n] inclusive. There is only one
// repeated number in nums, return this repeated number.
// https://leetcode.com/problems/find-the-duplicate-number/

// for example =>
// Input: nums = [3,1,3,4,2]
// Output: 3

const findDuplicate = (nums) => {
  let slow = nums[0]
  let fast = nums[nums[0]]

  while (slow != fast) {
    slow = nums[slow]
    fast = nums[nums[fast]]
  }

  slow = 0

  while (slow != fast) {
    slow = nums[slow]
    fast = nums[fast]
  }

  return slow
}

const nums = [3, 1, 3, 4, 2]
const output = findDuplicate(nums)

console.log(output)

// output

// 3
