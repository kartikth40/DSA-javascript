// 150. EVALUATE REVERSE POLISH NOTATION
// You are given an array of strings tokens that represents an
// arithmetic expression in a Reverse Polish Notation.
// Evaluate the expression.
// Return an integer that represents the value of the expression.
// https://leetcode.com/problems/evaluate-reverse-polish-notation/

// for example =>
// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22

const evalRPN = (tokens) => {
  const stack = []

  for (let token of tokens) {
    let right, left
    switch (token) {
      case '+':
        right = stack.pop()
        left = stack.pop()
        stack.push(left + right)
        break
      case '-':
        right = stack.pop()
        left = stack.pop()
        stack.push(left - right)
        break
      case '*':
        right = stack.pop()
        left = stack.pop()
        stack.push(left * right)
        break
      case '/':
        right = stack.pop()
        left = stack.pop()
        stack.push(
          left / right < 0 ? Math.ceil(left / right) : Math.floor(left / right)
        )
        break
      default:
        stack.push(parseInt(token))
        break
    }
  }
  return stack[0]
}

const tokens = [
  '10',
  '6',
  '9',
  '3',
  '+',
  '-11',
  '*',
  '/',
  '*',
  '17',
  '+',
  '5',
  '+',
]
const output = evalRPN(tokens)

console.log(output)

// output

// 22
