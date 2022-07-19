var a = [];
for (var i = 0; i < 10; i++) {
    console.log(i);
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 6

for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}
