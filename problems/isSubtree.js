// 572. SUBTREE OF ANOTHER TREE
// Given the roots of two binary trees root and subRoot, return true
// if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
// https://leetcode.com/problems/subtree-of-another-tree/

// for example =>
// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true

import { TreeNode } from '../data_structures/tree.js'
import { isSameTree } from './isSameTree.js'

const isSubtree = (root, subRoot) => {
  if (!root) return false

  if (isSameTree(root, subRoot)) return true

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}

const root = new TreeNode(3)
root.left = new TreeNode(4)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(2)
root.right = new TreeNode(5)
const subRoot = new TreeNode(4)
subRoot.left = new TreeNode(1)
subRoot.right = new TreeNode(2)

const output = isSubtree(root, subRoot)

console.log(output)

// output

// true
