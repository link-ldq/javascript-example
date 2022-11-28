let oldArrayMethods = Array.prototype;
export let arrayMethods = Object.create(Array.prototype);
let methods = ['push', 'shift', 'unshift', 'pop', 'reverses', 'sort', 'splice'];
methods.forEach(method => {
  // 用调用的
  arrayMethods[method] = function (...args) {
    console.log(method, '数组调用了');
    oldArrayMethods[method].call(this, ...args);
    let inserted;
    let ob = this.__ob__;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
      default:
        break;
    }
    // 如果有新增的值
    if (inserted) ob.observerArray(inserted);
  };
});
