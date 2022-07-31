const obj = { 选择器: { to: { toutiao: "FE Coder"} }, target: [1, 2, { name: 'byted'}]};
const __get = _get(obj, '选择器.to.toutiao', 'target[0]', 'target[2].name');
// , 'target[0]', 'target[2].name'
console.log(__get)

// output

function _get(obj, ...args) {
  const arr = args.map(str => {
    const strArr = str.replace('[','.').replace(']','').split('.')
    return strArr.reduce((ret, cur) => ret[cur], obj)
  })
  return arr
}

// console.log('1' == 1); // true
// console.log('1' === 1); // false

