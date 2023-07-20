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
    this.size = 0
    this.printAllSteps = printAllSteps
  }

  heapify(i) {
    let largest = i
    let l = 2 * i + 1
    let r = 2 * i + 2

    if (l < this.size && this.heap[i] < this.heap[l]) {
      largest = l
    }
    if (r < this.size && this.heap[largest] < this.heap[r]) {
      largest = r
    }

    if (i !== largest) {
      let temp = this.heap[i]
      this.heap[i] = this.heap[largest]
      this.heap[largest] = temp
      this.heapify(largest)
    }
  }

  add(ele) {
    this.printAllSteps && console.log('adding...', ele)
    if (this.size === 0) {
      console.log('first')
      this.size++
      this.heap.push(ele)
    } else {
      this.size++
      this.heap.push(ele)
      for (let i = parseInt(this.size / 2) - 1; i >= 0; i--) {
        this.heapify(i)
      }
    }
  }

  popMax() {
    if (this.size === 0) {
      this.printAllSteps && console.log('heap is empty.')
      return
    }

    this.printAllSteps && console.log('removing...', this.heap[0])
    let temp = this.heap[0]
    this.heap[0] = this.heap[this.size - 1]
    this.heap[this.size - 1] = temp

    let maxEle = this.heap.pop()
    this.size--

    for (let i = parseInt(this.size / 2) - 1; i >= 0; i--) {
      this.heapify(i)
    }

    return maxEle
  }
  getMax() {
    if (this.size !== 0) {
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
    this.size = 0
    this.printAllSteps = printAllSteps
  }

  heapify(i) {
    let smallest = i
    let l = 2 * i + 1
    let r = 2 * i + 2

    if (l < this.size && this.heap[i] > this.heap[l]) {
      smallest = l
    }
    if (r < this.size && this.heap[smallest] > this.heap[r]) {
      smallest = r
    }

    if (i !== smallest) {
      let temp = this.heap[i]
      this.heap[i] = this.heap[smallest]
      this.heap[smallest] = temp
      this.heapify(smallest)
    }
  }

  add(ele) {
    this.printAllSteps && console.log('adding...', ele)

    if (this.size === 0) {
      this.heap.push(ele)
      this.size++
    } else {
      this.heap.push(ele)
      this.size++
      for (let i = parseInt(this.size / 2) - 1; i >= 0; i--) {
        this.heapify(i)
      }
    }
  }

  popMin() {
    if (this.size === 0) {
      this.printAllSteps && console.log('heap is empty.')
      return
    }

    this.printAllSteps && console.log('removing...', this.heap[0])

    let temp = this.heap[0]
    this.heap[0] = this.heap[this.size - 1]
    this.heap[this.size - 1] = temp

    let minEle = this.heap.pop()
    this.size--

    for (let i = parseInt(this.size / 2) - 1; i >= 0; i--) {
      this.heapify(i)
    }

    return minEle
  }

  getMin() {
    if (this.size !== 0) {
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
