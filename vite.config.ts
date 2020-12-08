import type { SharedConfig } from "vite";
import babel from 'vite-babel-plugin';
import path from 'path';

export default {
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  plugins: [
    babel(),
  ]
} as SharedConfig;
