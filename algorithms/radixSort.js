// RADIX SORT

// Time Complexity
// best    - O(n + k) - where k is the max element in the array
// worst   - O(n + k)
// average - O(n + k)

// Space Complexity
//         - O(k)

const countingSort = (array, place) => {
  const size = array.length
  const max = 9
  let count = new Array(max + 1).fill(0)
  let output = new Array(size).fill(0)
  for (let i = 0; i < size; i++) {
    let index = parseInt(array[i] / place) % 10
    count[index] += 1
  }

  for (let i = 1; i < max + 1; i++) {
    count[i] += count[i - 1]
  }
  let i = 0
  while (i < size) {
    let index = parseInt(array[i] / place) % 10
    output[count[index] - 1] = array[i]
    count[array[i]] -= 1
    i++
  }

  output.forEach((ele, i) => {
    array[i] = output[i]
  })
}

const radixSort = (array) => {
  const max = Math.max(...array)
  let place = 1
  while (parseInt(max / place) > 0) {
    countingSort(array, place)
    place *= 10
  }
}

let arr = [3, 7, 5, 8, 1, 2, 6, 4, 0, 9]
console.log(arr)
radixSort(arr)

console.log(arr)

// outputs

// [ 3, 7, 5, 8, 1, 2, 6, 4, 0, 9 ]
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
