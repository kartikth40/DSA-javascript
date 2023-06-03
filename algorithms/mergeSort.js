// MERGE SORT

// Time Complexity
// best    - O(n*log n)
// worst   - O(n*log n)
// average - O(n*log n)

// Space Complexity
//         - O(n)

const mergeSort = (array) => {
  if (array.length > 1) {
    let mid = Math.floor(array.length / 2)

    let leftHalf = array.slice(0, mid)
    let rightHalf = array.slice(mid, array.length)

    mergeSort(leftHalf)
    mergeSort(rightHalf)

    let i = 0
    let j = 0
    let k = 0

    while (i < leftHalf.length && j < rightHalf.length) {
      if (leftHalf[i] < rightHalf[j]) {
        array[k] = leftHalf[i]
        i++
      } else {
        array[k] = rightHalf[j]
        j++
      }
      k++
    }

    while (i < leftHalf.length) {
      array[k] = leftHalf[i]
      i++
      k++
    }
    while (j < rightHalf.length) {
      array[k] = rightHalf[j]
      j++
      k++
    }
  }
}

let arr = [3, 7, 5, 8, 1, 2, 6, 4, 0, 9]
console.log(arr)

mergeSort(arr)

console.log(arr)

// outputs

// [ 3, 7, 5, 8, 1, 2, 6, 4, 0, 9 ]
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
