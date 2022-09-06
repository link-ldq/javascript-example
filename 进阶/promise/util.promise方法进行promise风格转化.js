// 引入 util 模块
const util = require('util');
// 引入 fs 模块
const fs = require('fs');
// 返回一个新的函数
let mineReadFile = util.promisify(fs.readFile);

mineReadFile('./content.txt').then(res=>{
  console.log(res.toString());
})