// STACK

// Time Complexity
// push    - O(1)
// pop     - O(1)
// peek    - O(1)

// Space Complexity
//         - O(n)

export default class Stack {
  constructor(printAllSteps = false) {
    this.stack = []
    this.printAllSteps = printAllSteps
  }

  push(ele) {
    this.printAllSteps && console.log('pushing...', ele)
    this.stack.push(ele)
  }

  pop() {
    this.printAllSteps &&
      console.log('popping...', this.stack[this.stack.length - 1])
    return this.stack.pop()
  }

  peek() {
    let peekElement = this.stack[this.stack.length - 1]
    this.printAllSteps && console.log('peeking...', peekElement)
    return peekElement
  }

  isEmpty() {
    return this.stack.length === 0
  }

  size() {
    this.printAllSteps && console.log('getting size...', this.stack.length)
    return this.stack.length
  }

  print() {
    console.log('stack --->', this.stack)
  }
}
