// SELECTION SORT

// Time Complexity
// best    - O(n^2) 
// worst   - O(n^2)
// average - O(n^2)

// Space Complexity
//         - O(1)

const selectionSort = (array) => {
	const l = array.length
	
	for(let i = 0; i < l; i++) {
		let minIdx = i
		for(let j = i+1; j < l; j++) {
			if(array[j] < array[minIdx]) {
				minIdx = j
			}
		}
		[array[minIdx], array[i]] = [array[i], array[minIdx]]
	}
	return array
}


let arr = [3,7,5,8,1,4,0,9]
console.log(arr)
let sortedArr = selectionSort(arr)
console.log(sortedArr)


// outputs

// [ 3, 7, 5, 8, 1, 4, 0, 9 ]
// [ 0, 1, 3, 4, 5, 7, 8, 9 ]
