class Stack {
  constructor() {
    this.storage = {};
    this.top = 0;
  }

  push(value) {
    this.storage[this.top] = value;
    this.top++;
  }
  
  pop() {
    if (this.top) {
      --this.top;
      let val = this.storage[this.top];
      delete this.storage[this.top];
      return val;
    }
  }
  
  size() {
    return this.top;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;
}
