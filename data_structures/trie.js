// TRIE

// Time Complexity
// push    - O(a*n) where a is the avg length of each word and n is the no. of words to operate

// Space Complexity
//         - O(s*a*n) where s is the alphabet size

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

class Trie {
  constructor() {
    this.root = new TrieNode('')
  }

  getIndex(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0)
  }

  insert(str) {
    if (!str) return

    str = str.toLowerCase()
    let currentNode = this.root
    let index = 0
    console.log('Inserting', str, '...')
    for (let level = 0; level < str.length; level++) {
      index = this.getIndex(str[level])

      if (!currentNode.children[index]) {
        currentNode.children[index] = new TrieNode(str[level])
        console.log('Inserting ', str[level])
      } else {
        console.log('Already inserted', str[level])
      }
      currentNode = currentNode.children[index]
    }
    currentNode.markAsEnd()
    console.log('===================')
  }

  search(str) {
    if (!str) return false

    str = str.toLowerCase()
    let currentNode = this.root
    let index = 0
    console.log('Searching', str, '...')
    for (let level = 0; level < str.length; level++) {
      index = this.getIndex(str[level])

      if (!currentNode.children[index]) {
        console.log("'" + str + "' not found")
        return false
      }
      currentNode = currentNode.children[index]
    }
    if (currentNode && currentNode.isEnd) {
      console.log("'" + str + "' found")
      return true
    }
    console.log("'" + str + "' not found")
    return false
  }
}

const listOfStrings = ['apple', 'apps', 'apxl', 'bac', 'bat']

const t = new Trie()

console.log('Strings to insert => ', listOfStrings)
console.log()
for (let i = 0; i < listOfStrings.length; i++) {
  t.insert(listOfStrings[i])
}

t.search('aple')
t.search('apple')

// outputs

// Strings to insert =>  [ 'apple', 'apps', 'apxl', 'bac', 'bat' ]

// Inserting apple ...
// Inserting  a
// Inserting  p
// Inserting  p
// Inserting  l
// Inserting  e
// ===================
// Inserting apps ...
// Already inserted a
// Already inserted p
// Already inserted p
// Inserting  s
// ===================
// Inserting apxl ...
// Already inserted a
// Already inserted p
// Inserting  x
// Inserting  l
// ===================
// Inserting bac ...
// Inserting  b
// Inserting  a
// Inserting  c
// ===================
// Inserting bat ...
// Already inserted b
// Already inserted a
// Inserting  t
// ===================
// Searching aple ...
// 'aple' not found
// Searching apple ...
// 'apple' found
