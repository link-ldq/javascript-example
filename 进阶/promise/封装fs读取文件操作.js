function mineReadFile(path) {
  return new Promise((res, rej) => {
    require('fs').readFile(path, (err, data) => {
      if (err) rej(err)
      res(data)
    });
  })
}

mineReadFile('./ajax.js')
.then(val => {
    console.log(val);
}).catch(err => {
  console.log(err);
})