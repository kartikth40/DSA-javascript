// 3. LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
// Given a string s, find the length of the longest substring without repeating characters.
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// for example =>
// Input: s = "abcabcbb"
// Output: 3

const lengthOfLongestSubstring = (s) => {
  if (!s || s.length < 1) return 0
  let l = 0
  let max = 0
  const set = new Set()

  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[l])
      l += 1
    }
    max = Math.max(max, r - l + 1)
    set.add(s[r])
  }
  return max
}

const s = 'abcabcbb'
const output = lengthOfLongestSubstring(s)

console.log(output)

// output

// 3
