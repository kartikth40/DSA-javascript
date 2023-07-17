// 124. BINARY TREE MAXIMUM PATH SUM
// Given the root of a binary tree, return the maximum path sum of any non-empty path.
// https://leetcode.com/problems/binary-tree-maximum-path-sum/

// for example =>
// Input: root = [1,2,3]
// Output: 6

import { TreeNode } from '../data_structures/tree.js'

const maxPathSum = (root) => {
  let maxSum = root.val
  function dfs(root) {
    if (!root) return 0
    let left = dfs(root.left)
    let right = dfs(root.right)
    let allSum = left + right + root.val
    let leftSum = left + root.val
    let rightSum = right + root.val

    // split
    maxSum = Math.max(maxSum, root.val, allSum, leftSum, rightSum)

    // do not split
    return Math.max(leftSum, rightSum, root.val)
  }
  dfs(root)
  return maxSum
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
const output = maxPathSum(root)

console.log(output)

// output

// 6
