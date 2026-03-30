# VuePress 1.x → 2.x 升级迁移

## 目标
将项目从 VuePress 1.9.10 升级到 VuePress 2.x，保持现有功能（i18n、自定义主题、插件、组件）全部正常工作。

## 当前状况
- VuePress 1.9.10 + Vue 2 + Webpack
- 12 个插件（多数为 1.x 专用）
- 自定义主题：extends @vuepress/theme-default，含 14 个 Vue 2 组件
- 2 个客户端组件：AiChat.vue (769行)、Forum.vue (829行)
- i18n：zh-CN + en-US，约 149 个 markdown 文件
- WeChat JS-SDK 分享集成
- Stylus 样式
- 侧边栏自动生成脚本

## 任务列表

### 阶段一：基础设施升级
- [ ] 1. 清理旧依赖，安装 VuePress 2.x 核心包（vuepress@next, @vuepress/client@next）
- [ ] 2. 创建 VuePress 2.x 风格的配置入口（config.ts → 使用 defineConfig4 从 @vuepress/cli）
- [ ] 3. 配置打包工具（Vite 为默认，或保留 Webpack 选项）
- [ ] 4. 迁移 navbar.ts / sidebar.ts 到 VP2 格式

### 阶段二：主题迁移
- [ ] 5. 创建 VP2 自定义主题目录结构（theme/index.ts, theme/layouts/ 等）
- [ ] 6. 迁移 Layout.vue → VP2 Layout（Vue 3 Composition API）
- [ ] 7. 迁移主题组件到 Vue 3（Navbar, NavLinks, Page, Footer 等 12 个组件）
  - `this.$site` → `useSiteData()`
  - `this.$page` → `usePageData()`
  - `this.$route` → `useRoute()`
  - `this.$withBase` → `withBase()`
  - `this.$lang` / `this.$localePath` → `useLang()` / `useLocalePath()`
- [ ] 8. 迁移 Stylus 样式（安装 @vuepress/plugin-stylus 或迁移到 CSS/SCSS）

### 阶段三：插件迁移
- [ ] 9. 替换/升级插件到 VP2 兼容版本：
  - `@vuepress/plugin-back-to-top` → VP2 版本
  - `@vuepress/plugin-google-analytics` → `@vuepress/plugin-google-analytics` VP2 版本
  - `@vuepress/plugin-medium-zoom` → VP2 版本
  - `vuepress-plugin-mathjax` → `markdown-it-katex` 或 `vuepress-plugin-md-enhance`
  - `vuepress-plugin-seo` → `@vuepress/plugin-seo` 或自定义实现
  - `vuepress-plugin-sitemap` → `@vuepress/plugin-sitemap` VP2 版本
  - `vuepress-plugin-baidu-autopush` → 可能需要自定义或找替代
  - `vuepress-plugin-tags` → 可能需要自定义或找替代
  - `vuepress-plugin-code-copy` → VP2 兼容版本
  - `vuepress-plugin-feed` → `vuepress-plugin-feed2` 或替代
  - `vuepress-plugin-img-lazy` → 检查 VP2 兼容性
- [ ] 10. 迁移 `extendPageData` → VP2 `extendsPage` 钩子

### 阶段四：客户端组件迁移
- [ ] 11. 迁移 AiChat.vue 到 Vue 3（769行，含 DeepSeek API 流式对话、KaTeX 渲染）
- [ ] 12. 迁移 Forum.vue 到 Vue 3（829行，含 localStorage 持久化论坛）
- [ ] 13. 迁移 enhanceApp.js 中的 WeChat JS-SDK 分享逻辑到 VP2 client.ts

### 阶段五：构建与验证
- [ ] 14. 迁移 gen-sidebar.js 脚本适配 VP2 构建流程
- [ ] 15. 迁移 dev proxy 配置（Webpack devServer → Vite server.proxy）
- [ ] 16. 更新 package.json scripts
- [ ] 17. 验证 dev 模式启动和页面渲染
- [ ] 18. 验证 build 输出
- [ ] 19. 检查所有页面的 i18n 切换、导航、侧边栏

## 风险与备注
- **工作量巨大**：14 个组件需要 Vue 2 → Vue 3 重写，建议逐步推进
- **部分插件无 VP2 版本**：需要自行实现或找替代方案（baidu-autopush, tags, feed）
- **Stylus 支持**：VP2 默认不包含 Stylus，需要额外配置或迁移到 SCSS
- **API Key 暴露**：config.ts 中有 DeepSeek API key 嵌在 dev proxy 里，迁移时注意安全
- **WeChat 分享**：依赖外部签名服务，逻辑可移植但路由 API 变化大
- **建议先跑通核心流程**（阶段一+二），再逐步迁移插件和复杂组件

## 参考资源
- [VuePress 2.x 迁移指南](https://v2.vuepress.vuejs.org/guide/migration.html)
- [VuePress 2.x 配置参考](https://v2.vuepress.vuejs.org/reference/config.html)
- [Vue 3 迁移指南](https://v3-migration.vuejs.org/)
