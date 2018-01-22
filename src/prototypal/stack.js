const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  const someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.top = 0;

  return someInstance;
};

const stackMethods = {
  push: function(value) {
    this.storage[this.top] = value;
    this.top++;
  },
  pop: function() {
    if (this.top) {
      --this.top;
      let val = this.storage[this.top];
      delete this.storage[this.top];
      return val;
    }
  },
  size: function() {
    return this.top;
  }
};



if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;

  // expose prototype object without extending exported constructor
  // enumerable properties
  Object.defineProperty(module.exports, 'stackMethods', {
    writable: true,
    configurable: true,
    enumerable: false,
    value: stackMethods
  });
}
