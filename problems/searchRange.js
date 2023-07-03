// 34. FIND FIRST AND LAST POSITION OF ELEMENT IN SORTED ARRAY
// Given an array of integers nums sorted in non-decreasing order,
// find the starting and ending position of a given target value.
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

// for example =>
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

const searchRange = (nums, target) => {
  if (nums.length == 0) return [-1, -1]
  let n = nums.length
  let l = 0
  let r = n - 1

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2)
    if (nums[mid] < target) l = mid + 1
    else if (nums[mid] > target) r = mid - 1
    else {
      l = r = mid
      while (l - 1 >= 0 && nums[l] == nums[l - 1]) l -= 1
      while (r + 1 < n && nums[r] == nums[r + 1]) r += 1
      break
    }
  }

  if (nums[l] == target) return [l, r]

  return [-1, -1]
}

const nums = [5, 7, 7, 8, 8, 10]
const target = 8
const output = searchRange(nums, target)

console.log(output)

// output

// [3,4]
