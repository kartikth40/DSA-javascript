// 100 SAME TREE
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// https://leetcode.com/problems/same-tree/

// for example =>
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

import { TreeNode } from '../data_structures/tree.js'

const isSameTree = (p, q) => {
  if (!p && !q) return true
  if (!p || !q) return false

  if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }
  return false
}

const p = new TreeNode(1)
p.left = new TreeNode(2)
p.right = new TreeNode(3)
const q = new TreeNode(1)
q.left = new TreeNode(2)
q.right = new TreeNode(3)
const output = isSameTree(p, q)

console.log(output)

// output

// true
