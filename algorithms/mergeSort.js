// MERGE SORT

// Time Complexity
// best    - O(n*log n)
// worst   - O(n*log n)
// average - O(n*log n)

// Space Complexity
//         - O(n)

function mergeSort(nums) {
    if (nums.length === 0) return []
    return mergeSortRecursive(0, nums.length - 1, nums)
}

function mergeSortRecursive(start, end, nums) {
    if (start === end) return [nums[start]]

    const mid = Math.floor((start + end) / 2)
    const leftSorted = mergeSortRecursive(start, mid, nums)
    const rightSorted = mergeSortRecursive(mid + 1, end, nums)

    return mergeArrays(leftSorted, rightSorted)
}

function mergeArrays(left, right) {
    const merged = []
    let i = 0, j = 0

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            merged.push(left[i++])
        } else {
            merged.push(right[j++])
        }
    }

    while (i < left.length) merged.push(left[i++])
    while (j < right.length) merged.push(right[j++])

    return merged
}

let arr = [3, 7, 5, 8, 1, 2, 6, 4, 0, 9]
console.log(arr)

mergeSort(arr)

console.log(arr)

// outputs

// [ 3, 7, 5, 8, 1, 2, 6, 4, 0, 9 ]
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
