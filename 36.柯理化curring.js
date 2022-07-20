// console.log(
//   3.01.toString()
// )

// 实现一个add方法，使计算结果能够满足如下预期：
// console.log(
//   add(1,3)(2).getVal(),
//   add(1)(2)(3).getVal(),
//   add(1, 2, 3)(4).getVal(),
//   add(1)(2)(3)(4)(5).getVal()
// );

function add(...x) {
  // 利用闭包保存一个数组
  const args = [...x]
  // 返回一个函数，来持续获取add的参数
  const res = function (...arguments) {
    args.push(...arguments)
    // console.log(args);
    return res
  }
  // 调用这个getVal来获取add结果
  res.getVal = function () {
    return args.reduce((a,b)=> a+b)
  }
  // 将这个闭包函数返回
  return res
}

// 通用实现
function currying1(fn, ...rest) {
  return function(...args) {
  	return fn(...rest, ...args);
  }
}

function sum(a, b, c, d) {
  console.log(a + b + c + d)
}
const adds = currying1(sum,0);
adds(1, 23, 4);

// 执行结果

// 递归
const _add = function (a,b,c,d,e) {
  return a+b+c+d+e
}
const __add = currying(_add, 1)
console.log(__add(1)(2)(3)(3));

function currying(fn) {
  // 首先获取函数需要的参数长度
  const length = fn.length
  // 获取参数中除了第一个函数的其余参数
  const args = Array.prototype.splice.call(arguments, 1)
  // 返回一个函数
  const curry = function () {
    // 把参数添加进闭包[]
    args.push(...arguments)
    // 判断是否收集完成
    if (args.length<length) {
      return curry
    } else {
      return fn(...args)
    }
  }
  return curry
}