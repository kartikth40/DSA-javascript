// 300. LONGEST INCREASING SUBSEQUENCE
// Given an integer array nums, return the
// length of the longest strictly increasing subsequence.
// https://leetcode.com/problems/longest-increasing-subsequence

// for example =>
// [5  2  8  6  3  6  9  5]
//     |________|__|__|

const longestIncreasingSubsequence = (nums) => {
  let dp = new Array(nums.length).fill(1)
  let longest = 1
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
        longest = Math.max(longest, dp[i])
      }
    }
  }
  return longest
}

const nums = [5, 2, 8, 6, 3, 6, 9, 5]
let len = longestIncreasingSubsequence(nums)

console.log(len)

// output

// 4
