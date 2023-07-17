// 78. SUBSETS
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// https://leetcode.com/problems/subsets/

// for example =>
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

const subsets = (nums) => {
  const ans = []
  backtracking([], 0)

  function backtracking(curSet, start) {
    ans.push(curSet)
    for (let i = start; i < nums.length; i++) {
      backtracking([...curSet, nums[i]], i + 1)
    }
  }
  return ans
}

const nums = [1, 2, 3]
const output = subsets(nums)

console.log(output)

// output

// [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
