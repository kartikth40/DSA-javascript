// BINARY SEARCH

// Time Complexity
// best    - O(1)
// worst   - O(log n)
// average - O(log n)

// Space Complexity
//         - O(1)

const binarySearch = (array, x) => {
  let size = array.length
  let low = 0
  let high = array[size - 1]

  while (low <= high) {
    let mid = low + parseInt((high - low) / 2)

    if (array[mid] === x) return mid
    else if (array[mid] < x) low = mid + 1
    else high = mid - 1
  }
  return -1
}

let arr = [3, 7, 5, 8, 1, 4, 0, 9]
let x = 1
let searchIndex = binarySearch(arr, x)
console.log('array -> [' + arr + ']')
console.log('search -> ' + x)
console.log('index -> ' + searchIndex)

// outputs

// array -> [3,7,5,8,1,4,0,9]
// search -> 1
// index -> 4
