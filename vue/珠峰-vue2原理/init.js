// 表示在vue的基础上做一次混合操作
import { initState } from './state';
export function initMinxin(Vue) {
  Vue.prototype._init = function (options) {
    // el,data
    const vm = this;
    vm.$options = options;

    // 对数据进行初始化 watch computed props data...
    // vm.$options.data
    initState(vm);
  };
}
