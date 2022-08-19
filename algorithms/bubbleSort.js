// BUBBLE SORT

// Time Complexity
// best    - O(n) - when already sorted
// worst   - O(n^2)
// average - O(n^2)

// Space Complexity
//         - O(1)

const bubbleSort = (array) => {
	const l = array.length
	
	for(let i = 0; i < l; i++) {
		for(let j = 0; j < l-i-1; j++) {
			if(array[j] > array[j+1]) {
				temp = array[j]
				array[j] = array[j+1]
				array[j+1] = temp
			}
		}
	}
	return array
}


let arr = [3,7,2,5,8,6,1,4,0,9]
console.log(arr)
let sortedArr = bubbleSort(arr)

console.log(sortedArr)


// outputs

// [ 3, 7, 2, 5, 8, 6, 1, 4, 0, 9 ]
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]