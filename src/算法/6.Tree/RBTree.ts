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
    public parent: RBNode | null,
    public left: RBNode | null,
    public right: RBNode | null,
    public color: string,
  ) {
    this.isEffectiveColor()
  }
  /**
   * @info 变色
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
  public root: null;
  constructor() {
    this.root = null;
  }
}