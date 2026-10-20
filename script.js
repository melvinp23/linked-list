class Node {
	constructor(value = null, next = null) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.headNode = null;
	}

	// 1. Adds a new node containing value to the end of the list
	append(value) {
		const newNode = new Node(value);
		if (!this.headNode) {
			this.headNode = newNode;
			return;
		}

		let current = this.headNode;
		while (current.next) {
			current = current.next;
		}
		current.next = newNode;
	}

	// 2. Adds a new node containing value to the start of the list
	prepend(value) {
		const newNode = new Node(value, this.headNode);
		this.headNode = newNode;
	}

	// 3. Returns the total number of nodes in the list
	size() {
		let count = 0;
		let current = this.headNode;

		while (current) {
			count++;
			current = current.next;
		}

		return count;
	}

	// 4. Returns the value of the first node, or undefined if empty
	head() {
		return this.headNode ? this.headNode.value : undefined;
	}

	// 5. Returns the value of the final node, or undefined if empty
	tail() {
		let current = this.headNode;

		if (!this.headNode) return undefined;

		while (current.next) {
			current = current.next;
		}

		return current.value;
	}

	at(index) {}

	pop() {}

	contains(value) {}

	findIndex(value) {}

	toString() {}
}
