// 242. VALID ANAGRAM
// Given two strings s and t,
// return true if t is an anagram of s, and false otherwise.
// https://leetcode.com/problems/valid-anagram/

// for example =>
// Input: s = "anagram", t = "nagaram"
// Output: true

const validAnagram = (s, t) => {
  const map = new Map()
  if (s.length !== t.length) return false
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      const current = map.get(s[i])
      map.set(s[i], current + 1)
    } else {
      map.set(s[i], 1)
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i])) {
      return false
    }
    const current = map.get(t[i])
    map.set(t[i], current - 1)
  }

  for (let [key, value] of map) {
    if (value !== 0) return false
  }
  return true
}

const s = 'anagram'
const t = 'nagaram'
const output = validAnagram(s, t)

console.log(output)

// output

// true
