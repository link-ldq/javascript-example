// pormise.all
let p1 = new Promise((resolve, reject) => {
  resolve('p1')
})
let p2 = new Promise((resolve, reject) => {
  resolve('p2')
})
let p3 = new Promise((resolve, reject) => {
  reject('p3')
})
let p4 = new Promise((resolve, reject) => {
  reject('p4')
})

Promise.all([p1, p2, p3, p4]).then(res => {
  console.log('all', res); 
}).catch(err => {
  console.log(err);
})

Promise.race([p1, p2, p3, p4]).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})