function Promise(executor) {
  // 添加属性
  this.PromiseState = 'pending';
  this.PromiseResult = null;

  // 保存实例对象得this值
  const self = this
  // re
  function resolve(data) {
    // 修改对象状态
    self.PromiseState = 'fulfilled'
    // 设置对象结果
    self.PromiseResult = data
  }
  function reject(data) {
    // 修改对象状态
    self.PromiseState= 'rejected'
    // 设置对象结果
    self.PromiseResult = data
  }
  executor(resolve,reject)
}

Promise.prototype.then = function (onResolve,onRejected){}

// let PROMISE = 
let p = new Promise((resolve, reject) => {
  resolve('ok')
}) 
p.then(value => {
  console.log(value);
}, reason => { 
  console.log(reason);
})
