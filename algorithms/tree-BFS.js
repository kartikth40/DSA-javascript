// TREE TRAVERSAL BFS

// Time Complexity
//         - O()

// Space Complexity
//         - O()

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Queue {
  constructor() {
    this.front = null
    this.rear = null
    this.length = 0
  }

  enqueue(ele) {
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
      return
    }

    let temp = this.front

    this.front = this.front.next

    if (!this.front) {
      this.rear = null
    }

    this.length--

    return temp.data
  }

  isEmpty() {
    return !this.front && !this.rear
  }
}

class TreeNode {
  constructor(key) {
    this.val = key
    this.left = null
    this.right = null
  }
}

const treeBFS = (root) => {
  let queue = new Queue()
  queue.enqueue(root)

  while (!queue.isEmpty()) {
    const currenNode = queue.dequeue()
    console.log('visiting...', currenNode.val)

    if (currenNode.left) {
      queue.enqueue(currenNode.left)
    }

    if (currenNode.right) {
      queue.enqueue(currenNode.right)
    }
  }
}

const root = new TreeNode(0)
root.left = new TreeNode(1)
root.right = new TreeNode(2)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)
root.right.left = new TreeNode(5)

treeBFS(root)

// outputs

// visiting... 0
// visiting... 1
// visiting... 2
// visiting... 3
// visiting... 4
// visiting... 5
