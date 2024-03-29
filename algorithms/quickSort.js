// QUICK SORT

// Time Complexity
// best    - O(n*log n)
// worst   - O(n^2)
// average - O(n*log n)

// Space Complexity
//         - O(log n)

const partition = (array, low, high) => {
  let pivot = arr[high]
  let i = low

  for (let j = low; j < high; j++) {
    if (array[j] <= pivot) {
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
      i++
    }
  }
  let temp = array[i]
  array[i] = array[high]
  array[high] = temp

  return i
}

const quickSort = (array, low, high) => {
  if (low < high) {
    let pi = partition(array, low, high)
    quickSort(array, low, pi - 1)
    quickSort(array, pi + 1, high)
  }
}

let arr = [3, 7, 5, 8, 1, 2, 6, 4, 0, 9]
console.log(arr)
quickSort(arr, 0, arr.length - 1)

console.log(arr)

// outputs

// [ 3, 7, 5, 8, 1, 2, 6, 4, 0, 9 ]
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
