// 设计哈希函数
// 1. 将字符串转成比较大的数字：HashCode
// 2. 将大的数字HashCode压缩到数组反问(大小)之内
export function HashFn(str: string, size: number) {
  // 1.定义HashCode变量
  var hashcode = 0;
  // 2.霍纳算法,来计算hashcode的值
  // cats -> Unicode编码
  for (let i = 0; i < str.length; i++) {
    hashcode = 37 * hashcode + str.charCodeAt(i);
  }
  // 3. 取余操作
  return hashcode % size
}
export class HashCl {
  private storage = [];
  private count = 0;
  private limit = 7;
  hashFunc(key: string, size: number) {
    // 1.定义HashCode变量
    var hashcode = 0;
    // 2.霍纳算法,来计算hashcode的值
    // cats -> Unicode编码
    for (let i = 0; i < key.length; i++) {
      hashcode = 37 * hashcode + key.charCodeAt(i);
    }
    // 3. 取余操作
    return hashcode % size
  }
  put(key: string, value: any) {
    // 1.根据key获取对应的index
    let index = this.hashFunc(key, this.limit)
    // 2.根据 index 去除 bucket
    let bucket: any = this.storage[index]
    // 3.判断bucket是否为null
    if (bucket == null) {
      bucket = [];
      (this.storage[index] as any) = bucket
    }
    // 4.判断是否修改数据
    for (let i = 0; i < bucket.length; i++) {
      var t = bucket[i]
      if (t[0] == key) {
        t[1] = value;
        return;
      }
    }
    bucket.push([key, value])
    this.count += 1
  }
}