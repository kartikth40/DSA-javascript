// 42. TRAPPING RAIN WATER
// Given n non-negative integers representing an elevation map
// where the width of each bar is 1, compute how much water it can trap after raining.
// ---problem link---

// for example =>
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

const trap = (height) => {
  const heighestToLeft = new Array(height.length).fill(0)
  const heighestToRight = new Array(height.length).fill(0)
  heighestToLeft[0] = heighestToRight[height.length - 1] = 0

  for (let i = 1; i < height.length; i++) {
    heighestToLeft[i] = Math.max(heighestToLeft[i - 1], height[i - 1])
  }
  for (let i = height.length - 2; i >= 0; i--) {
    heighestToRight[i] = Math.max(heighestToRight[i + 1], height[i + 1])
  }
  let trapped = 0
  for (let i = 0; i < height.length; i++) {
    const expectedWaterLevel = Math.min(heighestToLeft[i], heighestToRight[i])
    if (height[i] < expectedWaterLevel) {
      trapped += expectedWaterLevel - height[i]
    }
  }
  return trapped
}

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
const output = trap(height)

console.log(output)

// output

// 6
