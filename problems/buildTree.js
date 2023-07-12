// 105. CONSTRUCT BINARY TREE FROM PEORDER AND INORDER TRAVERSAL
// Given two integer arrays preorder and inorder where preorder is the preorder traversal
// of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

// for example =>
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

import { TreeNode } from '../data_structures/tree.js'

const buildTree = (preorder, inorder) => {
  if (preorder.length === 0 || inorder.length === 0) return null

  let root = new TreeNode(preorder[0])
  let idx = inorder.indexOf(preorder[0])
  root.left = buildTree(preorder.slice(1, idx + 1), inorder.slice(0, idx))
  root.right = buildTree(preorder.slice(idx + 1), inorder.slice(idx + 1))

  return root
}

const preorder = [3, 9, 20, 15, 7]
const inorder = [9, 3, 15, 20, 7]
const output = buildTree(preorder, inorder)

console.log(output)

// output

// [3,9,20,null,null,15,7]
