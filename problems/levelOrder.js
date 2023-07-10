// 102. BINARY TREE LEVEL ORDER TRAVERSAL
// Given the root of a binary tree, return the level order traversal of its nodes' values.
// https://leetcode.com/problems/binary-tree-level-order-traversal/

// for example =>
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

import { TreeNode } from '../data_structures/tree.js'

const levelOrder = (root) => {
  let q = [root],
    ans = []
  while (q[0]) {
    let qlen = q.length,
      row = []
    for (let i = 0; i < qlen; i++) {
      let curr = q.shift()
      row.push(curr.val)
      if (curr.left) q.push(curr.left)
      if (curr.right) q.push(curr.right)
    }
    ans.push(row)
  }
  return ans
}

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

const output = levelOrder(root)

console.log(output)

// output

//  [[3],[9,20],[15,7]]
