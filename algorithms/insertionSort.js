// INSERTION SORT

// Time Complexity
// best    - O(n) - when already sorted
// worst   - O(n^2)
// average - O(n^2)

// Space Complexity
//         - O(1)

const insertionSort = (array) => {
	const l = array.length
	
	for(let i = 0; i < l; i++) {
		let current = array[i]
		let j = i-1
		while(array[j] > current && j >= 0) {
			array[j+1] = array[j]
			j--
		}
		array[j+1] = current
	}
	return array
}


let arr = [3,7,5,8,1,4,0,9]
console.log(arr)
let sortedArr = insertionSort(arr)

console.log(sortedArr)


// outputs

// [ 3, 7, 5, 8, 1, 2, 6, 4, 0, 9 ]
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]