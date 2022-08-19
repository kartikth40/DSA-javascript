// STACK

// Time Complexity
// push    - O(1) 
// pop     - O(1)
// peek    - O(1)

// Space Complexity
//         - O(n)

class Stack {
	constructor() {
		this.stack = []
	}

	push(ele) {
		this.stack.push(ele)
	} 

	pop() {
		return this.stack.pop()
	}

	peek() {
		return this.stack[this.stack.length-1]
	}

	isEmpty() {
		return this.stack.length === 0
	}

	size() {
		return this.stack.length
	}

	clear() {
		this.stack = []
	}

	print() {
		console.log(this.stack) 
	}
}


const stack = new Stack()
stack.push(0)
stack.push(2)
stack.push(4)
stack.push(6)

stack.print()
console.log(stack.size())

stack.pop()
stack.print()
console.log(stack.size())
