const Queue = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};
  let left = 0;
  let right = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[right] = value;
    right++;
  };

  someInstance.dequeue = function() {
    if (someInstance.size()) {
      let val = storage[left];
      delete storage[left];
      left++;
      return val;
    }
  };

  someInstance.size = function() {
    //return Object.keys(storage).length;
    return right - left;
  };

  return someInstance;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
