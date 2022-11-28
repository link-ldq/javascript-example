// 状态初始化
import { isFunction } from './utils';
import { observer } from './observer/index';
export function initState(vm) {
  const opt = vm.$options;
  if (opt.data) {
    initDate(vm);
  }
  // if (opt.computed) {
  //   initComputed(vm);
  // }
  // if (opt.watch) {
  //   initWatch(vm);
  // }
}
function proxy(vm, source, key) {
  Object.defineProperty(vm, key, {
    get() {
      return vm[source][key];
    },
    set(newV) {
      vm[source][key] = newV;
    },
  });
}
function initDate(vm) {
  let data = vm.$options.data;
  // vue2 中 会讲data中的数据进行数据劫持 Object.defineProperty
  data = vm._data = isFunction(data) ? data.call(vm) : data;
  for (let key in data) {
    proxy(vm, '_data', key);
  }
  observer(data);
}
