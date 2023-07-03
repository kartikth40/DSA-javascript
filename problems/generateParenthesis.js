// 22. GENERATE PARENTHESES
// Given n pairs of parentheses, write a function
// to generate all combinations of well-formed parentheses.
// https://leetcode.com/problems/generate-parentheses/

// for example =>
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

const generateParenthesis = (n) => {
  if (n < 1) return []
  const res = []

  function backtrack(open, close, curr) {
    if (open === close && open === n) {
      res.push(curr)
      return
    }
    if (open < n) {
      backtrack(open + 1, close, curr + '(')
    }
    if (close < open) {
      backtrack(open, close + 1, curr + ')')
    }
  }
  backtrack(0, 0, '')
  return res
}

const n = 3
const output = generateParenthesis(n)

console.log(output)

// output

// ["((()))","(()())","(())()","()(())","()()()"]
