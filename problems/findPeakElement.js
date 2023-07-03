// 162. FIND PEAK ELEMENT
// A peak element is an element that is strictly greater than its neighbors.
// Given a 0-indexed integer array nums, find a peak element,
// and return its index. If the array contains multiple peaks,
// return the index to any of the peaks.
// https://leetcode.com/problems/find-peak-element/

// for example =>
// Input: nums = [1,2,1,3,5,6,4]
// Output: 5

const findPeakElement = (nums) => {
  if (nums.length === 1) return 0

  let n = nums.length

  if (nums[0] > nums[1]) return 0
  if (nums[n - 1] > nums[n - 2]) return n - 1

  let start = 1
  let end = n - 2

  while (start <= end) {
    let mid = start + (end - start) //2
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid
    else if (nums[mid] < nums[mid - 1]) end = mid - 1
    else if (nums[mid] < nums[mid + 1]) start = mid + 1
  }

  return -1
}

const nums = [1, 2, 1, 3, 5, 6, 4]
const output = findPeakElement(nums)

console.log(output)

// output

// 5
