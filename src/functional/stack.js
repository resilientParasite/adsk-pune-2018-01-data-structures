const Stack = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};
  let top = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[top] = value;
    top++;
  };

  someInstance.pop = function() {
    if (top) {
      --top;
      let val = storage[top];
      delete storage[top];
      return val;
    }
  };

  someInstance.size = function() {
    return top;
  };

  return someInstance;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Stack;
}
