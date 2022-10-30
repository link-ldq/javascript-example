interface Node {
  data: any | null,
  next: Node | null
}
class Node {
  constructor(public data: any, public next: Node | null = null) {
  }
}
export class NodeList {
  public head: Node | null = null
  public length: number = 0
  constructor() {
  }

  // 增
  append(data: any) {
    const newHead: Node = new Node(data)
    if (this.length == 0) {
      this.head = newHead
    } else {
      let cur: Node | null = this.head
      while (cur && cur.next) {
        cur = cur.next
      }
      (cur as Node).next = newHead
    }
    this.length += 1
  }
  insert(position: number, data: any) {
    // 1. 对position 进行 越界判断
    if (this.isJudgeCrossingLine(position)) return false
    // 创建新的node
    const newNode = new Node(data);
    // 2. 判断插入位置是否为第一个

    if (position == 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let cur = this.head
      let prev = null
      while (position--) {
        prev = cur;
        (cur as any) = cur?.next;
      }
      (prev as any).next = newNode;
      newNode.next = cur
    }
    this.length += 1;
    return true
  }
  // 删
  removeAt(position: number) {
    if (this.isJudgeCrossingLine(position)) return false
    if (position == 0) {
      (this.head as any) = this.head?.next
    } else {
      let cur = this.head
      let prev = null
      while (position--) {
        prev = cur;
        (cur as any) = cur?.next;
      }
      (prev as any).next = cur?.next
    }
    this.length -= 1
    return true
  }
  remove(data: any) {
    let position = this.indexOf(data)
    return this.removeAt(position)
  }
  // 改
  update(position: number, data: any) {
    if (this.indexOf(position) < 0) {
      this.getNode(position).data = data
      return true
    }
    return false
  }
  // 查
  indexOf(data: any): number {
    let cur = this.head
    let i = 0;
    while (cur) {
      if (data == cur.data) {
        return i
      }
      ++i;
      cur = cur.next
    }
    return -1
  }
  get(position: number): any {
    if (this.isJudgeCrossingLine(position)) return null
    let cur = this.head
    while (position--) {
      (cur as any) = cur?.next;
    }
    return cur?.data
  }
  getNode(position: number): any {
    if (this.isJudgeCrossingLine(position)) return null
    let cur = this.head
    while (position--) {
      (cur as any) = cur?.next;
    }
    return cur
  }
  isEmpty() {
    return this.length == 0
  }
  size() {
    return this.length
  }
  toString() {
    let cur = this.head
    let str = ''
    while (cur) {
      str += cur.data + '->'
      cur = cur.next
    }
    str += 'null'
    return str
  }
  private isJudgeCrossingLine(position: number): boolean {
    if (position < 0 || position >= this.length) {
      return true
    }
    return false
  }
}