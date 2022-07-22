// var name = 'win';
// const obj = {
//     name: 'obj',
//     a: () => {
//         console.log(name);
//     }
// };
// obj.a()

// function outer() {
//     var name = 'outer';
//     console.log(name); // outer
//     this.inner = () => {
//         console.log(name); // outer
//     }
// }

// const out = new outer()
// out.inner();
//   for(var i = 0; i < 3; i++) {
//     ~function (i) {
//       setTimeout(function () {
//         console.log(i);
//       },100);
//     }(i)
//   }
// for(var i = 0; i < 3; i++) {
//     setTimeout(function(i) {
//         return function() {
//         		console.log(i);
//         }
//     }(i), 100);
// }

function create(fn, ...args) {
  const obj = {}
  Object.setPrototypeOf(obj,fn)
  const result = fn.call(obj, ...args)
  console.log('result:',result);
  return result instanceof Object ? result : obj
}
function Test(name) {
  this.name = name
}
const t = new Test('yck')
console.log(t) // { age: 26 }
console.log(t.name) // 'undefined'
const tt = create(Test,'tt')
console.log(tt) // { age: 26 }
console.log(tt.name) // 'undefined'