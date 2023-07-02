// 5. LONGEST PALINDROMIC SUBSTRING
// Given a string s, return the longest
// palindromic substring in s.
// https://leetcode.com/problems/longest-palindromic-substring/

// for example =>
// Input: s = "babad"
// Output: "bab"

const longestPalindrome = (s) => {
  let longest = 0
  let ans = ''
  for (let i = 0; i < s.length; i++) {
    let [oddSubstring, oddLength] = getLongestPalindromeFromIndex(i, s, true)
    let [evenSubstring, evenLength] = getLongestPalindromeFromIndex(i, s, false)

    if (Math.max(oddLength, evenLength) > longest) {
      if (oddLength <= evenLength) {
        ans = evenSubstring
        longest = evenLength
      } else {
        ans = oddSubstring
        longest = oddLength
      }
    }
  }
  return ans
}

function getLongestPalindromeFromIndex(i, s, isOdd = true) {
  let left = i
  let right = i
  if (!isOdd) {
    right = i + 1
  }
  while (left >= 0 && right < s.length) {
    if (s[left] == s[right]) {
      left--
      right++
    } else {
      break
    }
  }
  left++
  right--
  return [s.slice(left, right + 1), right - left + 1]
}

const s = 'babad'
const output = longestPalindrome(s)

console.log(output)

// output

// "bab"
