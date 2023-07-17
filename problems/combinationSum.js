// 39. COMBINATION SUM
// Given an array of distinct integers candidates and a target integer target,
// return a list of all unique combinations of candidates where the chosen numbers sum to target.
// You may return the combinations in any order.
// https://leetcode.com/problems/combination-sum/

// for example =>
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]

const combinationSum = (candidates, target) => {
  const res = []
  backtracking(target, [], 0)

  function backtracking(remaining, curSet, start) {
    if (remaining < 0) return
    if (remaining === 0) {
      res.push(curSet)
      return
    }

    for (let i = start; i < candidates.length; i++) {
      backtracking(remaining - candidates[i], [...curSet, candidates[i]], i)
    }
  }
  return res
}

const candidates = [2, 3, 6, 7]
const target = 7
const output = combinationSum(candidates, target)

console.log(output)

// output

// [[2,2,3],[7]]
