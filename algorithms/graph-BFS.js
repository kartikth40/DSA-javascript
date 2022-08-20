// GRAPH TRAVERSAL BFS

// Time Complexity
//         - O(V + E)

// Space Complexity
//         - O(V)

const graphBFS = (graph, root) => {
  let ans = []
  let visited = new Set()
  visited.add(root)
  ans.push(root)
  let queue = new Queue()
  queue.enqueue(root)

  while (!queue.isEmpty()) {
    let currentVertex = queue.dequeue()
    console.log(`visiting... ${currentVertex}`)

    let neighbours = graph.getAdjacents(currentVertex)
    for (let neighbour of neighbours) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour)
        ans.push(neighbour)
        queue.enqueue(neighbour)
      }
    }
  }
  return ans
}

const graph = new Graph(5)
graph.addEdge(0, 1)
graph.addEdge(0, 2)
graph.addEdge(0, 3)
graph.addEdge(1, 2)
graph.addEdge(2, 4)

graphBFS(graph, 0)

// outputs

// visiting... 0
// visiting... 1
// visiting... 2
// visiting... 3
// visiting... 4
