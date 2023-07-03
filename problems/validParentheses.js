// 20. VALID PARENTHESES
// Given a string s containing just the characters
// '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// https://leetcode.com/problems/valid-parentheses/

// for example =>
// Input: s = "()[]{}"
// Output: true

const isValid = (s) => {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case ')':
        if (stack.pop() !== '(') return false
        break
      case '}':
        if (stack.pop() !== '{') return false
        break
      case ']':
        if (stack.pop() !== '[') return false
        break
      default:
        stack.push(s[i])
    }
  }
  if (stack.length > 0) {
    return false
  }
  return true
}

const s = '()[]{}'
const output = isValid(s)

console.log(output)

// output

// true
