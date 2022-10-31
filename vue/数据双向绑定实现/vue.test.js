import { expect, assert, describe, it, test } from 'vitest';
import Vue from './vue';
const vm = new Vue({
  el: '#app',
  data() {
    return {
      name: 'ldq',
      more: {
        like: '一键三连',
      },
    };
  },
});
describe('Vue', () => {
  it('初始化 $data', () => {
    expect(vm.$data.name).toBe('ldq');
    expect(vm.$data.more).toStrictEqual({ like: '一键三连' });
  });
});
