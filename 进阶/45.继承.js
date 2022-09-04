/**
 * 继承
 * @param {*} name 
 * @param {*} age 
 */
console.log('继承');
function Person(name, age) {
		this.name = name;
  	this.age = age;
  	this.sayHello = function() {
    	console.log('hello');
    }
}

const p1 = new Person('张三', 11);
const p2 = new Person('李四', 26);
console.log(p1);
console.log(p2);

/**
 * 原型继承
 */
console.log('原型继承');
function SuperType() {
  this.property = true
}
SuperType.prototype.getSuperValue = function () {
  return this.property
}
// 继承SuperType
function SubType() {
  this.subProperty = false
}

SubType.prototype = new SuperType()

SubType.prototype.getSubValue = function () {
  return this.subProperty
}
const sub = new SubType()
console.log(sub);


/**
 * 借用构造函数继承
 */
console.log('借用构造函数继承');
function SuperType(property) {
  this.property = property
}
function SubType(property) {
  SuperType.call(this, property)
}
var instabce1 = new SubType(false)
console.log(instabce1.property);
var instabce2 = new SubType(true)
console.log(instabce2.property);



/**
 * 组合继承
 */
console.log('组合继承');
function SuperType(property) {
  this.property = property
}
SuperType.prototype.getSuperValue = function () {
	return this.property;
}
function SubType(property, subProperty) {
  SuperType.call(this, property)
  this.subProperty = subProperty
}
SubType.prototype = new SuperType(false)
SubType.prototype.getSubValue = function () {
  return this.subProperty
}

var instabce1 = new SubType(false)
console.log(instabce1.property);
var instabce2 = new SubType(true)
console.log(instabce2.property);

