// QUEUE

// Time Complexity
// enqueue - O(1)
// dequeue - O(1)
// peek    - O(1)

// Space Complexity
//         - O(n)

class Node {
  constructor(data) {
    this.data = data
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
    this.printAllSteps && console.log('dequeuing...', temp.data)

    this.front = this.front.next

    if (!this.front) {
      this.rear = null
    }

    this.length--

    return temp.data
  }

  peek() {
    if (this.front) {
      this.printAllSteps && console.log('peeking...', this.front.data)
      return this.front.data
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
        q += cur.data + ' -> '
        cur = cur.next
      }
      q += 'null'

      console.log(q)
    }
  }
}

const queue = new Queue(true)
queue.enqueue(0)
queue.enqueue(2)
queue.enqueue(4)
queue.enqueue(6)

queue.print()
queue.size()

queue.dequeue()
queue.print()
queue.size()

// outputs

// enqueuing... 0
// enqueuing... 2
// enqueuing... 4
// enqueuing... 6
// 0 -> 2 -> 4 -> 6 -> null
// getting size... 4
// dequeuing... 0
// 2 -> 4 -> 6 -> null
// getting size... 3
