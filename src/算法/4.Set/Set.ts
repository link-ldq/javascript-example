export class Set {
  // 属性
  private list = {};
  // 方法
  add(value: any): Boolean {
    let key: string = value.toString()
    if (!this.has(key)) {
      (this.list as any)[key] = key
      return true
    }
    return false
  }
  remove(value: any): Boolean {
    let key: string = value.toString()
    if (!this.has(key)) {
      return false
    }
    delete (this.list as any)[key]
    return true
  }
  has(value: Object): boolean {
    return this.list.hasOwnProperty(value.toString())
  }
  clear(): boolean {
    this.list = {}
    return true
  }
  size(): number { return Object.keys(this.list).length }
  values(): any { return Object.keys(this.list) }
  union(otherSet: any): any {
    var unionSet = new Set()
    var values = this.values()
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    values = otherSet.values()
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    return unionSet
  }
}
