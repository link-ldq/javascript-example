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

  push(value: any) {
    this.stack.push(value)
  }
  pop(): any {

  }
  peek() {

  }
  isEmpty() {

  }
  size() {
    return this.stack.length
  }
  // toString
}