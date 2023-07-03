// LINKED LIST

// Time Complexity
// push    - O(1)
// pop     - O(1)
// peek    - O(1)

// Space Complexity
//         - O(n)

export class ListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

export default class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  size() {
    let count = 0
    let node = this.head
    while (node) {
      count++
      node = node.next
    }
    return count
  }

  clear() {
    this.head = null
  }

  getLast() {
    let lastNode = this.head
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next
      }
    }
    return lastNode
  }

  getFirst() {
    return this.head
  }

  print() {
    let node = this.head
    let output = []
    while (node) {
      output.push(node.data)
      node = node.next
    }
    print(output)
  }
}
