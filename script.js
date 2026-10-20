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

	prepend(value) {}

	size() {}

	head() {}

	tail() {}

	at(index) {}

	pop() {}

	contains(value) {}

	findIndex(value) {}

	toString() {}
}
