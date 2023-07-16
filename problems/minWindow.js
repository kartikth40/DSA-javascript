// 76. MINIMUM WINDOW SUBSTRING
// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring of s such that every character in t (including duplicates) is included in the window.
// If there is no such substring, return the empty string "".
// https://leetcode.com/problems/minimum-window-substring/

// for example =>
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"

const minWindow = (s, t) => {
  if (t.length > s.length) return ''
  let window = new Map()
  let tcount = new Map()

  for (let char of t) {
    tcount.set(char, (tcount.get(char) || 0) + 1)
  }

  let have = 0
  let need = tcount.size
  let minLen = Infinity
  let res = [-1, -1]

  let left = 0
  for (let right = 0; right < s.length; right++) {
    let cur = s[right]
    let curCount = window.get(cur) || 0
    window.set(cur, curCount + 1)

    if (tcount.has(cur) && window.get(cur) === tcount.get(cur)) {
      have += 1
    }

    while (have === need) {
      let curLen = right - left + 1
      if (curLen < minLen) {
        minLen = curLen
        res = [left, right]
      }
      window.set(s[left], window.get(s[left]) - 1)
      if (tcount.has(s[left]) && window.get(s[left]) < tcount.get(s[left])) {
        have -= 1
      }
      left += 1
    }
  }

  const [l, r] = res
  return minLen !== Infinity ? s.slice(l, r + 1) : ''
}

const s = 'ADOBECODEBANC'
const t = 'ABC'
const output = minWindow(s, t)

console.log(output)

// output

// "BANC"
