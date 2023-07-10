// 110 BALANCED BINARY TREE
// Given a binary tree, determine if it is height-balanced.
// https://leetcode.com/problems/balanced-binary-tree/

// for example =>
// Input: root = [3,9,20,null,null,15,7]
// Output: true

import { TreeNode } from '../data_structures/Tree.js'

const isBalanced = (root) => {
  return check(root) !== -1

  function check(root) {
    if (!root) return 0

    const left = check(root.left)
    const right = check(root.right)

    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1
    }

    return 1 + Math.max(left, right)
  }
}

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)
const output = isBalanced(root)

console.log(output)

// output

// true
