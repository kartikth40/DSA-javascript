// 239. SLIDING WINDOW MAXIMUM
// You are given an array of integers nums, there is a sliding window of size k
// which is moving from the very left of the array to the very right.
// You can only see the k numbers in the window. Each time the sliding window moves right by one position.
// Return the max sliding window.
// https://leetcode.com/problems/sliding-window-maximum/

// for example =>
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]

const maxSlidingWindow = (nums, k) => {
  let queue = [],
    ans = []
  for (let i = 0; i < nums.length; i++) {
    // only let queue to be decreasing
    while (queue && nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop()
    }
    queue.push(i)
    // if first element of queue is out of bounds
    if (queue[0] === i - k) queue.shift()
    // new element in window
    if (i >= k - 1) ans.push(nums[queue[0]])
  }
  return ans
}

const nums = [1, 3, -1, -3, 5, 3, 6, 7]
const k = 3
const output = maxSlidingWindow(nums, k)

console.log(output)

// output

// [3,3,5,5,6,7]
