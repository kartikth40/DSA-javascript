// BINARY SEARCH TREE

// Time Complexity

// Search, Insertion and Deletion
//  best     O(log n)
//  avg      O(log n)
//  worst    O(n)

// Space Complexity
//         - O(n)

class TreeNode {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

const inorder = (root) => {
  function helperFunc(root, arr) {
    if (root) {
      helperFunc(root.left, arr)
      arr.push(root.data)
      helperFunc(root.right, arr)
    }
    return arr
  }

  const inorderedList = helperFunc(root, [])
  console.log(inorderedList)

  return inorderedList
}

const insertNode = (root, data) => {
  if (!root) {
    return new TreeNode(data)
  }
  if (data < root.data) {
    root.left = insertNode(root.left, data)
  } else {
    root.right = insertNode(root.right, data)
  }

  return root
}

const minValueNode = (node) => {
  let current = node

  while (current.left) {
    current = current.left
  }

  return current
}

const deleteNode = (root, data) => {
  if (!root) {
    return root
  }
  if (data < root.data) {
    root.left = deleteNode(root.left, data)
  } else if (data > root.data) {
    root.right = deleteNode(root.right, data)
  } else {
    // If the node is with only one child or no child
    if (!root.left) {
      return root.right
    } else if (!root.right) {
      return root.left
    } else {
      // If the node has two children,
      // place the inorder successor in position of the node to be deleted
      let temp = minValueNode(root.right)
      root.data = temp.data
      // Delete the inorder successor
      root.right = deleteNode(root.right, temp.data)
    }
  }

  return root
}
