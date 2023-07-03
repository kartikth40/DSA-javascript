// 33. SEARCH IN ROTATED ARRAY
// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an
// unknown pivot index. Given the array nums after the possible rotation and
// an integer target, return the index of target if it is in nums,
// or -1 if it is not in nums.
// https://leetcode.com/problems/search-in-rotated-sorted-array/

// for example =>
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

const searchInRotated = (nums, target) => {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] == target) return mid
    else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) right = mid - 1
      else left = mid + 1
    } else if (nums[right] >= nums[mid]) {
      if (nums[mid] < target && target <= nums[right]) left = mid + 1
      else right = mid - 1
    }
  }
  return -1
}

const nums = [4, 5, 6, 7, 0, 1, 2]
const target = 0
const output = searchInRotated(nums, target)

console.log(output)

// output

// 4
