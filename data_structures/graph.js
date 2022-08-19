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

class Graph_adj_mat {
	constructor(size) {
		this.size = size
		this.graph = []
		for(let i = 0; i < size; i++) {
			let curRow = []
			for(let j = 0; j < size; j++) {
				curRow.push(0)
			}
			this.graph.push(curRow)
		}

	}

	addEdge(v1, v2) {
		console.log(`adding edge between ${v1} and ${v2}...`)
		this.graph[v1][v2] = 1
		this.graph[v2][v1] = 1
	} 

	removeEdge(v1, v2) {
		if(this.graph[v1][v2] === 0) console.log(`no edge between ${v1} and ${v2} found!`)
		else {
		console.log(`removing edge between ${v1} and ${v2}...`)
		this.graph[v1][v2] = 0
		this.graph[v2][v1] = 0
		}
		
	}

	print() {
		for(let i = 0; i < this.size; i++) {
			let curRow = ""
			for(let j = 0; j < this.size; j++) {
				curRow += this.graph[i][j] + " "
			}
			console.log(curRow)
		}

	}
}

console.log("Adjacency Matrix")
console.log()

const graph_mat = new Graph_adj_mat(4)
graph_mat.addEdge(0, 1)
graph_mat.addEdge(0, 2)
graph_mat.addEdge(0, 3)
graph_mat.addEdge(1, 2)
console.log()
graph_mat.print()
console.log()
graph_mat.removeEdge(1, 2)
console.log()
graph_mat.print()


// outputs

// adding edge between 0 and 1...
// adding edge between 0 and 2...
// adding edge between 0 and 3...
// adding edge between 1 and 2...

// 0 1 1 1 
// 1 0 1 0 
// 1 1 0 0 
// 1 0 0 0 

// removing edge between 1 and 2...

// 0 1 1 1 
// 1 0 0 0 
// 1 0 0 0 
// 1 0 0 0 



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

class Graph_adj_list {
	constructor() {
		this.graph = new Map()
	}

	addEdge(v1, v2) {
		console.log(`adding edge between ${v1} and ${v2}...`)
		if(!this.graph.has(v1)) {
			let valueOfV1 = new Set()
			valueOfV1.add(v2)
			this.graph.set(v1, valueOfV1)
		}
		else {
			let valueOfV1 = this.graph.get(v1)
			valueOfV1.add(v2)
			this.graph.set(v1, valueOfV1)
		}
		if(!this.graph.has(v2)) {
			let valueOfV2 = new Set()
			valueOfV2.add(v1)
			this.graph.set(v2, valueOfV2)
		}
		else {
			let valueOfV2 = this.graph.get(v2)
			valueOfV2.add(v1)
			this.graph.set(v2, valueOfV2)
		}
	} 

	removeEdge(v1, v2) {
		if(!this.graph.get(v1).has(v2)) console.log(`no edge between ${v1} and ${v2} found!`)
		else {
		console.log(`removing edge between ${v1} and ${v2}...`)
		this.graph.get(v1).delete(v2)
		this.graph.get(v2).delete(v1)
		}
		
	}

	print() {
		for(let [key, value] of this.graph) {
			console.log(`${key} -> ${[...value]}`)
		}

	}
}

console.log()
console.log("Adjacency List")
console.log()

const graph_list = new Graph_adj_list(4)
graph_list.addEdge(0, 1)
graph_list.addEdge(0, 2)
graph_list.addEdge(0, 3)
graph_list.addEdge(1, 2)
console.log()
graph_list.print()
console.log()
graph_list.removeEdge(1, 2)
console.log()
graph_list.print()


// outputs

// adding edge between 0 and 1...
// adding edge between 0 and 2...
// adding edge between 0 and 3...
// adding edge between 1 and 2...

// 0 -> 1,2,3
// 1 -> 0,2
// 2 -> 0,1
// 3 -> 0

// removing edge between 1 and 2...

// 0 -> 1,2,3
// 1 -> 0
// 2 -> 0
// 3 -> 0

