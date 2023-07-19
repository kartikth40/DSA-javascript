// 131. PALINDROME PARTIONING
// Given a string s, partition s such that every substring of the partition is a palindrome.
// Return all possible palindrome partitioning of s.
// https://leetcode.com/problems/palindrome-partitioning/

// for example =>
// Input: s = "aaba"
// Output: [ [ 'a', 'a', 'b', 'a' ], [ 'a', 'aba' ], [ 'aa', 'b', 'a' ] ]

const palindromePartition = (s) => {
  function backtracking(i, sub) {
    if (i === s.length) {
      res.push([...sub])
      return
    }

    for (let idx = i; idx < s.length; idx++) {
      if (isPalindrome(s.slice(i, idx + 1))) {
        sub.push(s.slice(i, idx + 1))
        backtracking(idx + 1, sub)
        sub.pop()
      }
    }
  }

  function isPalindrome(str) {
    let i = 0
    let j = str.length - 1
    while (i < j) {
      if (str[i] === str[j]) {
        i++
        j--
      } else {
        return false
      }
    }
    return str[i] === str[j]
  }

  let res = []
  backtracking(0, [])
  return res
}

const s = 'aaba'
const output = palindromePartition(s)

console.log(output)

// output

// [ [ 'a', 'a', 'b', 'a' ], [ 'a', 'aba' ], [ 'aa', 'b', 'a' ] ]
