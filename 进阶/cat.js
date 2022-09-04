// console.log("生成实例对象的原始模式：");
// var cat = {
//   name: "",
//   color: "",
// };

// var cat1 = {};
// cat1.name = "大毛";
// cat1.color = "黄色";

// var cat2 = {};
// cat2.name = "二毛";
// cat2.color = "绿色";

// console.log("=>");
// console.log(cat1);
// console.log(cat2);
// console.log();
// console.log();

// console.log("原始模式的改进：");
// console.log("=>");
// function Cat(name, color) {
//   return {
//     name: name,
//     color: color,
//   };
// }
// var cat = new Cat();
// var cat1 = Cat("ldq", "green");
// var cat2 = Cat("link", "red");
// console.log(cat1);
// console.log(cat2);
// console.log();
// console.log();

// console.log("构造函数模式：");
// console.log("=>");

// function Cat(name, color) {
//   this.name = name;
//   this.color = color;
// }
// var cat1 = new Cat("ldq", "green");
// var cat2 = new Cat("ldq", "green");
// console.log(cat1);
// console.log(cat2);
// console.log(cat1.constructor);
// console.log(Cat);
// console.log(cat1 instanceof Cat);
// console.log(cat1.constructor == Cat);

// console.log("Prototype模式: ");
// function Cat(name, color) {
//   this.name = name;

//   this.color = color;
// }

// Cat.prototype.type = "猫科动物";

// Cat.prototype.eat = function () {};
// var cat1 = new Cat("大毛", "黄色");

// var cat2 = new Cat("二毛", "黑色");

// console.log(cat1.type); // 猫科动物
// console.log(cat1.eat == cat2.eat); //false
// cat1.eat(); // 吃老鼠

// console.log(Cat.prototype.isPrototypeOf(cat2));
// console.log(cat2.hasOwnProperty("type"));
// console.log("name" in cat1);
// for (var prop in cat1) {
//   console.log(`cat1[${prop}]=` + cat1[prop]);
// }
// function Animal() {
//   this.species = "动物";
//   console.log(1);
// }
// // function Cat(name, color) {
// //   this.name = name;
// //   this.color = color;
// // }
// function Cat(name, color) {
//   Animal.apply(this, arguments);
//   this.name = name;
//   this.color = color;
// }
// // var cat1 = new Cat("大黄", "黄色");
// // cat1.prototype.eat = function () {};
// // console.log(cat1);
// // Cat.prototype = new Animal();
// // Cat.prototype.constructor = Cat;
// // var cat1 = new Cat("大猫", "黄色");
// // console.log(cat1.species);
// // console.log(cat1.name);
// // console.log(cat1.color);
// // console.log(Cat.constructor === Animal.constructor);
// // Cat.prototype.constructor = Cat;
// // console.log(Cat.prototype.constructor == Animal);
// // console.log(cat1.constructor == Cat.prototype.constructor);

// var F = function () {};
// F.prototype = Animal.prototype;
// Cat.prototype = new F();
// Cat.prototype.constructor = Cat;
// Animal.prototype.constructor();

// function extend(Child, Parent) {
//   var F = function () {};
//   F.prototype = Parent.prototype;
//   Child.prototype = new F();
//   Child.prototype.constructor = Child;
//   Child.uber = Parent.prototype;
// }
// extend(Cat, Animal);
// var cat1 = new Cat("大毛", "黄色");
// console.log(cat1.species);
// console.log(cat1.uber.constructor(), Animal.prototype.constructor());
const obj = [
  { a: 1 },
  { b: 0 },
  { c: null },
  { d: undefined },
  { f: "link" },
  {
    g: {
      b: 0,
      c: null,
      d: undefined,
    },
  },
];
function delFalseVal(obj) {
  obj.reduce((a, b) => {
    console.log(b);
    if (typeof b === "object" && b) {
      a.push(b);
    } else {
    }
    return a;
  }, []);
}
console.log(delFalseVal(obj));
