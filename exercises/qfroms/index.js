// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.queueOne = new Stack();
    this.queueTwo = new Stack();
  }

  add(n) {
    this.queueOne.push(n);
  }

  remove() {
    while (this.queueOne.peek()) {
      this.queueTwo.push(this.queueOne.pop());
    }

    const removedRecord = this.queueTwo.pop();

    while (this.queueTwo.peek()) {
      this.queueOne.push(this.queueTwo.pop());
    }

    return removedRecord;
  }

  peek() {
    while (this.queueOne.peek()) {
      this.queueTwo.push(this.queueOne.pop());
    }

    const peekedRecord = this.queueTwo.peek();

    while (this.queueTwo.peek()) {
      this.queueOne.push(this.queueTwo.pop());
    }

    return peekedRecord;
  }
}

module.exports = Queue;
