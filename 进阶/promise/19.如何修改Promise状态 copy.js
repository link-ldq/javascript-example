let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('run');
    resolve(1)
  }, 500)
})
p.then(res => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(res);
      resolve(2)
    }, 500)
  })
}).then((res) => {
  return Promise.reject(new Promise((res) => {
      res('sb')
  }))
}).catch(err => {
  console.warn(err);
})