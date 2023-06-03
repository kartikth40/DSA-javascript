// TREE TRAVERSAL BFS

// Time Complexity
//         - O(n)

// Space Complexity
//         - O(n)

class TreeNode {
  constructor(key) {
    this.val = key
    this.left = null
    this.right = null
  }
}

const inorder = (root) => {
  function helperFunc(root, arr) {
    if (root) {
      helperFunc(root.left, arr)
      arr.push(root.val)
      helperFunc(root.right, arr)
    }
    return arr
  }

  const inorderedList = helperFunc(root, [])
  console.log(inorderedList)

  return inorderedList
}

const preorder = (root) => {
  function helperFunc(root, arr) {
    if (root) {
      arr.push(root.val)
      helperFunc(root.left, arr)
      helperFunc(root.right, arr)
    }
    return arr
  }

  const inorderedList = helperFunc(root, [])
  console.log(inorderedList)

  return inorderedList
}

const postorder = (root) => {
  function helperFunc(root, arr) {
    if (root) {
      helperFunc(root.left, arr)
      helperFunc(root.right, arr)
      arr.push(root.val)
    }
    return arr
  }

  const inorderedList = helperFunc(root, [])
  console.log(inorderedList)

  return inorderedList
}
const root = new TreeNode(0)
root.left = new TreeNode(1)
root.right = new TreeNode(2)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)
root.right.left = new TreeNode(5)

console.log('Inorder ->')
inorder(root)
console.log()
console.log('Preorder ->')
preorder(root)
console.log()
console.log('Postorder ->')
postorder(root)

// // outputs

// Inorder ->
// [ 3, 1, 4, 0, 5, 2 ]

// Preorder ->
// [ 0, 1, 3, 4, 2, 5 ]

// Postorder ->
// [ 3, 4, 1, 5, 2, 0 ]
