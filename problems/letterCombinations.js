// 17. LETTER COMBINATIONS OF A PHONE NUMBER
// Given a string containing digits from 2-9 inclusive,
// return all possible letter combinations that the number could represent. Return the answer in any order.
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

// for example =>
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

const letterCombinations = (digits) => {
  if (!digits) return []
  const mapping = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  const result = []
  backtracking(digits, 0, '', mapping, result)
  return result
}

function backtracking(digits, curIdx, curPath, mapping, result) {
  if (digits.length === curIdx) {
    result.push(curPath)
    return
  }

  for (let c of mapping[digits[curIdx]]) {
    backtracking(digits, curIdx + 1, curPath + c, mapping, result)
  }
}

const digits = '23'
const output = letterCombinations(digits)

console.log(output)

// output

// ["ad","ae","af","bd","be","bf","cd","ce","cf"]
