setTimeout(() => {
  let n = Math.random(1, 100) * 100;
  n = Number(n.toString().split('.')[0])
  if (n > 30) {
    console.log(n, 'false');
  } else {
    console.log(n, 'yes');
  }
},1000)

const p = new Promise((resolve,reject) => {
  setTimeout(() => {
    let n = Math.random(1, 100) * 100;
    n = Number(n.toString().split('.')[0])
    if (n > 30) {
      resolve([n, 'false'])
    } else {
      reject([n, 'yes']);
    }
  },1000)
})
p.then((...res) => {
  console.log(res);
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve('link')
      },1000)
    })
}).then(res => {
  console.log(res);
}).catch((...res) => {
  console.log(res);
})