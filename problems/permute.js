// 46. PERMUTATIONS
// Given an array nums of distinct integers, return all the possible permutations.
// You can return the answer in any order.
// https://leetcode.com/problems/permutations/

// for example =>
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

const permute = (nums) => {
  const permutations = []
  backtracking([], Array(nums.length).fill(false))

  function backtracking(cur, used) {
    if (cur.length === nums.length) {
      permutations.push(Array.from(cur))
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue
      used[i] = true
      cur.push(nums[i])
      backtracking(cur, used)
      cur.pop()
      used[i] = false
    }
  }

  return permutations
}

const nums = [1, 2, 3]
const output = permute(nums)

console.log(output)

// output

// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
