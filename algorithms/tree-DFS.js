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
  if (root) {
    inorder(root.left)
    console.log(root.val)
    inorder(root.right)
  }
}

const preorder = (root) => {
  if (root) {
    console.log(root.val)
    preorder(root.left)
    preorder(root.right)
  }
}

const postorder = (root) => {
  if (root) {
    postorder(root.left)
    postorder(root.right)
    console.log(root.val)
  }
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
// 3
// 1
// 4
// 0
// 5
// 2

// Preorder ->
// 0
// 1
// 3
// 4
// 2
// 5

// Postorder ->
// 3
// 4
// 1
// 5
// 2
// 0
