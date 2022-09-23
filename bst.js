// binary search tree

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(val) {
    // check to see if val is in the bst. Returns true if it is, false if it isn't

    let current = this.root;
    // check if val is the root
    if (this.root === null) return false;

    while (current) {
      if (val < current.val) { // less than
        current = current.left;
      } else if (val > current.val) { // greater than
        current = current.right;
      } else {
        return true; // val equals so it's true. It's a match
      }
    }

    return false;
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(14);
tree.insert(8);
tree.insert(15);
tree.insert(11);
