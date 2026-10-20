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

	// 6. Returns the value of the node at the given index, or undefined
	at(index) {
		let current = this.headNode;
		let count = 0;

		while (current) {
			if (count === index) return current.value;
			count++;
			current = current.next;
		}

		return undefined;
	}

	// 7. Removes the head node from the list and return its value, or undefined
	pop() {
		if (!this.headNode) return undefined;

		const value = this.headNode.value;
		this.headNode = this.headNode.next;

		return value;
	}

	// 8. Returns 'true' if the passed-in value is in the list, otherwise returns 'false'
	contains(value) {
		let current = this.headNode;

		while (current) {
			if (current.value === value) return true;
			current = current.next;
		}

		return false;
	}

	// 9. Returns the index of the node containing the value, or -1
	findIndex(value) {
		let current = this.headNode;
		let index = 0;

		while (current) {
			if (current.value === value) return index;
			index++;
			current = current.next;
		}

		return -1;
	}

	toString() {}
}
