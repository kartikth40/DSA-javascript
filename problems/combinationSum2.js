// 40. COMBINATION SUM II
// Given a collection of candidate numbers (candidates) and a target number (target),
// find all unique combinations in candidates where the candidate numbers sum to target.
// Each number in candidates may only be used once in the combination.
// Note: The solution set must not contain duplicate combinations.
// https://leetcode.com/problems/combination-sum-ii/

// for example =>
// Input: candidates = [2,5,2,1,2], target = 5
// Output: [[1,2,2], [5]]

const combinationSum2 = (candidates, target) => {
  function backtracking(i, cur, total) {
    // good base case
    if (total === target) {
      res.push([...cur])
      return
    }

    // bad base case
    if (i >= candidates.length || total > target) return

    // include current candidate
    cur.push(candidates[i])
    backtracking(i + 1, cur, total + candidates[i])
    cur.pop()

    // do not include current candidate
    // while loop till duplicates
    while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
      i++
    }
    backtracking(i + 1, cur, total)
  }

  let res = []
  candidates.sort((a, b) => a - b)
  backtracking(0, [], 0)
  return res
}

const candidates = [2, 5, 2, 1, 2]
const target = 5
const output = combinationSum2(candidates, target)

console.log(output)

// output

// [[1,2,2], [5]]
