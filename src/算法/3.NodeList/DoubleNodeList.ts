interface Node {
  data: any,
  next?: Node,
  prev?: Node,
}
class Node {
  constructor(
    public data: any,
    public prev?: Node,
    public next?: Node
  ) {
  }
}
export class DoubleNodeList {
  public head!: Node;
  public tail!: Node;
  public length: number = 0

  // 增
  append(data: any) {
    // 创建新节点
    const newNode: Node = new Node(data)
    // 判断是否添加是第一个节点
    if (this.length == 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      // 找到最后一个节点
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
      // let cur: Node = this.head as Node
      // while (cur && cur.next) {
      //   cur = cur.next
      // }
      // cur.next = newNode
    }
    this.length += 1
  }
  insert(position: number, data: any) {
    // 1. 对position 进行 越界判断
    if (this.isJudgeCrossingLine(position)) return false
    // 2. 创建新的node
    const newNode: Node = new Node(data);
    // 3. 判断原来的列表是否为空
    if (this.length == 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      // 判断插入位置是否为0
      if (position == 0) {
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
      } else if (position == this.length) {
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
      } else {
        let cur = this.head
        // let prev = null
        while (position--) {
          // prev = cur;
          (cur as any) = cur.next;
        }
        // (prev as any).next = newNode;
        newNode.next = cur
        newNode.prev = cur.prev as Node;
        (cur.prev as any).next = newNode
        cur.prev = newNode
      }
    }
    this.length += 1;
    return true
  }
  // 删
  removeAt(position: number) {
    if (this.isJudgeCrossingLine(position)) return false;
    let cur: Node = this.head;
    if (this.length == 1) {
      this.head = null as any
      this.tail = null as any
    } else {
      // 判断是否删除第一个节点
      if (position == 0) {
        (this.head.next as Node).prev = null as any;
        (this.head as any) = this.head.next;
      } else if (position == this.length - 1) {
        (this.tail.prev as Node).next = null as any
        this.tail = this.tail.prev as Node
      } else {
        let i = 0
        while (i++ < position) {
          (cur as any) = cur.next;
        }
        (cur.prev as Node).next = cur.next;
        (cur.next as Node).prev = cur.prev;
      }
    }
    this.length -= 1
    return true
    return this.head.data
  }
  remove(data: any) {
    let position = this.indexOf(data)
    return this.removeAt(position)
  }
  // 改
  update(position: number, data: any): any {
    if (this.isJudgeCrossingLine(position)) return new Error('out of length')
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
      (cur as any) = cur.next
    }
    return -1
  }
  get(position: number): any {
    if (this.isJudgeCrossingLine(position)) return null
    let res: any;
    if (this.length == 1 || this.length / 2 >= position) {
      let cur = this.head
      while (position--) {
        (cur as any) = cur.next;
      }
      res = cur.data
    } else {
      let cur = this.tail
      let index = this.length - position
      while (--index) {
        (cur as any) = cur.prev;
      }
      res = cur.data
    }
    return res
  }
  getNode(position: number): any {
    if (this.isJudgeCrossingLine(position)) return null
    let cur = this.head
    while (position--) {
      (cur as any) = cur.next;
    }
    return cur
  }
  isEmpty() {
    return this.length == 0
  }
  size() {
    return this.length
  }
  // 将链表转换成字符串形式
  toString(): string { return this.backwordString() }
  forwardString(): string {
    var cur: Node = this.tail;
    var res: string = '';
    // 依次向前遍历，获取每一点
    while (cur) {
      res += cur.data + '->';
      cur = cur.prev as any
    }
    res += 'null'
    return res
  }
  backwordString(): string {
    var cur: Node = this.head;
    var res: string = '';  
    // 依次向后遍历，获取每一点
    while (cur) {
      res += cur.data + '->';
      cur = cur.next as any
    }
    res += 'null'
    return res
  }
  getHead(): Node {
    return this.head.data
  }
  getTail(): Node {
    return this.tail.data
  }
  private isJudgeCrossingLine(position: number): boolean {
    if (position < 0 || position >= this.length) {
      return true
    }
    return false
  }
}