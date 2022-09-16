let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('run');
    resolve(100)
  }, 1000)
})
p.then(res => {
  console.log(res);
})