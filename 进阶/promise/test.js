function Promise(executor) {
  
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