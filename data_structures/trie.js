// TRIE

// Time Complexity
// Search, Insertion and Deletion
//         - O(avg_word_length * number_of_words)

// Space Complexity
//         - O(alphabet_size * avg_word_length * number_of_words)

class TrieNode {
  constructor(char) {
    this.children = new Array(26).fill(null)
    this.char = char
    this.isEnd = false
  }

  markAsEnd() {
    this.isEnd = true
  }

  unmarkAsEnd() {
    this.isEnd = false
  }
}

export default class Trie {
  constructor(printAllSteps = false) {
    this.root = new TrieNode('')
    this.printAllSteps = printAllSteps
  }

  getIndex(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0)
  }

  insert(str) {
    if (!str) return

    str = str.toLowerCase()
    let currentNode = this.root
    let index = 0
    this.printAllSteps && console.log('Inserting', str, '...')
    for (let level = 0; level < str.length; level++) {
      index = this.getIndex(str[level])

      if (!currentNode.children[index]) {
        currentNode.children[index] = new TrieNode(str[level])
        this.printAllSteps && console.log('Inserting ', str[level])
      } else {
        this.printAllSteps && console.log('Already inserted', str[level])
      }
      currentNode = currentNode.children[index]
    }
    currentNode.markAsEnd()
    this.printAllSteps && console.log('===================')
  }

  search(str) {
    if (!str) return false

    str = str.toLowerCase()
    let currentNode = this.root
    let index = 0
    this.printAllSteps && console.log('Searching', str, '...')
    for (let level = 0; level < str.length; level++) {
      index = this.getIndex(str[level])

      if (!currentNode.children[index]) {
        this.printAllSteps && console.log("'" + str + "' not found")
        return false
      }
      currentNode = currentNode.children[index]
    }
    if (currentNode && currentNode.isEnd) {
      this.printAllSteps && console.log("'" + str + "' found")
      return true
    }
    this.printAllSteps && console.log("'" + str + "' not found")
    return false
  }
}
