export class Stack {
  stack: any[] = []
  // 将元素压入栈
  static push: Function
  // 从栈中取出元素
  static pop: Function
  // 查看一下栈顶元素
  static peek: Function
  // 判断栈是否为空
  static isEmpty: Function
  // 获取栈中元素的个数
  static size: Function

  push(value: any): void {
    this.stack.push(value)
  }
  pop(): any {
    return this.stack.pop()
  }
  peek(): any {
    return this.stack[this.stack.length - 1]
  }
  isEmpty(): boolean {
    return this.stack.length == 0
  }
  size(): number {
    return this.stack.length
  }
  toString(): string {
    return this.stack.reverse().join(' ')
  }
}

export function dec2bin(num: number) {
  const stack = new Stack();
  while (num > 0) {
    stack.push(num % 2)
    num = Math.floor(num / 2)
  }
  return stack.toString()
}