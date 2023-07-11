// 378. KTH SMALLEST ELEMENT IN A SORTED MATRIX
// Given an n x n matrix where each of the rows and columns is sorted in
// ascending order, return the kth smallest element in the matrix.
// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/

// for example =>
// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13

const kthSmallest = (matrix, k) => {
  let n = matrix.length
  let left = matrix[0][0],
    right = matrix[n - 1][n - 1]

  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    let count = countLessOrEqual(matrix, mid)
    if (count < k) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}

function countLessOrEqual(matrix, mid) {
  let row = 0
  let col = matrix.length - 1
  let count = 0

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] <= mid) {
      count += col + 1
      row++
    } else {
      col--
    }
  }
  return count
}

const matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15],
]
const k = 8
const output = kthSmallest(matrix, k)

console.log(output)

// output

// 13
