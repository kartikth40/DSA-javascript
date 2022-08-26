// BUBBLE SORT

// Time Complexity
// best    - O(nlog n)
// worst   - O(nlog n)
// average - O(nlog n)

// Space Complexity
//         - O(1)

const heapify = (array, n, i) => {
  let largest = i
  let l = 2 * i + 1
  let r = 2 * i + 2

  if (l < n && array[l] > array[i]) {
    largest = l
  }
  if (r < n && array[r] > array[largest]) {
    largest = r
  }

  if (largest !== i) {
    let temp = array[largest]
    array[largest] = array[i]
    array[i] = temp
    heapify(array, n, largest)
  }
}

const heapSort = (array) => {
  let n = array.length

  for (let i = parseInt(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i)
  }

  for (let i = n - 1; i > 0; i--) {
    let temp = array[0]
    array[0] = array[i]
    array[i] = temp

    heapify(array, i, 0)
  }
}

let arr = [3, 7, 2, 5, 8, 6, 1, 4, 0, 9]
console.log(arr)
heapSort(arr)
console.log(arr)

// outputs

// [ 3, 7, 2, 5, 8, 6, 1, 4, 0, 9 ]
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
