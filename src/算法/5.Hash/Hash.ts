// 设计哈希函数
// 1. 将字符串转成比较大的数字：HashCode
// 2. 将大的数字HashCode压缩到数组反问(大小)之内
export function Hash(str: string, size: number) {
  // 1.定义HashCode变量
  var hashcode = 0;
  // 2.霍纳算法,来计算hashcode的值
  // cats -> Unicode编码
  for (let i = 0; i < str.length; i++) {
    hashcode = 37 * hashcode + str.charCodeAt(i);
    console.log(hashcode)
  }
  // 3. 取余操作
  return hashcode % size
}