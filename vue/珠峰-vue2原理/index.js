// options 为用户传入的选项
import { initMinxin } from './init';
function Vue(options) {
  this._init(options); // 初始化操作 组件
}
initMinxin(Vue);
export default Vue;
