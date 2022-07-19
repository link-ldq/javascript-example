// 1.
// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve();
//   console.log(2);
//   reject();
// });
// setTimeout(() => {
//   console.log(5);
// }, 0);
// promise
//   .then(() => {
//     console.log(3);
//   })
//   .then(() => {
//     console.log(6);
//   })
//   .catch(() => {
//     console.log(7);
//   });
// console.log(4);

// console.log(4);

// 4 1 3 2 6 5

// 2.
// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve();
//   console.log(2);
//   reject();
// });
// setTimeout(() => console.log(5), 0);
// promise
//   .then(() => console.log(3))
//   .then(() => console.log(6))
//   .catch(() => console.log(7));
// console.log(4);
// 4 1 2 3 5 6 7
// 答案是1,2,4,3,6,5
// 首先new Promise时候打印1和2，因为new Promise时候会立即执行传入的方法
// 然后后面代码都是异步代码，先将setTimeout的回调加入宏任务队列，再把promise.then放入到微任务队列，然后直接执行最后一句，打印4
// 这样宏任务代码执行完了，接下来开始执行微任务队列中的任务，由于promise resolve，因为promise resolve之后状态不会再改变，因此不会执行到reject的对调，所以打印3和6
// 微任务队列为空，再到宏任务队列中查找任务，找到setTimeout回调执行，打印5
// 调用栈、宏任务队列、微任务队列都为空，代码执行结束。

// 3.
// const first = () =>
//   new Promise((resolve, reject) => {
//     console.log(3);
//     let p = new Promise((resolve, reject) => {
//       console.log(7);
//       setTimeout(() => {
//         console.log(5);
//         resolve();
//       }, 0);
//       resolve(1);
//     });
//     resolve(2);
//     p.then((arg) => {
//       console.log(arg);
//     });
//   });
// first().then((arg) => {
//   console.log(arg);
// });
// console.log(4);
// 4 3 7 1 5 undefined 2
// 3, 7, 4, 1, 2, 5
// 首先定义first
// 然后执行first，然后执行new Promise传入的方法，先打印3
// 又new Promise，执行其中传入的方法，打印7
// 执行setTimeout，将回调放入宏任务队列
// 执行resolve(1)，将内部promise状态置为fullfilled，值为1
// 执行resolve(2)，将外部promise状态置为fullfilled，值为2
// 执行内部promise.then方法，将回调加入微任务队列
// 执行first().then，即外部的promise，将回调加入到微任务队列
// 调用栈为空，开始从微任务队列拿取任务，首先拿到内部promise的回调，打印其值1
// 然后从微任务队列中拿取外部的promise的回调，打印其值2
// 此时微任务队列为空，开始从宏任务队列中拿取任务，即setTimeout回调，打印5。
// 调用栈，宏任务队列和微任务队列都为空，执行结束。

// const p = new Promise((resolve, reject) => {
//   reject(1);
// });

// p.then(
//   (data) => {
//     console.log(1, 'resolve', data);
//   },
//   (data) => console.log(1, 'reject', data)
// );

// p.then(
//   (data) => console.log(2, 'resolve', data),
//   (data) => console.log(2, 'reject', data)
// );

// 执行结果
// 1 "resolve" "test"
// 2 "resolve" "test"

// var p = new Promise((resolve) => {});

// p.then((res, rej) => {
//   console.log(res);
//   res(100);
// }).then(
//   (data) => console.log('resolve', data),
//   (err) => console.log('reject', err)
// );

// 执行结果
// reject Error: test

// var p = new Promise((r) => {
//   throw new Error('test');
// });

// p.then(
//   () => ({ then: function (resolvePromise, rejectPromise) {} }),
//   (e) => ({
//     then: function (resolvePromise, rejectPromise) {
//       rejectPromise(1);
//     },
//   })
// ).then(
//   (data) => console.log('resolve', data),
//   (e) => console.log('reject', e)
// );

// 执行结果
// promise 处于pending状态

// const p1 = Promise.resolve(1);
// const p2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// Promise.all([p1, p2]).then(([result1, result2]) => {
//   console.log('resolve', result1, result2);
// });

// 执行结果
// resolve 1 2

// var p1 = Promise.reject(1);
// var p2 = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log(2);
//     resolve(2);
//   }, 1000);
// });

// Promise.race([p1, p2])
//   .then(
//     (data) => {
//       console.log('resolve', data);
//     },
//     (e) => {
//       console.log('reject', e);
//     }
//   )
//   .then((r) => {
//     console.log(r);
//   });

// 执行结果
// reject 1

// var p1 = Promise.reject(1);
// var p2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// Promise.allSettled([p1, p2]).then((data) => {
//   console.log('resolve', data);
// });

// 执行结果
// resolve[({ status: 'rejected', reason: 1 }, { status: 'fulfilled', value: 2 })];

// const task1 = () => {
//   return new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(1);
//   });
// };

// const task2 = () => {
//   return new Promise((resolve, reject) => {
//     console.log(2);
//     setTimeout(() => {
//       resolve(2);
//     }, 3000);
//   });
// };

// const task3 = () => {
//   return new Promise((resolve, reject) => {
//     console.log(3);
//     resolve(3);
//   });
// };

// // 顺序执行3个任务
// // task1().then(task2).then(task3);
// Promise.all([task1, task2, task3]);
// console.log(1);
// new Promise((resolve) => {
//   resolve();
//   console.log(2);
// }).then(() => {
//   console.log(3);
// });
// setTimeout(() => {
//   console.log(4);
// }, 0);
// console.log(5);

const readFile = function (fileName) {
  return new Promise((resolve, reject) => {
    console.log(fileName);
    setTimeout(() => {
      resolve(fileName);
    }, 1000);
  });
};

readFile('1.txt')
  .then((data) => {
    return readFile('2.txt');
  })
  .then((data) => {
    return readFile('3.txt');
  })
  .then((data) => {
    //...
  });
