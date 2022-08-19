// COUNTING SORT

// Time Complexity
// best    - O(n + k) - where k is the max element in the array
// worst   - O(n + k)
// average - O(n + k)

// Space Complexity
//         - O(k)



const countingSort = (array) => {

	const size = array.length
	let max = Number.NEGATIVE_INFINITY
	array.forEach(ele => {
		if(max < ele) 
			max = ele
	})
	let count = new Array(max+1).fill(0)
	let output = new Array(size).fill(0)
	for(let i = 0; i < max+1; i++) {
		count[array[i]] += 1
	}

	for(let i = 1; i < max+1; i++) {
		count[i] += count[i-1]
	}
	let i = 0
	while(i < size) {
		output[count[array[i]]-1] = array[i]
		count[array[i]] -=1
		i++
	}

	return output
	
}


let arr = [3,7,5,8,1,2,6,4,0,9]
sortedArray = countingSort(arr)

console.log(sortedArray)