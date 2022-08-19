// QUICK SORT

// Time Complexity
// best    - O(n*log n)
// worst   - O(n^2)
// average - O(n*log n)

// Space Complexity
//         - O(log n)

const partition = (array, low, high) => {
	pivot = arr[high]
	i = low

	for(let j = low; j < high; j++) {
		if(array[j] <= pivot) {
			temp = array[i]
			array[i] = array[j]
			array[j] = temp
			i++
		}
	}
	temp = array[i]
	array[i] = array[high]
	array[high] = temp

	return i
}

const quickSort = (array, low, high) => {
	
	if(low < high) {
		let pi = partition(array, low, high)
		quickSort(array, low, pi-1)
		quickSort(array, pi+1, high)
	}
}


let arr = [3,7,5,8,1,4,0,9]
quickSort(arr, 0, arr.length-1)

console.log(arr)