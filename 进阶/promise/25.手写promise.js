function Promise(executor) {
  // 添加属性
  this.PromiseState = 'pending';
  this.PromiseResult = null;
  // 声明一个属性
  this.callBacks = []
  // 保存实例对象得this值
  const self = this

  function resolve(data) {
    if (self.PromiseState != 'pending') return
    // 修改对象状态
    self.PromiseState = 'fulfilled'
    // 设置对象结果
    self.PromiseResult = data
    self.callBacks.forEach(f => {
      f.onResolve(data)
    })
  }
  function reject(data) {
    if (self.PromiseState != 'pending') return
    // 修改对象状态
    self.PromiseState = 'rejected'
    // 设置对象结果
    self.PromiseResult = data
    self.callBacks.forEach(f => {
      f.onRejected(data)
    })
  }

  try {
    // 同步调用 【执行器函数】
    executor(resolve, reject)
  } catch (err) {
    // 修改 promise 对象状态为 【失败】
    reject(err)
  }
}

Promise.prototype.then = function (onResolve, onRejected) {
  const self = this
  // 判断回调函数参数
  if (typeof onRejected !== 'function') {
    onRejected = reason => {
      throw reason
    }
  }
  if (typeof onResolve !== 'function') {
    onResolve = value => value;
  }
  return new Promise((resolve, reject) => {
    function callBack(cb) {
      try {
        // 获取回调函数的执行结果
        let result = onResolve(this.PromiseResult)
        // 判断
        if (result instanceof Promise) {
          // 如果是 Promise 类型对象
          result.then(v => {
            resolve(v)
          }, r => {
            reject(r)
          })
        } else {
          // 结果的对象状态为成功！
          resolve(result)
        }
      } catch (e) {
        reject(e)
      }
    }
    // 调用回调函数 PromiseState
    if (this.PromiseState == 'fulfilled') { 
      callBack(onResolve)
    }
    if (this.PromiseState == 'rejected') {
      callBack(onRejected)
    }
    if (this.PromiseState == 'pending') {
      this.callBacks.push({
        onResolve: function () { callBack(onResolve) },
        onRejected: function () { callBack(onRejected) }
      })
    }
  })
}

let p = new Promise((resolve, reject) => {
  // resolve('ok')
  // reject('ERROR')
  // throw "error";
  setTimeout(() => {
    resolve('ok')
  // throw "error";
  }, 1000)
})
let res = p.then(value => {
  throw 'fail'
  console.log('success', value);
}, reason => {
  console.warn('error：', reason);
})

console.log(res);