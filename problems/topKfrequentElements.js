// TOP K FREQUENT ELEMENTS
// Given an integer array nums and an integer k,
// return the k most frequent elements. You may
// return the answer in any order.

// for example =>
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

const topKFrequent = (nums, k) => {
  let ans = []
  let freqMap = new Map()
  let bucket = []

  for (let i = 0; i < nums.length; i++) {
    freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1)
  }

  for ([num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num)
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) ans.push(...bucket[i])
    if (ans.length >= k) break
  }

  return ans
}

let nums = [1, 1, 1, 2, 2, 3]
let k = 2
console.log(topKFrequent(nums, k))

// output

// [1,2]
