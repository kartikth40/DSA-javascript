// 235. LOWEST COMMON ANCESTOR OF A BINARY SEARCH TREE
// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
// ---problem link---

// for example =>
// Input: root = [6,2,8,0,4,7,9], p = 2, q = 8
// Output: 6

import { TreeNode } from '../data_structures/tree.js'

const lowestCommonAncestor = (root, p, q) => {
  let current = root

  while (current) {
    if (current.val < p.val && current.val < q.val) {
      current = current.right
    } else if (current.val > p.val && current.val > q.val) {
      current = current.left
    } else return current
  }
}

const root = new TreeNode(6)
root.left = new TreeNode(2)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(4)
root.right = new TreeNode(8)
root.right.left = new TreeNode(7)
root.right.right = new TreeNode(9)
const p = new TreeNode(2)
const q = new TreeNode(8)
const output = lowestCommonAncestor(root, p, q)

console.log(output)

// output

// 6
