const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  const someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.left = 0;
  someInstance.right = 0;

  return someInstance;
};

const queueMethods = {
  enqueue: function(value) {
    this.storage[this.right] = value;
    this.right++;
  },
  dequeue: function() {
    if (this.size()) {
      let val = this.storage[this.left];
      delete this.storage[this.left];
      this.left++;
      return val;
    }
  },
  size: function() {
    return this.right - this.left;
  }
};


if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;

  // expose prototype object without extending exported constructor
  // enumerable properties
  Object.defineProperty(module.exports, 'queueMethods', {
    writable: true,
    configurable: true,
    enumerable: false,
    value: queueMethods
  });
}
