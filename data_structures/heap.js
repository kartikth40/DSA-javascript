// MAX HEAP

// Time Complexity
// get max    - O(1)
// remove max - O(log n)
// add        - O(log n)

// Space Complexity
//         - O(n)

class MaxHeap {
  constructor() {
    this.heap = []
  }

  heapify(heap, n, i) {
    let largest = i
    let l = 2 * i + 1
    let r = 2 * i + 2

    if (l < n && heap[i] < heap[l]) {
      largest = l
    }
    if (r < n && heap[largest] < heap[r]) {
      largest = r
    }

    if (i !== largest) {
      let temp = heap[i]
      heap[i] = heap[largest]
      heap[largest] = temp
      this.heapify(heap, n, largest)
    }
  }

  add(ele) {
    console.log('adding...', ele)

    let size = this.heap.length
    if (size === 0) {
      this.heap.push(ele)
    } else {
      this.heap.push(ele)
      size++
      for (let i = parseInt(size / 2) - 1; i >= 0; i--) {
        this.heapify(this.heap, size, i)
      }
    }
  }

  popMax() {
    let size = this.heap.length
    if (size === 0) {
      console.log('heap is empty.')
      return
    }

    console.log('removing...', this.heap[0])

    let temp = this.heap[0]
    this.heap[0] = this.heap[size - 1]
    this.heap[size - 1] = temp

    let maxEle = this.heap.pop()
    size--

    for (let i = parseInt(size / 2) - 1; i >= 0; i--) {
      this.heapify(this.heap, size, i)
    }

    return maxEle
  }

  getMax() {
    let size = this.heap.length
    if (size !== 0) {
      console.log('getting max...', this.heap[0])
      return this.heap[0]
    } else {
      console.log('heap is empty.')
      return
    }
  }

  print() {
    console.log(`Max Heap -> ${this.heap}`)
  }
}

console.log('MAX HEAP')
console.log()

const maxHeap = new MaxHeap()
maxHeap.add(3)
maxHeap.add(4)
maxHeap.add(9)
maxHeap.add(5)
maxHeap.add(2)
maxHeap.add(1)
maxHeap.add(7)

maxHeap.print()

maxHeap.popMax()

maxHeap.print()

// outputs

// adding... 3
// adding... 4
// adding... 9
// adding... 5
// adding... 2
// adding... 1
// adding... 7
// Heap -> 9,5,7,3,2,1,4
// removing... 9
// Heap -> 7,5,4,3,2,1

// MIN HEAP

// Time Complexity
// get min    - O(1)
// remove min - O(log n)
// add        - O(log n)

// Space Complexity
//         - O(n)

class MinHeap {
  constructor() {
    this.heap = []
  }

  heapify(heap, n, i) {
    let smallest = i
    let l = 2 * i + 1
    let r = 2 * i + 2

    if (l < n && heap[i] > heap[l]) {
      smallest = l
    }
    if (r < n && heap[smallest] > heap[r]) {
      smallest = r
    }

    if (i !== smallest) {
      let temp = heap[i]
      heap[i] = heap[smallest]
      heap[smallest] = temp
      this.heapify(heap, n, smallest)
    }
  }

  add(ele) {
    console.log('adding...', ele)

    let size = this.heap.length
    if (size === 0) {
      this.heap.push(ele)
    } else {
      this.heap.push(ele)
      size++
      for (let i = parseInt(size / 2) - 1; i >= 0; i--) {
        this.heapify(this.heap, size, i)
      }
    }
  }

  popMin() {
    let size = this.heap.length
    if (size === 0) {
      console.log('heap is empty.')
      return
    }

    console.log('removing...', this.heap[0])

    let temp = this.heap[0]
    this.heap[0] = this.heap[size - 1]
    this.heap[size - 1] = temp

    let minEle = this.heap.pop()
    size--

    for (let i = parseInt(size / 2) - 1; i >= 0; i--) {
      this.heapify(this.heap, size, i)
    }

    return minEle
  }

  getMin() {
    let size = this.heap.length
    if (size !== 0) {
      console.log('getting max...', this.heap[0])
      return this.heap[0]
    } else {
      console.log('heap is empty.')
      return
    }
  }

  print() {
    console.log(`Min Heap -> ${this.heap}`)
  }
}

console.log()
console.log('MIN HEAP')
console.log()

const minHeap = new MinHeap()
minHeap.add(3)
minHeap.add(4)
minHeap.add(9)
minHeap.add(5)
minHeap.add(2)
minHeap.add(1)
minHeap.add(7)

minHeap.print()

minHeap.popMin()

minHeap.print()

// outputs

// adding... 3
// adding... 4
// adding... 9
// adding... 5
// adding... 2
// adding... 1
// adding... 7
// Min Heap -> 1,3,2,5,4,9,7
// removing... 1
// Min Heap -> 2,3,7,5,4,9
