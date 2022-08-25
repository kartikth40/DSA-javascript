// DIJKSTRA'S SHORTEST PATH

// Time Complexity
//         - O(Elog V)

// Space Complexity
//         - O(V)

// helper class for priority queue
class PriorityQueue {
  constructor() {
    this.heap = []
  }

  heapify(heap, n, i) {
    let smallest = i
    let l = 2 * i + 1
    let r = 2 * i + 2

    if (l < n && heap[i][1] > heap[l][1]) {
      smallest = l
    }
    if (r < n && heap[smallest][1] > heap[r][1]) {
      smallest = r
    }

    if (i !== smallest) {
      let temp = heap[i]
      heap[i] = heap[smallest]
      heap[smallest] = temp
      this.heapify(heap, n, smallest)
    }
  }

  add(item, weight) {
    let size = this.heap.length
    if (size === 0) {
      this.heap.push([item, weight])
    } else {
      this.heap.push([item, weight])
      size++
      for (let i = parseInt(size / 2) - 1; i >= 0; i--) {
        this.heapify(this.heap, size, i)
      }
    }
  }

  remove() {
    let size = this.heap.length
    if (size === 0) {
      return
    }

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
      return this.heap[0]
    } else {
      console.log('heap is empty.')
      return
    }
  }

  isEmpty() {
    return this.heap.length === 0
  }

  print() {
    console.log(`Min Heap -> ${this.heap}`)
  }
}

// helper class for Graph
class Graph {
  constructor() {
    this.graph = new Map()
  }

  getVertices() {
    return [...this.graph.keys()]
  }

  addEdge(v1, v2, w) {
    if (!this.graph.has(v1)) {
      let valueOfV1 = new Map()
      valueOfV1.set(v2, w)
      this.graph.set(v1, valueOfV1)
    } else {
      let valueOfV1 = this.graph.get(v1)
      valueOfV1.set(v2, w)
      this.graph.set(v1, valueOfV1)
    }
    if (!this.graph.has(v2)) {
      let valueOfV2 = new Map()
      valueOfV2.set(v1, w)
      this.graph.set(v2, valueOfV2)
    } else {
      let valueOfV2 = this.graph.get(v2)
      valueOfV2.set(v1, w)
      this.graph.set(v2, valueOfV2)
    }
  }

  removeEdge(v1, v2) {
    if (!this.graph.get(v1).has(v2))
      console.log(`no edge between ${v1} and ${v2} found!`)
    else {
      this.graph.get(v1).delete(v2)
      this.graph.get(v2).delete(v1)
    }
  }

  getNeighbours(v) {
    return this.graph.get(v)
  }

  print() {
    for (let [key, values] of this.graph) {
      let adjacentVertices = []
      for (let v of values) {
        adjacentVertices.push(v)
      }
      console.log(`${key} -> `, adjacentVertices)
    }
  }
}

// dijkstra's code
const dijkstra = (graph, start) => {
  let priorityQueue = new PriorityQueue()
  let ans = new Map()
  let visited = new Map()
  graph.getVertices().forEach((vertex) => {
    ans.set(vertex, Number.POSITIVE_INFINITY) // initialising every vertex's distance as Infinity
    visited.set(vertex, false) // initialising visited list
  })

  ans.set(start, 0)
  priorityQueue.add(start, 0)

  while (!priorityQueue.isEmpty()) {
    const currentVertexObject = priorityQueue.remove() // remove from priority queue the vertex with least distance
    const currentVertex = currentVertexObject[0] // as priority queue consists of vertex-weight pairs

    if (visited.get(currentVertex)) {
      continue // if already visited
    }

    visited.set(currentVertex, true)

    const neighbours = graph.getNeighbours(currentVertex)
    for (let [vertex, weight] of neighbours) {
      if (ans.get(vertex) > ans.get(currentVertex) + weight) {
        // if previous computed distance is larger than current computed distance from the current vertex
        ans.set(vertex, ans.get(currentVertex) + weight) // update the distance
        priorityQueue.add(vertex, ans.get(vertex)) // add this vertex to queue
      }
    }
  }
  // printing the resulting shortest distances
  console.log('Shortest Paths to the vertices are ->')
  console.log()
  for (let [vertex, distance] of ans) {
    console.log(`${vertex} => ${distance}`)
  }
}

const graph = new Graph(5)
graph.addEdge('A', 'B', 4)
graph.addEdge('B', 'C', 2)
graph.addEdge('A', 'C', 4)
graph.addEdge('C', 'D', 3)
graph.addEdge('C', 'E', 1)
graph.addEdge('C', 'F', 6)
graph.addEdge('D', 'F', 2)
graph.addEdge('E', 'F', 3)
console.log('Graph ->')
console.log()
graph.print()
console.log()
dijkstra(graph, 'A')

// outputs

// Graph ->

// A ->  [ [ 'B', 4 ], [ 'C', 4 ] ]
// B ->  [ [ 'A', 4 ], [ 'C', 2 ] ]
// C ->  [ [ 'B', 2 ], [ 'A', 4 ], [ 'D', 3 ], [ 'E', 1 ], [ 'F', 6 ] ]
// D ->  [ [ 'C', 3 ], [ 'F', 2 ] ]
// E ->  [ [ 'C', 1 ], [ 'F', 3 ] ]
// F ->  [ [ 'C', 6 ], [ 'D', 2 ], [ 'E', 3 ] ]

// Shortest Paths to the vertices are ->

// A => 0
// B => 4
// C => 4
// D => 7
// E => 5
// F => 8
