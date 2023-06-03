// GRAPH TRAVERSAL DFS

// Time Complexity
//         - O(V + E)

// Space Complexity
//         - O(V)

import { Graph_adj_list } from '../data_structures/graph.js'

const graphDFS = (graph, root) => {
  let ans = []
  let visited = new Set()

  function dfs(graph, start, ans, visited) {
    visited.add(start)
    ans.push(start)
    console.log(`visiting... ${start}`)

    let neighbours = graph.getAdjacents(start)
    for (let neighbour of neighbours) {
      if (!visited.has(neighbour)) {
        dfs(graph, neighbour, ans, visited)
      }
    }
  }

  dfs(graph, root, ans, visited)

  return ans
}

const graph = new Graph_adj_list()
graph.addEdge(0, 1)
graph.addEdge(0, 2)
graph.addEdge(0, 3)
graph.addEdge(1, 2)
graph.addEdge(2, 4)

graphDFS(graph, 0)

// outputs

// visiting... 0
// visiting... 1
// visiting... 2
// visiting... 4
// visiting... 3
