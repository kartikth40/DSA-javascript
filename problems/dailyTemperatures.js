// 739. DAILY TEMPERATURES
// Given an array of integers temperatures represents the daily temperatures,
// return an array answer such that answer[i] is the number of days you have to wait
// after the ith day to get a warmer temperature. If there is no future day for which
// this is possible, keep answer[i] == 0 instead.
// https://leetcode.com/problems/daily-temperatures/

// for example =>
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

const dailyTemperatures = (temperatures) => {
  const output = new Array(temperatures.length).fill(0)
  const stack = []

  for (let [i, t] of temperatures.entries()) {
    while (stack && t > temperatures[stack[stack.length - 1]]) {
      output[stack[stack.length - 1]] = i - stack[stack.length - 1]
      stack.pop()
    }
    stack.push(i)
  }
  return output
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
const output = dailyTemperatures(temperatures)

console.log(output)

// output

// [1,1,4,2,1,1,0,0]
