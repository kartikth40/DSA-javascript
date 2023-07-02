// 14. LONGEST COMMON PREFIX
// Write a function to find the longest common prefix string amongst an array of strings.
// https://leetcode.com/problems/longest-common-prefix/

// for example =>
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

const longestCommonPrefix = (strs) => {
  let longest = 0
  let shortest = 200
  for (let str of strs) {
    shortest = Math.min(shortest, str.length)
  }
  let breakOut = false
  for (let i = 1; i <= shortest; i++) {
    const currentPrefix = strs[0].substring(0, i)
    for (let str of strs) {
      if (str.substring(0, i) !== currentPrefix) {
        breakOut = true
        break
      }
    }
    if (breakOut) break
    longest += 1
  }
  return strs[0].substring(0, longest)
}

const strs = ['flower', 'flow', 'flight']
const output = longestCommonPrefix(strs)

console.log(output)

// output

// "fl"
