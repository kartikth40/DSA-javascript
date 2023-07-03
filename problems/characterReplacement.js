// 424. LONGEST REPEATING CHARACTER REPLACEMENT
// You are given a string s and an integer k. You can choose any character
// of the string and change it to any other uppercase English character.
// You can perform this operation at most k times.
// Return the length of the longest substring containing the same letter
// you can get after performing the above operations.
// https://leetcode.com/problems/longest-repeating-character-replacement/

// for example =>
// Input: s = "AABABBA", k = 1
// Output: 4

const characterReplacement = (s, k) => {
  let maxlen = 0
  let i = 0
  let j = 0

  while (j < s.length) {
    let curmax = 0
    let curreplace = k
    let leftAllowed = false
    while (j < s.length || curreplace > 0) {
      if (s[i] !== s[j]) {
        if (curreplace === 0) break
        curreplace--
      }
      curmax++
      if (curreplace > 0 && j === s.length - 1) {
        j = i
        leftAllowed = true
      }
      if (leftAllowed) {
        j--
        if (j < 0) break
      } else {
        j++
      }
    }
    maxlen = Math.max(maxlen, curmax)
    i++
    j = i
  }

  return maxlen
}

const s = 'AABABBA'
const k = 1
const output = characterReplacement(s, k)

console.log(output)

// output

// 4
