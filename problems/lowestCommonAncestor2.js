// 236. LOWEST COMMON ANCESTOR OF A BINARY TREE
// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

// for example =>
// Input: root = [3,5,1,6,2,0,8], p = 5, q = 1
// Output: 3

import { TreeNode } from '../data_structures/tree.js'

const lowestCommonAncestor2 = (root, p, q) => {
  if (root.val === p.val || root.val === q.val) return root
  if (!root.left && !root.right) return null

  let left = null,
    right = null
  if (root.left) left = lowestCommonAncestor2(root.left, p, q)
  if (root.right) right = lowestCommonAncestor2(root.right, p, q)
  if (left && right) return root

  return left || right
}

const root = new TreeNode(3)
root.left = new TreeNode(5)
root.left.left = new TreeNode(6)
root.left.right = new TreeNode(2)
root.right = new TreeNode(1)
root.right.left = new TreeNode(0)
root.right.right = new TreeNode(8)
const p = new TreeNode(5)
const q = new TreeNode(1)
const output = lowestCommonAncestor2(root, p, q)

console.log(output)

// output

// 3
