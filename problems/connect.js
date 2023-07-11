// 116. POPULATING NEXT RIGHT POINTERS IN EACH NODE
// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children.
// The binary tree has the following definition:
// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node.
// If there is no next right node, the next pointer should be set to NULL.
// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

// for example =>
// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]

class Node {
  constructor(val, left, right, next) {
    this.val = val === undefined ? null : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
    this.next = next === undefined ? null : next
  }
}

const connect = (root) => {
  if (!root) return root
  let q = [root]
  while (q.length > 0) {
    let qlen = q.length
    for (let i = 0; i < qlen; i++) {
      let currentNode = q.shift()
      if (i + 1 < qlen) currentNode.next = q[0]
      if (currentNode.left) q.push(currentNode.left)
      if (currentNode.right) q.push(currentNode.right)
    }
  }
  return root
}

const root = new Node(1)
root.left = new Node(2)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right = new Node(3)
root.right.left = new Node(6)
root.right.right = new Node(7)
const output = connect(root)

console.log(output)

// output

//
