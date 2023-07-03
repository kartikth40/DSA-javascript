// 11. CONTAINER WITH MOST WATER
// You are given an integer array height of length n.
// There are n vertical lines drawn such that the two endpoints of
// the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container,
// such that the container contains the most water.
// Return the maximum amount of water a container can store.
// https://leetcode.com/problems/container-with-most-water/

// for example =>
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

const maxArea = (height) => {
  let ans = 0
  let left = 0
  let right = height.length - 1
  while (left < height.length && right >= 0) {
    let w = right - left
    let h = Math.min(height[left], height[right])
    let a = w * h
    ans = Math.max(ans, a)
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return ans
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
const output = maxArea(height)

console.log(output)

// output

// 49
