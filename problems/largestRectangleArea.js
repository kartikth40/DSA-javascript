// 84. LARGEST RECTANGLE IN HISTOGRAM
// Given an array of integers heights representing the histogram's bar height
// where the width of each bar is 1, return the area of the largest rectangle
// in the histogram.
// https://leetcode.com/problems/largest-rectangle-in-histogram/

// for example =>
// Input: heights = [2,1,5,6,2,3]
// Output: 10

const largestRectangleArea = (heights) => {
  let stack = [] // pair: [index, height]
  let maxArea = 0

  for (let i = 0; i < heights.length; i++) {
    let startIdx = i
    while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
      let [idx, h] = stack.pop()
      let area = h * (i - idx)
      maxArea = Math.max(maxArea, area)
      startIdx = idx
    }
    stack.push([startIdx, heights[i]])
  }

  while (stack.length > 0) {
    let [idx, h] = stack.pop()
    let area = h * (heights.length - idx)
    maxArea = Math.max(maxArea, area)
  }
  return maxArea
}

const heights = [2, 1, 5, 6, 2, 3]
const output = largestRectangleArea(heights)

console.log(output)

// output

// 10
