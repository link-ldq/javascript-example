// function* foo() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
//   return 6;
// }
// const f = foo();
// console.log(f.next());

// Array.prototype.flat = function (dep = 1) {
// // 获取 需要操作的数组
//   const _array = this;
//   // 新建一个数组
//   const array = [];
//   // 遍历元素
//   _array.forEach((item, index) => {
//     // 判断是否为数组 且 是否需要 拍平
//     if (Array.isArray(item) && dep >= 1) {
//       // 把 falt() 拍平这个数组 加入array
//       array.push(...item.flat(dep - 1));
//     } else {
//       // 直接加入新数组
//       array.push(item);
//     }
//   });
//   // 返回
//   return array;
// };

// Array.prototype.flat = function (dep = 1) {
//   const _array = this;
//   const arr = [];
//   this.forEach(f => {
//     if (Array.isArray(f) && dep >= 1) {
//       arr.push(...f.flat(dep - 1));
//     } else {
//       arr.push(f);
//     }
//   });
//   return arr;
// };

// Array.prototype.flat = function (dep = 1) {
//   const arr = [];
//   this.forEach(f => {
//     let val = null;
//     if (!Array.isArray(f)) {
//       val = f;
//     } else if (dep == -1) {
//       val = f.flat(-1);
//     } else if (dep >= 1) {
//       val = f.flat(dep - 1);
//     }
//     arr.push(...val);
//   });
//   return arr;
// };

// const animals = ['🐷', ['🐶', '🐂'], ['🐎', ['🐑', ['🐲']], '🐛']];
// // animals.flat();
// console.log(animals.flat(-1));

let a = [];
console.log(a instanceof Array);
console.log(Array.prototype.isPrototypeOf(a));
console.log(Object.getPrototypeOf(a) == Array.prototype);
console.log(Object.prototype.toString.call(a) == '[object Array]');

for (var i = 1; i <= 5; i++) {
  // (function (v) {
  //   setTimeout(function timer() {
  //     console.log(v);
  //   }, 0);
  // })(i);
  setTimeout(
    function timer(j) {
      console.log(j);
    },
    0,
    i
  );
}

const str = /\{\{\s*(\S+)s* \}\}/;
let s = '我叫{{ name }}';
console.log(s.replace(str, 21));
