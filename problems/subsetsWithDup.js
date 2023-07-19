// 90. SUBSETS II
// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
// ---problem link---

// for example =>
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

const subsetsWithDup = (nums) => {
  const ans = []
  nums.sort((a, b) => {
    return a - b
  })

  function backtracking(curSet, i) {
    if (i === nums.length) {
      ans.push([...curSet])
      return
    }

    // All subsets that include nums[i]
    curSet.push(nums[i])
    backtracking(curSet, i + 1)
    curSet.pop()

    // All subsets that do not include nums[i]
    // if skipping a duplicate value then skip all the dups
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++
    }
    backtracking(curSet, i + 1)
  }

  backtracking([], 0)
  return ans
}

const nums = [1, 2, 2]
const output = subsetsWithDup(nums)

console.log(output)

// output

// [[],[1],[1,2],[1,2,2],[2],[2,2]]
