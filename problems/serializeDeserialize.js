// 297. SERIALIZE AND DESERIALIZE BINARY TREE
// Design an algorithm to serialize and deserialize a binary tree.
// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

// for example =>
// Input: root = [1,2,3,null,null,4,5]
// Output: [1,2,3,null,null,4,5]

import { TreeNode } from '../data_structures/tree.js'

const serialize = (root) => {
  const res = []
  function dfs(root) {
    if (!root) {
      res.push('N')
      return
    }
    res.push(String(root.val))
    dfs(root.left)
    dfs(root.right)
  }
  dfs(root)
  return res.join(',')
}

const deserialize = (data) => {
  if (!data) return null
  const nodes = data.split(',')
  let i = 0
  function dfs(nodes) {
    if (i === nodes.length || nodes[i] === 'N') {
      i++
      return null
    }
    const root = new TreeNode(parseInt(nodes[i]))
    i++
    root.left = dfs(nodes)
    root.right = dfs(nodes)
    return root
  }
  return dfs(nodes)
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.right.left = new TreeNode(4)
root.right.right = new TreeNode(5)

const serialized = serialize(root)
const deserialized = deserialize(serialized)

console.log(serialized)
console.log(deserialized)

// outputs

// [1,2,3,null,null,4,5]
