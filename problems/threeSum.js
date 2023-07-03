// 15. 3SUM
// Given an integer array nums, return all the triplets
// [nums[i], nums[j], nums[k]] such that i != j, i != k, and
// j != k, and nums[i] + nums[j] + nums[k] == 0.
// https://leetcode.com/problems/3sum/

// for example =>
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

const threeSum = (nums) => {
  const len = nums.length
  nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < len - 2; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue
    let left = i
    let mid = i + 1
    let right = len - 1

    while (mid < right) {
      const sum = nums[mid] + nums[left] + nums[right]
      if (sum === 0) {
        res.push([nums[left], nums[mid], nums[right]])
        while (mid < right && nums[mid + 1] === nums[mid]) {
          mid++
        }
        while (mid < right && nums[right - 1] === nums[right]) {
          right--
        }
        mid++
        right--
      } else if (sum < 0) {
        mid++
      } else {
        right--
      }
    }
  }
  return res
}

const nums = [-1, 0, 1, 2, -1, -4]
const output = threeSum(nums)

console.log(output)

// output

// [[-1,-1,2],[-1,0,1]]
