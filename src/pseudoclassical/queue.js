const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.left = 0;
  this.right = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.right] = value;
  this.right++;
};

Queue.prototype.dequeue = function() {
  if (this.size()) {
    let val = this.storage[this.left];
    delete this.storage[this.left];
    this.left++;
    return val;
  }
};

Queue.prototype.size = function() {
  return this.right - this.left;
};



if (typeof module !== 'undefined' && module.exports) {
  module.exports = Queue;
}
