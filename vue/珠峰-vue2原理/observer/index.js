import { isObject } from '../utils';
import { arrayMethods } from './array';

class Observer {
  // 对对象中的所有属性进行劫持
  constructor(data) {
    Object.defineProperty(data, '__ob__', {
      value: this,
      enumerable: false,
    });
    data.__ob__ = this;
    if (Array.isArray(data)) {
      // 数组劫持的逻辑
      // 对数组原来的方法进行改写, 切片编程 高阶函数
      data.__proto__ = arrayMethods;
      this.observerArray(data);
    } else {
      this.walk(data);
    }
  }
  // 对数组的数组 和 数组的对象再次劫持递归
  observerArray(data) {
    data.forEach(item => observer(item));
  }
  // 对象
  walk(data) {
    // 只获取私有属性
    Object.keys(data).forEach(key => {
      defineReative(data, key, data[key]);
    });
  }
}
// vue2会对对象进行遍历, 将每个属性 defineProperty进行劫持, 所以性能差
function defineReative(data, key, val) {
  observer(val);
  Object.defineProperty(data, key, {
    get() {
      return val;
    },
    set(newV) {
      observer(newV);
      val = newV;
    },
  });
}
export function observer(data) {
  // 如果是对象才观察
  if (!isObject(data)) {
    return;
  }
  // 默认最外层的data 必须是一个对象
  return new Observer(data);
}
