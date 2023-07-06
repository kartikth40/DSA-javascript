// 4. MEDIAN OF TWO SORTED ARRAYS
// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.
// https://leetcode.com/problems/median-of-two-sorted-arrays/

// for example =>
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50

const findMedianSortedArrays = (nums1, nums2) => {
  if (nums1.length < nums2.length) return findMedianSortedArrays(nums2, nums1)

  const n = nums1.length
  const m = nums2.length
  const half = (n + m) >> 1

  let left = 0
  let right = m - 1
  while (true) {
    const mid = (right + left) >> 1
    const partIdx2 = mid
    const partIdx1 = half - partIdx2 - 2

    const left1 = partIdx1 >= 0 ? nums1[partIdx1] : Number.NEGATIVE_INFINITY
    const right1 =
      partIdx1 + 1 < n ? nums1[partIdx1 + 1] : Number.POSITIVE_INFINITY
    const left2 = partIdx2 >= 0 ? nums2[partIdx2] : Number.NEGATIVE_INFINITY
    const right2 =
      partIdx2 + 1 < m ? nums2[partIdx2 + 1] : Number.POSITIVE_INFINITY

    if (left1 <= right2 && left2 <= right1) {
      if ((n + m) % 2 === 0) {
        let first = Math.max(left1, left2)
        let second = Math.min(right1, right2)
        return (first + second) / 2
      } else {
        return Math.min(right1, right2)
      }
    }
    if (left1 > right2) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
}

const nums1 = [1, 2]
const nums2 = [3, 4]
const output = findMedianSortedArrays(nums1, nums2)

console.log(output)

// output

// 2.50
