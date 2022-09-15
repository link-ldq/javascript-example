const fs = require('fs')

// 回调版本
// fs.readFile('./content.txt', function (err, data) {
//   if (err) throw err
//   console.log(data.toString());
// })


// promise
const p = function (filePath, ...cb) {
  return new Promise((res, rej) => {
    fs.readFile(filePath, function (err, data) {
      if (err) rej(err)
      res(data)
    })
  }).then(res => {
    cb[0](res)
  }).catch(err => {
    cb[1](err)
  })
}
p('./content.txt', function (val) {
  console.log('success:', val.toString())
}, function (err) {
  console.log('err:', err)
})