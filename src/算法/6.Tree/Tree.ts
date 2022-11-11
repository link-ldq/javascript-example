export class Tree { }
class Node {
  public left: Node | null = null;
  public right: Node | null = null;
  constructor(public key: any) { }
}

// 二叉搜索树;
export class BinarySearchTree {
  public root: Node | null = null;
  private _preOrderTraversalVal: any[] = [];
  private _midOrderTraversalVal: any[] = [];
  private _posOrderTraversalVal: any[] = [];
  // 插入
  insert(key: any) {
    // 1.根据俄key创建节点;
    var newNode = new Node(key);
    // 2.判断根节点是否有值 ;
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  // 插入节点;
  // 节点左侧的值小于本节点,右侧大于本节点;
  insertNode(node: Node, newNode: Node) {
    if (newNode.key < node.key) { // 向左查找;
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else { // 向右查找;
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  /**
   * 删除;
   */
  remove(key: any): any {
    // 1.找到要删除的节点;
    // 2.根据情况删除节点;
    //  21.删除的节点是叶子节点;
    //   211.根结点 && 叶子节点;
    //   212.叶子节点;
    //  22.删除的节点只有一个子节点;
    //  23.删除的节点有两个子节点;
    if (this.root == null) return false
    var current: Node = this.root;
    var parent = null;
    var isLeftChild = true;

    // 1.寻找key;
    while (current.key !== key) {
      parent = current;
      if (key < current.key) {
        isLeftChild = true;
        current.left && (current = current.left);
      } else {
        isLeftChild = false;
        current.right && (current = current.right);
      }
      // 某种情况: 已经找到了最后的节点, 依然没有找到 == key
      if (current == null) return false;
    }

    // 2.删除操作;
    // 21.删除的节点是叶子节点;
    if (current.left == null && current.right == null) {
      // 211.根结点 && 叶子节点;
      if (current == this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parent && (parent.left = null);
      } else {
        parent && (parent.right = null);
      }
    }
    // 22.有一个子节点;
    else if (current.right == null) {
      if (current == this.root) {
        this.root = current.left;
      } else if (isLeftChild) {
        parent && (parent.left = current.left);
      } else {
        parent && (parent.right = current.left);
      }
    } else if (current.left == null) {
      if (current == this.root) {
        this.root = current.right;
      } else if (isLeftChild) {
        parent && (parent.left = current.right);
      } else {
        parent && (parent.right = current.right);
      }
    }
    // 23.有两个子节点;
    else {
      // 231.获取后继节点
      var successor: any = this.getSuccessor(current);
      // 232.判读是否是根结点
      if (current == this.root) {
        this.root == successor;
      } else if (isLeftChild) {
        parent && (parent.left = successor);
      } else {
        parent && (parent.right = successor);
      }
      // 233.将删除节点的左子树赋值给succersor
      successor.left = current.left;
    }
    return true;

  }
  getSuccessor(delNode: Node): Node | null {
    // 1.使用变量保存临时的节点
    var successorParent = delNode;
    var successor = delNode;
    var current = delNode.right;

    // 2.寻找节点
    while (current != null) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }

    // 3.如果删除图中15的情况还需要如下代码
    if (successor != delNode.right) {
      successorParent.left = successorParent.right;
      successor.right = delNode.right;
    }
    return successor;
  }
  /**
   * 搜索key;
   */
  search(key: any): boolean {
    if (this.root == null) return false;
    return this.searchNode(this.root, key);
  }
  searchNode(node: Node, key: any): boolean {
    // 判断节点值 和 传入的key 大小;
    if (node.key > key) {
      if (node.left == null) return false;
      return this.searchNode(node.left, key);
    } else if (node.key < key) {
      if (node.right == null) return false;
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }
  /**
   * 最值;
   */
  // 最大值;
  max(): any | null {
    if (this.root == null) return null;
    var node = this.root;
    while (node.right !== null) {
      node = node.right
    }
    return node.key
  }
  // 最小值;
  min(): any | null {
    if (this.root == null) return null;
    var node = this.root;
    while (node.left !== null) {
      node = node.left
    }
    return node.key
  }
  /**
   *  遍历;
   * */
  // 先序遍历;
  preOrderTraversal(): any[] {
    this._preOrderTraversalVal = []
    this.preOrderTraversalNode(this.root);
    return this._preOrderTraversalVal;
  }
  preOrderTraversalNode(node: Node | null) {
    if (node == null) {
      return node;
    } else {
      // 处理经过的节点;
      this._preOrderTraversalVal.push(node.key);
      // 处理经过节点的左子节点;
      this.preOrderTraversalNode(node.left);
      // 处理经过节点的右子节点;
      this.preOrderTraversalNode(node.right);
    }
  }
  // 中序遍历;
  midOrderTraversal(): any[] {
    this._midOrderTraversalVal = []
    this.midOrderTraversalNode(this.root);
    return this._midOrderTraversalVal;
  }
  midOrderTraversalNode(node: Node | null) {
    if (node == null) {
      return node;
    } else {
      // 处理经过节点的左子节点;
      this.midOrderTraversalNode(node.left);
      // 处理经过的节点;
      this._midOrderTraversalVal.push(node.key);
      // 处理经过节点的右子节点;
      this.midOrderTraversalNode(node.right);
    }
  }
  // 后序遍历;
  posOrderTraversal(): any[] {
    this._posOrderTraversalVal = [];
    this.posOrderTraversalNode(this.root);
    return this._posOrderTraversalVal;
  }
  posOrderTraversalNode(node: Node | null) {
    if (node == null) {
      return node;
    } else {
      // 处理经过节点的左子节点;
      this.posOrderTraversalNode(node.left);
      // 处理经过节点的右子节点;
      this.posOrderTraversalNode(node.right);
      // 处理经过的节点;
      this._posOrderTraversalVal.push(node.key);
    }
  }
}
