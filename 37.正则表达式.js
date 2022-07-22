// 提取数字
~function extractDigit(str) {
  console.log(str.match(/\d+/g));
}('123m21312m312lk31o23i123o12')


console.log(
  'abc'.match(/(?=b)(?<=a)/)
);console.log(
  'abc'.match(/(?<=a)(?=b)/)
);
console.log(
'aaaa'.match(/a+/g),
'aaaa'.match(/(a+)(a+)/g) ,// 第一个括号先尽可能多匹配，然后后面的再匹配
'aaaa'.match(/(a+)+/g),// 括号内量词先贪婪匹配，然后外面量词再匹配
'aaaa'.match(/a+?/g), // ["a", "a", "a", "a"]
'1aaa2aa2'.match(/(a+?)(a+?)/g), //  ["aa", "aa"]
'aaaa'.match(/(a+?)+?/g), //  ["a", "a", "a", "a"]
);
