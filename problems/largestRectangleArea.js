// 84. LARGEST RECTANGLE IN HISTOGRAM
// Given an array of integers heights representing the histogram's bar height
// where the width of each bar is 1, return the area of the largest rectangle
// in the histogram.
// https://leetcode.com/problems/largest-rectangle-in-histogram/

// for example =>
// Input: heights = [2,1,5,6,2,3]
// Output: 10

const largestRectangleArea = (heights) => {
  const sorted = [...heights].sort().reverse()
  let ans = 0
  let first = false
  for (let i = 0; i < heights.length; i++) {
    let left = heights.indexOf(sorted[i])
    let right = heights.indexOf(sorted[i])
    let curmax = 0
    while (left >= 0 && right < heights.length) {
      if (
        Math.min(heights[left], heights[left - 1]) * (right - left + 1) >
        curmax
      ) {
        curmax = Math.min(heights[left], heights[left - 1]) * (right - left + 1)
        left--
      } else break
      if (
        Math.min(heights[right], heights[right + 1]) * (right - left + 1) >
        curmax
      ) {
        curmax =
          Math.min(heights[right], heights[right + 1]) * (right - left + 1)
        right++
      } else {
        break
      }

      if (!first) {
        first = true
      }
    }
    ans = Math.max(ans, curmax)
  }
  return ans
}

const heights = [2, 1, 5, 6, 2, 3]
const output = largestRectangleArea(heights)

console.log(output)

// output

// 10
