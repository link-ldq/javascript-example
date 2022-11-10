export class Tree { }
class Node {
  public left: Node | null = null;
  public right: Node | null = null;
  constructor(public key: any) { }
}

// 二叉搜索树
export class BinarySearchTree {
  public root: Node | null = null;
  private _preOrderTraversalVal: any[] = [];
  private _midOrderTraversalVal: any[] = [];
  private _posOrderTraversalVal: any[] = [];
  // 插入
  insert(key: any) {
    // 1.根据俄key创建节点
    var newNode = new Node(key);
    // 2.判断根节点是否有值 
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  // 插入节点
  // 节点左侧的值小于本节点,右侧大于本节点
  insertNode(node: Node, newNode: Node) {
    if (newNode.key < node.key) { // 向左查找
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else { // 向右查找
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  // 遍历
  // 先序遍历
  preOrderTraversal(): any[] {
    this._preOrderTraversalVal = []
    this.preOrderTraversalNode(this.root);
    return this._preOrderTraversalVal;
  }
  preOrderTraversalNode(node: Node | null) {
    if (node == null) {
      return node;
    } else {
      // 处理经过的节点
      this._preOrderTraversalVal.push(node.key);
      // 处理经过节点的左子节点
      this.preOrderTraversalNode(node.left);
      // 处理经过节点的右子节点
      this.preOrderTraversalNode(node.right);
    }
  }
  // 中序遍历
  midOrderTraversal() {
    this._midOrderTraversalVal = []
    this.midOrderTraversalNode(this.root);
    return this._midOrderTraversalVal;
  }
  midOrderTraversalNode(node: Node | null) {
    if (node == null) {
      return node;
    } else {
      // 处理经过节点的左子节点
      this.midOrderTraversalNode(node.left);
      // 处理经过的节点
      this._midOrderTraversalVal.push(node.key);
      // 处理经过节点的右子节点
      this.midOrderTraversalNode(node.right);
    }
  }
  // 后序遍历
  posOrderTraversal() {
    this._posOrderTraversalVal = []
    this.posOrderTraversalNode(this.root);
    return this._posOrderTraversalVal;
  }
  posOrderTraversalNode(node: Node | null) {
    if (node == null) {
      return node;
    } else {
      // 处理经过节点的左子节点
      this.posOrderTraversalNode(node.left);
      // 处理经过节点的右子节点
      this.posOrderTraversalNode(node.right);
      // 处理经过的节点
      this._posOrderTraversalVal.push(node.key);
    }
  }
}
