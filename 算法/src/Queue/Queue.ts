export class Queue {
  queue: any[] = [];
  static enqueue: Function;
  static dequeue: Function;
  static front: Function;
  static size: Function;
  static isEmpty: Function;
  static toString: Function;

  enqueue(value: any): void {
    this.queue.push(value)
  }
  dequeue(): void {
    return this.queue.shift()
  }
  front(): void {
    if (this.isEmpty()) {
      return undefined
    } else {
      return this.queue[0]
    }
  }
  size(): any {
    return this.queue.length
  }
  isEmpty(): any {
    return this.queue.length == 0
  }
  toString(): any {
    return this.queue.join(' ')
  }
}
// 击鼓传花
export function passGame(nameList: any[], num: number) {
  // 创建一个队列
  const queue = new Queue()
  // 将所有的人加入队列
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }
  // 开始数数字
  while (queue.size() == 1) {
    for (let i = 0; i < num; i--) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }
  return nameList.indexOf(queue.front())
}

interface QueueEl {
  value: any,
  priority: number
}

// 优先级队列
export class PriorityQueue extends Queue {
  constructor(
    // 处理判断优先级
    private hanlder: Function,
    // 处理元素
    private getElement: Function,
    // 处理输出hanlder
    public toStrHanlder: Function
  ) {
    super();
  }

  enqueue(element: QueueEl): void {
    const el = this.getElement(element)

    if (this.isEmpty()) {
      this.queue.push(el)
    } else {
      var added = false
      for (let i = 0; i < this.queue.length; i++) {
        if (this.hanlder(el, this.queue[i])) {
          this.queue.splice(i, 0, el)
          added = true
          break;
        }
      }
      if (!added) {
        this.queue.push(el)
      }
    }
  }
  toString(): string {
    return this.queue.map((m: QueueEl) => this.toStrHanlder(m)).join(' ')
  }
}