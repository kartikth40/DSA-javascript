// QUEUE

// Time Complexity
// enqueue - O(1)
// dequeue - O(1)
// peek    - O(1)

// Space Complexity
//         - O(n)

class Node {
  constructor(data) {
    this.val = data
    this.next = null
  }
}

export default class Queue {
  constructor(printAllSteps = false) {
    this.front = null
    this.rear = null
    this.length = 0
    this.printAllSteps = printAllSteps
  }

  enqueue(ele) {
    this.printAllSteps && console.log('enqueuing...', ele)
    const node = new Node(ele)

    if (!this.front) {
      this.front = node
      this.rear = node
    } else {
      this.rear.next = node
      this.rear = node
    }

    this.length++
  }

  dequeue() {
    if (!this.front) {
      this.printAllSteps && console.log('Queue is empty.')
      return
    }

    let temp = this.front
    this.printAllSteps && console.log('dequeuing...', temp.val)

    this.front = this.front.next

    if (!this.front) {
      this.rear = null
    }

    this.length--

    return temp.val
  }

  peek() {
    if (this.front) {
      this.printAllSteps && console.log('peeking...', this.front.val)
      return this.front.val
    } else {
      this.printAllSteps && console.log('Queue is empty.')
      return
    }
  }

  isEmpty() {
    return !this.front && !this.rear
  }

  size() {
    this.printAllSteps && console.log('getting size...', this.length)
    return this.length
  }

  print() {
    let cur = this.front
    if (!cur) {
      console.log('Queue is Empty')
    } else {
      let q = ''
      while (cur) {
        q += cur.val + ' -> '
        cur = cur.next
      }
      q += 'null'

      console.log(q)
    }
  }
}
