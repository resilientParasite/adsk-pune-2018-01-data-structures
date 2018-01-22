class Queue {
  constructor() {
    this.storage = {};
    this.left = 0;
    this.right = 0;
  }

  enqueue(value) {
    this.storage[this.right] = value;
    this.right++;
  }

  dequeue() {
    if (this.size()) {
      let val = this.storage[this.left];
      delete this.storage[this.left];
      this.left++;
      return val;
    }
  }

  size() {
    return this.right - this.left;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
