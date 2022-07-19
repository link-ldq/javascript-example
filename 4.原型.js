// es6类继承的super
class par {
  a = 1;
  constructor(a) {
    this.a = a;
    return a;
  }
  getA() {
    return this.a;
  }
}
class son extends par {
  constructor(name) {
    console.log(super(name));
  }
}
// const s = new son('link');

// 定义在Class里的方法定义在类上面还是原型上面？
const p = new par(1);
// console.log(p.getA());
// console.log(par.prototype.getA());
// console.log(p.constructor == par);
// console.log(new par(1));
// console.log(new par(1) == p);
// console.log('p:', p);
// console.log('p.constructor:', p.constructor);
// console.log('p.prototype:', p.prototype);
// console.log('p.__proto__:', p.__proto__);
// console.log('par.constructor:', par.constructor);
// console.log('par.prototype:', par.prototype);
// console.log('par.__proto__:', par.__proto__);

console.log(Function);
console.log(Function.prototype);
console.log([]);
console.log();

class Person {}
console.log(typeof Person.prototype); //Person{}
console.log(typeof Person.__proto__); //Person{}
console.log(Object.__proto__);
console.log(Function);
console.log(p.__proto__ == par.prototype); //Object
// console.log(typeof Function.prototype); // Function，这个特殊
// console.log(typeof Object.prototype); // Object
// console.log(typeof Function.prototype.prototype); //undefined
function per(a) {
  return a;
}
function newOperator(ctor) {
  if (typeof ctor !== 'function') {
    throw 'err';
  }
  newOperator.target = ctor;
  // 复制一个obj
  var newObj = Object.create(ctor.prototype);
  // 提取参数
  var argsArr = [].slice.call(arguments, 1);
  // 获取ctor函数返回结果
  var ctorReturnResult = ctor.apply(newObj, argsArr);
  console.log('c', ctorReturnResult);
  // 判断
  var isObj = typeof ctorReturnResult === 'object' && ctorReturnResult !== 'null';
  var isfun = typeof ctorReturnResult === 'function';
  if (isObj || isfun) {
    return ctorReturnResult;
  }
  return newObj;
}
const p2 = newOperator(per, { a: 1 });
console.log(p);
console.log(p2);

console.log(new per(20));
