// 128. LONGEST CONSECUTIVE SEQUENCE
// Given an unsorted array of integers nums,
// return the length of the longest consecutive elements sequence.
// https://leetcode.com/problems/longest-consecutive-sequence

// for example =>
// Input: nums = [100,4,200,1,3,2]
// Output: 4

const longestConsecutive = (nums) => {
  const set = new Set(nums)
  let ans = 0
  for (let num of nums) {
    let currentMax = 0
    let currentNum = num
    if (!set.has(currentNum - 1)) {
      while (set.has(currentNum)) {
        currentMax += 1
        currentNum += 1
      }
    }

    ans = Math.max(ans, currentMax)
  }
  return ans
}

const nums = [100, 4, 200, 1, 3, 2]
const output = longestConsecutive(nums)

console.log(output)

// output

// 4
