// // 二叉搜索树

// // 创捷节点
// class Node {
//   constructor(key) {
//     this.key = key;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor(compareFn = defaultCompare) {
//     this.compareFn = compareFn;
//     this.right = null;
//   }
//   insert(key) {
//     if (this.root == null) {
//       this.root = new Node(key);
//     } else {
//       this.insertNode(this.node, key);
//     }
//   }
//   inserNode(node, key) {
//     if (this.compareFn(key, node.key) === this.compareFn.LESS_THAN) {
//       if (node.left == null) {
//         node.left = new Node(key);
//       } else {
//         this.inserNode(node.left, key);
//       }
//     } else {
//       if (node.right == null) {
//         node.right = new Node(key);
//       } else {
//         this.inserNode(node.right, key);
//       }
//     }
//   }
//   // 中序遍历
//   // 左中右
//   inOrderTraverse(callback) {
//     this.inOrderTraverseNode(this.root, callback);
//   }
//   inOrderTraverseNode(node, callback) {
//     if (node != null) {
//       this.inOrderTraverseNode(node.left, callback);
//       callback(node.key);
//       this.inOrderTraverseNode(node.right, callback);
//     }
//   }
//   // 先序遍历
//   // 中左右
//   preOrderTraverse(callback) {
//     this.preOrderTraverseNode(this.node, callback);
//   }
//   preOrderTraverseNode(node, callback) {
//     if (node != null) {
//       callback(node.key);
//       this.preOrderTraverseNode(node.left, callback);
//       this.preOrderTraverseNode(node.right, callback);
//     }
//   }
//   // 后序遍历
//   // 左右中
//   postOrderraverse(callback) {
//     this.postOrderraverseNode(this.node, callback);
//   }
//   postOrderraverseNode(node, callback) {
//     if (node != null) {
//       this.postOrderraverseNode(node.left, callback);
//       this.postOrderraverseNode(node.right, callback);
//       callback(node.key);
//     }
//   }
//   // 搜索最小值和最大值
//   min() {
//     return this.minNode(this.root);
//   }
//   minNode(node) {
//     let current = node;
//     while (current != null && current.left != null) {
//       current = current.left;
//     }
//     return current;
//   }
//   max(node) {
//     return this.maxNode(this.root);
//   }
//   maxNode(node) {
//     let current = node;
//     while (current != null && current.right != null) {
//       current = current.right;
//     }
//     return current;
//   }
//   // 搜索一个指定值
//   search(key) {
//     return this.searchNode(this.node, key);
//   }
//   searchNode(node, key) {
//     if (node == null) {
//       return false;
//     }
//     if (this.compareFn(key, node.key) === this.compareFn.LESS_THAN) {
//       return this.searchNode(ndoe.left, key);
//     } else if (this.compareFn(key, node.key) == this.compareFn.BIGGER_THAN) {
//       return this.searchNode(node.right, key);
//     } else {
//       return true;
//     }
//   }
//   // 移除一个节点
//   remove(key) {
//     this.root = this.removeNode(this.root, key);
//   }
//   removeNode(node, key) {
//     if (node == null) return null;
//     if (this.compareFn(key, node.key) === this.compareFn.LESS_THAN) {
//       node.left = this.removeNode(node.left, key);
//     } else if (this.compareFn(key, node.key) === this.compareFn.BIGGER_THAN) {
//       node.right = this.removeNode(node.right, key);
//       return node;
//     } else {
//       // 等于node.key
//       // 第一种情况
//       // 找到得节点为叶子节点
//       if (node.left == null && node.right == null) {
//         node == null;
//         return node;
//       }
//       // 第二种情况
//       // 找到得节点为左节点
//       if (node.left == null) {
//         node = node.right;
//         return node;
//       } else if (node.right == null) {
//         // 找到得节点为右节点
//         node = node.right;
//         return node;
//       }
//       // 第三种情况
//       const aux = this.minNode(node.right);
//       node.key = aux.key;
//       node.right = this.removeNode(node.right, aux.key);
//       return node;
//     }
//   }
// }

// // 自平衡二叉搜索树
// class AVLTree extends BinarySearchTree {
//   constructor(compareFn = defaultCompare) {
//     super(compareFn);
//     this.compareFn = compareFn;
//     this.root = null;
//     const BalanceFactor = {
//       UNBALANCE_RIGHT: 1,
//       SLIGHTLY_UNBALANCE_RIGHT: 2,
//       BALANCED: 3,
//       SLIGHTLY_UNBALANCE_LEFT: 4,
//       UNBALANCE_LEFT: 5,
//     };
//   }
//   getNodeHeight(node) {
//     if (node == null) return -1;
//     return (
//       Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
//       1
//     );
//   }
//   getBalanceFactor(node) {
//     const heightDifference =
//       this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
//     switch (heightDifference) {
//       case -2:
//         return this.BalanceFactor.UNBALANCE_RIGHT;
//       case -1:
//         return this.BalanceFactor.SLIGHTLY_UNBALANCE_RIGHT;
//       case 1:
//         return this.BalanceFactor.SLIGHTLY_UNBALANCE_LEFT;
//       case 2:
//         return this.BalanceFactor.UNBALANCE_LEFT;
//       default:
//         return this.BalanceFactor.BALANCED;
//     }
//   }
//   // 向右的单旋转
//   rotationLL(node) {
//     const tmp = node.left; // {1}
//     node.left = tmp.right; // {2}
//     tmp.right = node; // {3}
//     return tmp;
//   }
//   // 向左的单旋转
//   rotationRR(node) {
//     const tmp = node.right;
//     node.right = tmp.left;
//     tmp.left = node;
//     return tmp;
//   }
//   rotationLR(node) {
//     node.left = this.rotationRR(node.left);
//     return this.rotationLL(node);
//   }
//   rotationRL(node) {
//     node.right = this.rotationLL(node.right);
//     return this.rotationRR(node);
//   }
//   insert(key) {
//     this.root = this.insertNode(this.root, key);
//   }
//   insertNode(node, key) {
//     // ၟ在 BST ຏዐ一ᄣ֭෇বۅ
//     if (node == null) {
//       return new Node(key);
//     } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
//       node.left = this.insertNode(node.left, key);
//     } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
//       node.right = this.insertNode(node.right, key);
//     } else {
//       return node; // 重ް的॰
//     }
//     // සࡕႴᄲ，ॽຏ৊行ೝ࢚֡ፕ
//     const balanceFactor = this.getBalanceFactor(node); // {1}
//     if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
//       // {2}
//       if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
//         // {3}
//         node = this.rotationLL(node); // {4}
//       } else {
//         return this.rotationLR(node); // {5}
//       }
//     }
//     if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
//       // {6}
//       if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
//         // {7}
//         node = this.rotationRR(node); // {8}
//       } else {
//         return this.rotationRL(node); // {9}
//       }
//     }
//     return node;
//   }
//   insert(key) {
//     this.root = this.insertNode(this.root, key);
//   }
//   insertNode(node, key) {
//     // ၟ在 BST ຏዐ一ᄣ֭෇বۅ
//     if (node == null) {
//       return new Node(key);
//     } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
//       node.left = this.insertNode(node.left, key);
//     } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
//       node.right = this.insertNode(node.right, key);
//     } else {
//       return node; // 重ް的॰
//     }
//     // සࡕႴᄲ，ॽຏ৊行ೝ࢚֡ፕ
//     const balanceFactor = this.getBalanceFactor(node); // {1}
//     if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
//       // {2}
//       if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
//         // {3}
//         node = this.rotationLL(node); // {4}
//       } else {
//         return this.rotationLR(node); // {5}
//       }
//     }
//     if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
//       // {6}
//       if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
//         // {7}
//         node = this.rotationRR(node); // {8}
//       } else {
//         return this.rotationRL(node); // {9}
//       }
//     }
//     return node;
//   }
// }

// const tree = new BinarySearchTree();
// tree.insert(11);
// tree.insert(7);
// tree.insert(15);
// tree.insert(5);
// tree.insert(3);
// tree.insert(9);
// tree.insert(8);
// tree.insert(10);
// tree.insert(13);
// tree.insert(12);
// tree.insert(14);
// tree.insert(20);
// tree.insert(18);
// tree.insert(25);
// const printNode = value => console.log(value); // {6}
// tree.inOrderTraverse(printNode); // {
// console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
// console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');

// var arr = [3, 24, 63, 9, 8];
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     const temp = arr[i];
//     if (arr[i] > arr[j]) {
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr);

function Person(name, age) {
  this._name = name;
  this._age = age;
}
Person.prototype.getName = function () {
  return this._name;
};
const son = new Person('link', 22);
son.__proto__.getAge = function () {
  return this._age;
};
console.log('====================================');
console.log(son.getName());
console.log(son.getAge());
console.log('====================================');
