// 543. DIAMETER FO BINARY TREE
// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
// This path may or may not pass through the root.
// https://leetcode.com/problems/diameter-of-binary-tree/

// for example =>
// Input: root = [1,2,3,4,5]
// Output: 3

import { TreeNode } from '../data_structures/tree.js'

const diameterOfBinaryTree = (root) => {
  function dfs(root) {
    if (!root) return 0
    let left = dfs(root.left)
    let right = dfs(root.right)

    dia = Math.max(dia, left + right)
    return 1 + Math.max(left, right)
  }

  let dia = 0
  dfs(root)
  return dia
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right = new TreeNode(3)
const output = diameterOfBinaryTree(root)

console.log(output)

// output

//
