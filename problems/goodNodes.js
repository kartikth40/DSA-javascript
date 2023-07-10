// 1448 COUNT GOOD NODES IN BINARY TREE
// Given a binary tree root, a node X in the tree is named good
// if in the path from root to X there are no nodes with a value greater than X.
// Return the number of good nodes in the binary tree.
// https://leetcode.com/problems/count-good-nodes-in-binary-tree/

// for example =>
// Input: root = [3,1,4,3,null,1,5]
// Output: 4

import { TreeNode } from '../data_structures/tree.js'

const goodNodes = (root) => {
  return dfs(root, root.val)
  function dfs(root, currMax) {
    if (!root) return 0
    currMax = Math.max(currMax, root.val)
    let res = currMax <= root.val ? 1 : 0
    res += dfs(root.left, currMax)
    res += dfs(root.right, currMax)
    return res
  }
}

const root = new TreeNode(3)
root.left = new TreeNode(1)
root.left.left = new TreeNode(3)
root.right = new TreeNode(4)
root.right.left = new TreeNode(1)
root.right.right = new TreeNode(5)

const output = goodNodes(root)

console.log(output)

// output

// 4
