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

    // 2.将节点插入树中
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
   * 根据 val 删除红黑树中的节点
   * @param {number} val 
   * @returns {number}
   */
  remove(val: number): number | null {
    const node = this.findNode(val);
    if (!node) return null;
    const oldVal = node.val;
    this.deleteNode(node);
    return oldVal;
  }
  /**
   * 删除节点
   * @param {RBNode} node 要删除的节点
   * @returns {RBNode|null}
   */
  deleteNode(node: RBNode): RBNode | null {
    // 删除节点
    // 删除的节点是跟节点, 直接将 root 设置为 null
    if (node.parent == null) this.root == null;
    // 1 存在左右子树的情况
    if (node.left && node.right) {
      // 1.1 找到前驱或者后继节点
      const sucessor = this.sucessor(node);
      if (!sucessor) return null;
      // 1.2 讲我们找到的节点的值赋值给要被删除的节点
      node.val = sucessor.val;
      // 1.3 将 node 指向后继节点, 删除 node 即可(也就是删除前驱或者后驱节点)
      node = sucessor;
    }
    // 2. 找到替换的节点;
    // 如果前面使用前驱节点则存在左子树, 后继存在右子树, 这里这么些可以兼容前驱或者后驱
    let replacement = node.left ? node.left : node.right;
    if (replacement) {
      // 2.1 说明存在左子树或者右子树, 则不是叶子节点.
      // 2.1.1 将 replacement 的parent 指向 node 的 parent(认爹)
      replacement.parent = node.parent;
      // 2.1.2 建立 left 或者 right的引用(认儿子)
      if (node.parent && node.parent.left === node) {
        node.parent.left = replacement;
      } else {
        node.parent && (node.parent.right = replacement);
      }
      // 2.1.3 情空 node 节点 的所有指针(抛弃了所有人, 等待垃圾回收)
      node.left = null;
      node.right = null;
      node.parent = null;
      // 2.1.4 调整红黑树平衡
      if (this.getColor(node) === BLACK) {
        // 只有删除黑色节点才需要调整平衡
        /**
         * 这里的replacement节点一定是红色，原因：
         * 红黑树中删除的节点对应 2-3-4 树中的叶子节点
         * 叶子节点只存在三种情况，也就是2节点3节点和4节点
         * 如果是2节点，则 replacement 不存在
         * 如果是3或者4节点，则 replacement 一定为红色节点
         */
        // 基于前驱或者后驱进行调整
        this.fixAfterDeleteNode(replacement);
      }
    } else {
      // 3.1 说明不存在前驱后者后继, 也就是叶子节点
      if (this.getColor(node) == BLACK) {
        // 3.2 如果叶子节点是黑色,则需要调整平衡;
        this.fixAfterDeleteNode(node);
      }
      // 3.3 删除叶子节点
      // 3.3.1 不认儿子
      if (node.parent && node.parent.left === node) {
        node.parent.left = null;
      } else if (node.parent && node.parent.right === node) {
        node.parent.right = null;
      }
      // 3.3.2 不认老爹
      node.parent = null;
    }
    return null;
  }
  /**
   * 查找node的前驱节点
   * @param {RBNode} node
   * @returns {RBNode|null} 前驱节点
   */
  predecessor(node: RBNode): RBNode | null {
    if (!node) return null;
    else if (node.left) {
      let p = node.left;
      while (p.right) {
        p = p.right;
      }
      return p;
    } else {
      // 如果删除寻找前驱节点是保证左右子树都存在的时候才找到前驱或者后驱
      // 这里的 else 只是为了寻找节点的前驱节点
      let p = node.parent;
      let c = node;
      if (!p) return null;
      while (p.left == c && p) {
        c = p;
        p = p.parent;
        return p;
      }
      return null;
    }
  }
  /**
   * 查找node的后继节点
   * @prarm {RBNode} node
   * @return {RNNode|null} 后继续节点
   */
  sucessor(node: RBNode): RBNode | null {
    if (!node) return null;
    else if (node.right) {
      let p = node.right;
      while (p.left) {
        p = p.left;
        return p;
      };
      return null;
    } else {
      let p = node.parent;
      let c = node;
      if (!p) return null;
      while (p.right === c && p) {
        c = p;
        p = p.parent;
        return p;
      }
      return null;
    }
  }
  /**
   * 根据val 查找指定节点
   * @param {number} val 要查找的节点的值
   * @returns {RBNode} 找到的节点
   */
  findNode(val: number): RBNode | null {
    if (typeof val !== 'number') throw new TypeError('val is not a number');
    let p = this.root;
    while (p) {
      if (val < p.val) {
        p = p.left;
      } else if (val > p.val) {
        p = p.right;
      } else {
        break;
      }
    }
    return p;
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
   * 删除时调整树结构
   * @param {RBNode} x 
   */
  fixAfterDeleteNode(x: RBNode) {
    // 1. 如果 x 节点不是跟节点且颜色是黑色;
    while (x !== this.root && this.getColor(x) === BLACK) {
      // x 是左孩子
      if (x === this.getLeft(this.getParent(x))) {
        // 1.1 寻找兄弟节点
        let rNode = this.getRight(this.getParent(x));
        // 1.1.1 如果兄弟节点为红色, 则说明他不是真正的兄弟节点 
        if (this.getColor(rNode) === RED) {
          // 1.1.2 将该节点染黑 父节点染红
          this.setColor(rNode, RED);
          this.setColor(this.getParent(rNode), RED);
          // 1.1.3 将行节点的父节点左旋
          this.leftRotate(this.getParent(x));
          // 1.1.4 找到真正的兄弟节点
          rNode = this.getRight(this.getParent(x));
        }
        // 1.2 x节点转换为 2-3-4 树, 对应的兄弟节点为3节点或者4节点的情况.
        if (this.getLeft(rNode) !== null || this.getRight(rNode) !== null) {
          // 如果存在左子树或者右子树则说明转换为 2-3-4 树为3节点或者4节点.
          // 1.2.1 判断是够存在左子树, 如果存在则变色旋转
          // 1.2.1.1 因为进入这个说明左右子树必须存在一个 ,可如果 右子树不存在则说明左子树一定存在
          if (this.getRight(rNode) === null) {
            // 1.2.1.2 说明存在, 先将左子树变黑
            this.setColor(this.getLeft(rNode), BLACK);
            // 1.2.1.3 将原本的黑色节点变红
            this.setColor(rNode, RED);
            // 1.2.1.4 右旋转
            this.rightRotate(rNode);
            // 1.2.1.5 调整rNode
            rNode = this.getRight(this.getParent(x))
          }
          // 1.2.2 将兄弟节点变成父节点的颜色
          this.setColor(rNode, this.getColor(this.getParent(x)))
          // 1.2.3 将父节点变成黑色
          this.setColor(this.getParent(x), BLACK);
          // 1.2.4 将兄弟的右节点变成黑色
          this.setColor(this.getRight(rNode), BLACK);
          // 1.2.5
          this.leftRotate(this.getParent(x));
          // 1.2.6 跳出循环
          break;
        }
        // 1.3 x 节点转换为2-3-4树, 对应的兄弟节点为2节点
        else {
          // 1.3.1 将兄弟节点变成红色
          this.setColor(rNode, RED);
          // 1.3.2 移动 x 递归变色
          x = this.getParent(x) as RBNode;
          // 1.3.3 如果 x 的节点不为黑色, 则不会进入循环, 而是执行 2 将其变成黑色, 然后黑色继续保持平衡
        }
      }
      // x 是右孩子
      else {
        // 代码与上面一致, 只是方向患了一下, 为了见人前驱和后继节点
        let lNode = this.getLeft(this.getParent(x));
        if (this.getColor(lNode) === RED) {
          this.setColor(lNode, BLACK);
          this.setColor(this.getParent(lNode), RED);
          this.rightRotate(this.getParent(x));
          lNode = this.getLeft(this.getParent(x));
        }
        if (this.getLeft(lNode) !== null || this.getRight(lNode) !== null) {
          if (this.getLeft(lNode) === null) {
            this.setColor(this.getRight(lNode), BLACK);
            this.setColor(lNode, RED);
            this.leftRotate(lNode);
            lNode = this.getLeft(this.getParent(x));
          }
          this.setColor(lNode, this.getColor(this.getParent(x)));
          this.setColor(this.getParent(x), BLACK);
          this.setColor(this.getLeft(lNode), BLACK);
          this.rightRotate(this.getParent(x));
          break;
        } else {
          this.setColor(lNode, RED);
          x = this.getParent(x) as RBNode;
        }
      }
    }
    // 2. 因为要替换的节点一定是需要转换成黑色的，因为删除红色节点不会违反红黑树的平衡，所以不需要调整，凡是要调整的绝对是删除黑色节点需要补充黑色节点
    // 对应图 删除-01
    this.setColor(x, BLACK)
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
  leftRotate(node: RBNode | null) {
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
  rightRotate(node: RBNode | null) {
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
  setColor(node: RBNode | null, color: string) {
    this.isEffectiveColor(color);
    if (!node) throw new Error('Node is a empty RBNode');
    node.color = color;
  }
  isEffectiveColor(color: string) {
    if ([RED, BLACK].indexOf(color) == -1) throw new Error('color can only be RED or BLACK');
  }
}