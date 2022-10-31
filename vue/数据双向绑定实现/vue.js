// Vue 数据响应式原理
// 1. 初始化data
// 2. 数据劫持 - 使用Obersver 监听实例里面的数据
class Vue {
  constructor(data_instance) {
    this.$data = data_instance.data();
    console.log(this.$data);
    Observer(this.$data);
  }
}
function Observer(data_instance) {
  // 跳出递归
  if (!data_instance || typeof data_instance !== 'object') return;
  // 便利对象
  Object.keys(data_instance).forEach(key => {
    // 获取value
    const value = data_instance[key];
    // 递归 - 子属性数据劫持
    Observer(value);
    // 增加响应式
    Object.defineProperty(data_instance, key, {
      enumerable: true,
      configurable: true,
      get() {
        console.log('get', value);
        return value;
      },
      set(newValue) {
        if (newValue !== value) {
          value = newValue;
          console.log('set', value, newValue);
          Observer(newValuevalue);
        }
      },
    });
  });
}
function Compile(el, vm) {
  vm.$el = document.querySelector(el);
  const fragment = document.createDocumentFragment();
  let child;
  while ((child = vm.$el.firstChild)) {
    fragment.append(child);
  }
  console.log(fragment);
  console.log(fragment.childNodes);
}

// export default Vue;
