// 阶乘
function iterative_jieCheng(number) {
  if (number == 0) return undefined;
  let res = 1;
  for (let i = 1; i <= number; i++) res = res * i;
  return res;
}

function recursion_jieCheng(number) {
  if (number == 0) return 0;
  return number * recursion_jieCheng(number - 1);
}
console.log('迭代实现：5的阶乘：', iterative_jieCheng(5));
console.log('递归实现：6的阶乘：', recursion_jieCheng(6));

// 斐波那契数列
function iterative_feiBoNaQie(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = n;
  for (let i = 2; i <= n; i++) {
    // n >= 2
    fibN = fibNMinus1 + fibNMinus2; // f(n-1) + f(n-2)
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
  }
  return fibN;
}
function recursion_feiBoNaQie(n) {
  if (n < 1) return 0; // {1}
  if (n <= 2) return 1; // {2}
  return recursion_feiBoNaQie(n - 1) + recursion_feiBoNaQie(n - 2); // {3}
}
function memization_recursion_feiBoNaQie(n) {
  const mcmo = [0, 1];
  const fibonacci = n => {
    if (mcmo[n] != null) return mcmo[n];
    return (mcmo[n] = fibonacci(n - 1, mcmo) + fibonacci(n - 2, mcmo));
  };
  return fibonacci;
}
console.log('迭代实现：斐波那契数列：', iterative_feiBoNaQie(6));
console.log('递归实现：斐波那契数列：', recursion_feiBoNaQie(6));
console.log(
  '递归实现：缓存的斐波那契数列：',
  memization_recursion_feiBoNaQie()(6)
);
