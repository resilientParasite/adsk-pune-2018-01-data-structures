const _ = require('underscore');

const Tree = function(value) {
  const newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

const treeMethods = {};

treeMethods.addChild = function(value) {
  const childTree = Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  for (let index = 0; index < this.children.length; index++) {
    const child = this.children[index];
    if (child.contains(target)) {
      return true;
    }
  }

  /*this.children.forEach(child => {
    if (child.contains(target)) {
      return true;
    }
  });*/
  
  return false;
};



if (typeof module !== 'undefined' && module.exports) {
  module.exports = Tree;
}
