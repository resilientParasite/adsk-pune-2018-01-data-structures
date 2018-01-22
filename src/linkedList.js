const LinkedList = function() {
  const list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    const nodeToAdd = Node(value);

    if (list.tail !== null) {
      list.tail.next = nodeToAdd;
    }

    if (list.head === null) {
      list.head = nodeToAdd;
    }
    
    list.tail = nodeToAdd;
  };

  list.removeHead = function() {
    if (list.head !== null) {
      const val = list.head.value;
      list.head = list.head.next;
      return val;
    }
  };

  list.contains = function(target) {
    let currNode = list.head;

    while(currNode !== null) {
      if (currNode.value === target) {
        return true;
      }
      currNode = currNode.next;
    }

    return false;
  };

  return list;
};

const Node = function(value) {
  const node = {};

  node.value = value;
  node.next = null;

  return node;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LinkedList;
}
