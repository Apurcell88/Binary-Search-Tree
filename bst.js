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

  breadthSearch() {
    // performs a breadth first search
    //               10
    //         5            13
    //      2    7      11     16

    // queue: []
    // visited: [10, 5, 13]
    const queue = [];
    const data = [];
    let node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  depthSearchPreOrder() {
    const data = [];

    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return data;
  }

  depthSearchPostOrder() {
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }

    traverse(this.root);
    return data;
  }

  depthSearchInOrder() {
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.breadthSearch());
