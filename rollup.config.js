import resolve from '@rollup/plugin-node-resolve';
import postcss from "rollup-plugin-postcss";
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  plugins: [resolve(), commonjs(), postcss({plugins:[]})]
};
