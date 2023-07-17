// 79. WORD SEARCH
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// https://leetcode.com/problems/word-search/

// for example =>
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

const exist = (board, word) => {
  if (!board) return false
  let m = board.length
  let n = board[0].length

  function dfs(row, col, idx) {
    if (
      row < 0 ||
      col < 0 ||
      row >= m ||
      col >= n ||
      board[row][col] !== word[idx]
    )
      return false
    if (idx === word.length - 1) return true

    const dir = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ]
    let found = false

    board[row][col] = '*'
    for (let [r, c] of dir) {
      found ||= dfs(row + r, col + c, idx + 1)
    }
    board[row][col] = word[idx]
    return found
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(i, j, 0)) return true
    }
  }

  return false
}

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
]
const word = 'ABCCED'
const output = exist(board, word)

console.log(output)

// output

// true
