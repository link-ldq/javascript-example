function NumOfTriangle(edges) {
  // write code here
  var l = {};
  for (let i = 0; i < edges.length; i++) {
    for (let j = i + 1; j < edges.length; j++) {
      for (let k = j + 1; k < edges.length; k++) {
        console.log(edges[i], edges[j], edges[k]);
        if (isthree(edges[i], edges[j], edges[k])) {
          l[[edges[i], edges[j], edges[k]].sort().toString()] = 1;
        }
      }
    }
  }
  console.log(l);
  return Object.keys(l).length;
}
console.log('====================================');
console.log(NumOfTriangle([2, 3, 4, 2]));
console.log('====================================');
function isthree(a, b, c) {
  return a + b > c ? (a + c > b ? (b + c > a ? true : false) : false) : false;
}
