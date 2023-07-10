// 98. VALID BINARY SEARCH TREE
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// https://leetcode.com/problems/validate-binary-search-tree/

// for example =>
// Input: root = [5,3,7,2,4,6,null]
// Output: true

import { TreeNode } from '../data_structures/tree.js'

const isValidBST = (root) => {
  const negInf = Number.NEGATIVE_INFINITY
  const posInf = Number.POSITIVE_INFINITY

  return dfs(root, negInf, posInf)

  function dfs(root, leftBound, rightBound) {
    if (!root) return true
    if (leftBound >= root.val || rightBound <= root.val) return false
    return (
      dfs(root.left, leftBound, root.val) &&
      dfs(root.right, root.val, rightBound)
    )
  }
}

const root = new TreeNode(5)
root.left = new TreeNode(3)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)
root.right = new TreeNode(7)
root.right.left = new TreeNode(6)

const output = isValidBST(root)

console.log(output)

// output

// true
