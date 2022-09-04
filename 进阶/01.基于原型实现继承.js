function Person(name = 'person') {
  this.category = 'human';
  this.legNum = 2;
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log('Hi,i am ' + this.name);
};

function inherit(subType, superType) {
  //在new inheritFn 的时候将构造函数指向子类
  function inheritFn() {
    this.constructor = subType;
  }
  inheritFn.prototype = superType.prototype;
  //将子类的原型指向父类原型的一个副本
  subType.prototype = new inheritFn();
}

//定义子类构造函数Pan
function Pan(name, age) {
  Person.call(this, name); //借用构造函数
  this.age = age;
}

//将子类Pan的原型指向父类Person原型的一个副本
//注意：要执行该动作后才能在Pan的prototype上定义方法，否则没用
inherit(Pan, Person);

Pan.prototype.sayAge = function () {
  console.log(this.age);
};

//定义子类构造函数Duan
function Duan(name, hairColor) {
  Person.call(this, name);
  this.hairColor = hairColor;
}

inherit(Duan, Person);

Duan.prototype.showHairColor = function () {
  console.log(this.hairColor);
};
//Pan的实例
var pan = new Pan('panfengshan', 27);
console.log(pan.name); //panfengshan
console.log(pan.age); //27
console.log(pan.category); //human
console.log(pan.legNum); //2

pan.sayHello(); //Hi,i am panfengshan
pan.sayAge(); //27

//Duan的实例
var duan = new Duan('duanyanan', 'black');
console.log(duan.name); //duanyanan
console.log(duan.hairColor); //black
console.log(pan.category); //human
console.log(pan.legNum); //2

duan.sayHello(); //Hi,i am duanyanan
duan.showHairColor(); //black
