import babel from 'rollup-plugin-babel';
export default {
  input: 'index.js',
  output: {
    format: 'umd', // window.vue
    name: 'Vue',
    file: 'dist/vue.js',
    sourcemap: true, // es5 -> es6源码
  },
  plugins: [
    // 使用babel转化, 但是排除node——modules
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
