// GRAPH
// Adjacency Matrix

// Time Complexity
// add               - O(1)
// remove            - O(1)
// check adjacent
// to a node         - O(1)
// get all adjacent
// nodes to a node   - O(V)

// Space Complexity
//                   - O(V^2)

export class Graph_adj_mat {
  constructor(size, printAllSteps = false) {
    this.size = size
    this.graph = []
    this.printAllSteps = printAllSteps
    for (let i = 0; i < size; i++) {
      let curRow = []
      for (let j = 0; j < size; j++) {
        curRow.push(0)
      }
      this.graph.push(curRow)
    }
  }

  getAdjacents(vertex) {
    return this.graph[vertex]
      .map((edge, index) => (edge ? index : -1))
      .filter((val) => val >= 0)
  }

  addEdge(v1, v2) {
    this.printAllSteps && console.log(`adding edge between ${v1} and ${v2}...`)
    this.graph[v1][v2] = 1
    this.graph[v2][v1] = 1
  }

  removeEdge(v1, v2) {
    if (this.graph[v1][v2] === 0)
      this.printAllSteps &&
        console.log(`no edge between ${v1} and ${v2} found!`)
    else {
      this.printAllSteps &&
        console.log(`removing edge between ${v1} and ${v2}...`)
      this.graph[v1][v2] = 0
      this.graph[v2][v1] = 0
    }
  }

  print() {
    for (let i = 0; i < this.size; i++) {
      let curRow = ''
      for (let j = 0; j < this.size; j++) {
        curRow += this.graph[i][j] + ' '
      }
      console.log(curRow)
    }
  }
}

// Adjacency List

// Time Complexity
// add               - O(1)
// remove            - O(1)
// check adjacent
// to a node         - O(1)
// get all adjacent
// nodes to a node   - O(1)

// Space Complexity
//                   - O(V+E)

export class Graph_adj_list {
  constructor(printAllSteps = false) {
    this.graph = new Map()
    this.printAllSteps = printAllSteps
  }

  getAdjacents(vertex) {
    return Array.from(this.graph.get(vertex))
  }

  addEdge(v1, v2) {
    this.printAllSteps && console.log(`adding edge between ${v1} and ${v2}...`)
    if (!this.graph.has(v1)) {
      let valueOfV1 = new Set()
      valueOfV1.add(v2)
      this.graph.set(v1, valueOfV1)
    } else {
      let valueOfV1 = this.graph.get(v1)
      valueOfV1.add(v2)
      this.graph.set(v1, valueOfV1)
    }
    if (!this.graph.has(v2)) {
      let valueOfV2 = new Set()
      valueOfV2.add(v1)
      this.graph.set(v2, valueOfV2)
    } else {
      let valueOfV2 = this.graph.get(v2)
      valueOfV2.add(v1)
      this.graph.set(v2, valueOfV2)
    }
  }

  removeEdge(v1, v2) {
    if (!this.graph.get(v1).has(v2))
      this.printAllSteps &&
        console.log(`no edge between ${v1} and ${v2} found!`)
    else {
      this.printAllSteps &&
        console.log(`removing edge between ${v1} and ${v2}...`)
      this.graph.get(v1).delete(v2)
      this.graph.get(v2).delete(v1)
    }
  }

  print() {
    for (let [key, value] of this.graph) {
      console.log(`${key} -> ${[...value]}`)
    }
  }
}
