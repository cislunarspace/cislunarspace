/**
 * 内容管理器前端 Vite 配置
 * 构建输出到 admin/web/dist，由后端 Express 静态托管。
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: __dirname,
  base: '/',
  plugins: [vue()],
  build: {
    outDir: path.join(__dirname, 'dist'),
    emptyOutDir: true,
  },
  server: {
    // 仅供本地开发使用，生产由 Express 托管 dist
    port: 5175,
  },
});
