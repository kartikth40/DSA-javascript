// MAX HEAP

// Time Complexity
// get max    - O(1)
// remove max - O(log n)
// add        - O(log n)

// Space Complexity
//         - O(n)

export class MaxHeap {
  constructor(printAllSteps = false) {
    this.heap = []
    this.printAllSteps = printAllSteps
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
    this.printAllSteps && console.log('adding...', ele)

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
      this.printAllSteps && console.log('heap is empty.')
      return
    }

    this.printAllSteps && console.log('removing...', this.heap[0])

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
      this.printAllSteps && console.log('getting max...', this.heap[0])
      return this.heap[0]
    } else {
      this.printAllSteps && console.log('heap is empty.')
      return
    }
  }

  print() {
    console.log(`Max Heap -> ${this.heap}`)
  }
}

// MIN HEAP

// Time Complexity
// get min    - O(1)
// remove min - O(log n)
// add        - O(log n)

// Space Complexity
//         - O(n)

export class MinHeap {
  constructor(printAllSteps = false) {
    this.heap = []
    this.printAllSteps = printAllSteps
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
    this.printAllSteps && console.log('adding...', ele)

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
      this.printAllSteps && console.log('heap is empty.')
      return
    }

    this.printAllSteps && console.log('removing...', this.heap[0])

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
      this.printAllSteps && console.log('getting max...', this.heap[0])
      return this.heap[0]
    } else {
      this.printAllSteps && console.log('heap is empty.')
      return
    }
  }

  print() {
    console.log(`Min Heap -> ${this.heap}`)
  }
}
