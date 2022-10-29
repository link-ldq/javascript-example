export class Queue {
  queue: any[] = [];
  static enqueue: Function;
  static dequeue: Function;
  static front: Function;
  static size: Function;
  static isEmpty: Function;
  static toString: Function;
  enqueue(value: any) {
    this.queue.push(value)
  }
  dequeue() {
    return this.queue.shift()
  }
  front() {
    if (this.isEmpty()) {
      return undefined
    } else {
      return this.queue[0]
    }
  }
  size() {
    return this.queue.length
  }
  isEmpty() {
    return this.queue.length == 0
  }
  toString() {
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