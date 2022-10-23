class Observer{
  constructor(data) {
    this.data = data
    if (!data || (typeof data !== 'object')) {
      return 
    }
    // 
    this.initOb(data)
  }
  initOb(data) {
    Object.keys(data).forEach(key => {
      this.defineReactive(data,key,data[key])
    })
  }
  defineReactive(data, key, val) {
  let that = this
    if (val && typeof val == 'object') {
      new Observer(val)
    }
    Object.defineProperty(data, key, {
      get() {
        return val
      },
      set(newV) {
        val = newV
        new Observer(val) 
        that.upDate(key,val)
      }
    })
  }
  upDate(key,val) {
    console.log('更新了',key,val);
  }
}
const data = {
  name: {
    a:1
  }
}
new Observer(data)

console.log(data.name);
data.name.a = 2

// 修改数组响应式
const ArrayPrototype = Array.prototype
const obArr = Object.create(ArrayPrototype)
['push', 'slice', 'pop'].forEach(f => {
  obArr[f] = function () {
    updateView()
    ArrayPrototype[f].call(this,...arguments)
  }
})
let val = []
if (Array.isArray(val)) {
  val.__proto__ = obArr
}