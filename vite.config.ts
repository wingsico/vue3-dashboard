import type { SharedConfig } from "vite";
import path from 'path';

export default {
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
} as SharedConfig;
