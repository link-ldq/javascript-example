const RED = 'RED';
const BLACK = 'BLACK';

export interface RBNode {
  val: number;
  parent: RBNode | null;
  left: RBNode | null;
  right: RBNode | null;
  color: string;
  [x: string]: any;
}
// 红黑树节点
export class RBNode {
  /**
   * @author Link
   * @param {number} val 要插入的数值
   * @param {RBNode} parent 父节点
   * @param {RBNode} left 左子树
   * @param {RBNode} right 右子树
   * @param {string} color 颜色
   * @returns 一个新的节点
   */
  constructor(
    public val: number,
    public parent: RBNode | null = null,
    public left: RBNode | null = null,
    public right: RBNode | null = null,
    public color: string = RED,
  ) {
    this.isEffectiveColor()
  }
  /**
   * @desc 设置颜色
   * @param node 节点
   * @param color 颜色
   */
  setColor(node: RBNode, color: string) {
    this.isEffectiveColor();
    if (!node) throw new Error('Node is a empty RBNode');
    node.color = color;
  }
  isEffectiveColor() {
    if ([RED, BLACK].indexOf(this.color) == -1) throw new Error('color can only be RED or BLACK');
  }
}
// 红黑树
export class RBTree {
  public root: RBNode | null;
  constructor() {
    this.root = null;
  }

  /**
   * @desc 插入一个节点
   * @param {number} val 插入值
   * @returns {RBNode} 返回根节点
   */
  insert(val: number): RBNode | null {
    // 只允许插入数值
    if (typeof val !== 'number') throw new TypeError('insert value is not a number');

    let t = this.root;
    /**
     * 情况1: 红黑树中不存在任何节点, 插入数据后直接作为根节点
     */
    if (t == null) {
      this.root = new RBNode(val, null, null, null, BLACK);
      return this.root;
    }
    // 1. 寻找插入位置
    // parent 指针用于记录当前要插入的节点位置
    let parent = t.parent;
    do {
      parent = t;
      // 当前值与根节点的值进行比较, 如果当前值大则 cmp 大于0
      let cmp = val - t.val;
      // 判断 cmp 的值 如果大于 0 则插入右子树
      if (cmp > 0) {
        t = t.right;
      }
      // 如果小于 0 则插入左子树
      else if (cmp < 0) {
        t = t.left;
      }
      // 如果等于 0 则说明已经存在, 抛出异常
      else {
        throw new Error('insert value already exists');
      }
      /**
       * 当循环结束, 此时已经到达末尾节点, 他的值为null, parent表示最后的末尾节点
       */
    } while (t !== null);

    // 2.讲解点插入树中
    // 2.1创建节点
    const newNode = new RBNode(val, parent);
    // 2.2根据节点的值来判断是插入右子树还是左子树
    if (newNode.val > parent.val) {
      parent.right = newNode;
    } else {
      parent.left = newNode;
    }

    // 3.调整节点位置和颜色, 位置红黑树特性
    this.fixAfterInsertNode(newNode);

    return this.root;
  }
  /**
   * 给定一个节点,调整在红黑树的位置和颜色
   * @param {RBNode} node 要调整的节点
   */
  fixAfterInsertNode(node: RBNode) {
    // 新增节点为红色
    node.color = RED;
    while (node !== null && node !== this.root && (node.parent && node.parent.color == RED)) {
      // 1.1判断 node 的父节点 是爷爷节点的左孩子
      // 当前节点的父节点的父节点的左节点与当前节点的父节点是否相等
      if (this.getParent(node) === this.getLeft(this.getParent(this.getParent(node)))) {
        // 1.2 获取叔叔节点
        let uncle = this.getRight(this.getParent(this.getParent(node)));
        // 1.3 判断 叔叔节点 的颜色是否为红色, 如果是则变色
        if (this.getColor(uncle) === RED) {
          // 如果进入则说明存在叔叔节点
          const grandpa = this.getParent(this.getParent(node));
          // 1.3.1 将父节点和淑红素节点修改为黑色, 爷爷节点改为红色
          this.setColor(this.getParent(node) as RBNode, BLACK);
          this.setColor(uncle as RBNode, BLACK);
          this.setColor(grandpa as RBNode, RED);
          node = grandpa as RBNode;
        }
        // 1.4 说明没有叔叔节点 或者 叔叔节点是黑色节点, 则需与奥操作父节点和爷爷节点.
        else {
          // 1.7.1 判断插入的节点是否为父节点的右节点
          if (node === this.getRight(this.getParent(node))) {
            // 1.7.2 将节点的父节点赋值给当前节点
            node = this.getParent(node) as RBNode;
            // 1.7.3 对 node 进行左旋
            this.leftRotate(node);
          }
          // 1.5 父节点变黑色 爷爷节点变红色
          const grandpa = this.getParent(this.getParent(node)) as RBNode;
          this.setColor(this.getParent(node) as RBNode, BLACK);
          this.setColor(grandpa, RED);
          // 1.6 对爷爷节点进行右旋操作
          this.rightRotate(grandpa);
        }
      }
    }
    // 将跟节点变成黑色
    this.setColor(this.root as RBNode, BLACK);
  }
  /**
   * 获取指定节点的父节点
   * @param {RBNode | null} node 
   * @returns {RBNode|null}
   */
  getParent(node: RBNode | null): RBNode | null { return node !== null ? node.parent : null; }
  /**
   * 获取指定节点的左节点
   * @param {RBNode | null} node 
   * @returns {RBNode|null}
   */
  getLeft(node: RBNode | null): RBNode | null { return node !== null ? node.left : null; }
  /**
   * 获取指定节点的右节点
   * @param {RBNode | null} node 
   * @returns {RBNode|null}
   */
  getRight(node: RBNode | null): RBNode | null { return node !== null ? node.right : null }
  /**
   * 获取指定节点的颜色
   * @param {RBNode | null} node 
   * @returns {RBNode|null}
   */
  getColor(node: RBNode | null): string { return node === null ? BLACK : node.color; }
  /**
  * 围绕 node 进行左旋
  * 效果如下
  *         node           ->          pr(r)
  *        /   \           ->         /   \
  *       pl   pr(r)       ->       node   cr
  *           / \          ->       /  \
  *          cl  cr        ->      pl   cl
  * @desc 左旋
  * @param {RBNode} node 需要旋转的节点
  */
  leftRotate(node: RBNode) {
    if (!node) return;
    // 缓存node的右节点
    if (node.right == null) return;
    const r = node.right;
    // 将 pr 的右节点 pr 重新赋值为 cl
    node.right = r.left;
    // 将 cl 的父节点指向 node
    if (r.left) {
      r.left.parent = node;
    }
    // 将节点pr连接node节点的父节点
    r.parent = node.parent;
    if (node.parent === null) {
      // 如果需要旋转的节点是根节点,则将根节点从node直接改为pr.
      this.root = r;
    } else if (node.parent.left === node) {
      // 说明要旋转的node是父节点的左节点
      node.parent.left = r;
    } else if (node.parent.right === node) {
      // 说明要旋转的node是父节点的右节点
      node.parent.right = r;
    }
    // 处理 pr 节点的左节点
    r.left = node
    // 处理 node 的父节点
    node.parent = r;
  }
  /**
 * 围绕 node 进行右旋
 * 效果如下
 *           node         ->          pl(l)
 *          /   \         ->        /   \
 *         pl(l) pr       ->       cl   node
 *        /  \            ->           / \
 *       cl   cr          ->          cr  pr
 * @desc 右旋
 * @param {RBNode} node 需要旋转的节点
 */
  rightRotate(node: RBNode) {
    if (!node) return
    // 1. 修改旋转节点 左节点的右节点 为 旋转节点的左节点
    // 1.1 缓存一下 node 的左节点
    if (node.left == null) return;
    const l = node.left;
    // 1.2 修改左节点的右节点为旋转节点的左节点
    if (l.right) {
      node.left = l.right;
    }
    // 2. 连接旋转节点的左节点与旋转节点的引用
    if (l.right !== null) {
      l.right.parent = node;
    }
    // 3. 修改 l 节点的父节点
    l.parent = node.parent;
    if (node.parent === null) {
      // 3.1 如果 node 此时是根节点，则将根节点重新指向 l
      this.root = l;
    } else if (node.parent.left === node) {
      // 3.2 如果 node 是父节点的左节点，则更换左节点
      node.parent.left = l;
    } else if (node.parent.right === node) {
      // 3.3 如果 node 是父节点的右节点，则更换右节点
      node.parent.right = l;
    }
    // 4. 将旋转节点作为旋转节点左节点的右节点
    l.right = node;
    // 4.1 重新建立parent引用
    node.parent = l;
  }
  /**
   * @desc 设置颜色
   * @param node 节点
   * @param color 颜色
   */
  setColor(node: RBNode, color: string) {
    this.isEffectiveColor(color);
    if (!node) throw new Error('Node is a empty RBNode');
    node.color = color;
  }
  isEffectiveColor(color: string) {
    if ([RED, BLACK].indexOf(color) == -1) throw new Error('color can only be RED or BLACK');
  }
}