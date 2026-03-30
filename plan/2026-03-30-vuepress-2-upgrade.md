# VuePress 1.x → 2.x 升级迁移

## 目标
将项目从 VuePress 1.9.10 升级到 VuePress 2.x，保持现有功能（i18n、自定义主题、插件、组件）全部正常工作。

## 当前状况
- VuePress 2.0.0-rc.27 + Vue 3.5.31 + Vite 8
- 自定义主题继承 @vuepress/theme-default，通过 alias 覆盖 Layout
- i18n：zh-CN + en-US，191 个页面全部构建成功
- WeChat JS-SDK 分享集成（已迁移到 client.ts）
- 样式从 Stylus 迁移到 SCSS
- 侧边栏自动生成脚本已迁移到 ESM

## 任务列表

### 阶段一：基础设施升级
- [x] 1. 清理旧依赖，安装 VuePress 2.x 核心包
- [x] 2. 创建 VP2 配置入口（config.ts → defineUserConfig）
- [x] 3. 配置打包工具（Vite via @vuepress/bundler-vite）
- [x] 4. 迁移 navbar.ts / sidebar.ts 到 VP2 格式（collapsable→collapsible, path→link）

### 阶段二：主题迁移
- [x] 5. 创建 VP2 自定义主题（theme2/）继承 @vuepress/theme-default
- [x] 6. 通过 alias 覆盖 Layout.vue，注入 Footer 和 ExtraSidebar
- [x] 7. 自定义 SpaceNewsHome、SpaceNewsArchive 布局
- [x] 8. 样式从 Stylus 迁移到 SCSS

### 阶段三：插件迁移
- [x] 9. 保留的插件（VP2 兼容）：
  - `@vuepress/plugin-google-analytics` VP2 版本
  - `@vuepress/plugin-sitemap` VP2 版本
  - `@vuepress/plugin-back-to-top` 由 defaultTheme 内置
  - `@vuepress/plugin-medium-zoom` 由 defaultTheme 内置
- [x] 10. 暂时移除的插件（需后续替代）：
  - `vuepress-plugin-mathjax` → 待替换为 markdown-it-katex
  - `vuepress-plugin-seo` → 待自定义实现
  - `vuepress-plugin-baidu-autopush` → 待找替代
  - `vuepress-plugin-tags` → 待找替代
  - `vuepress-plugin-code-copy` → 待找 VP2 版本
  - `vuepress-plugin-feed` → 待找替代
  - `vuepress-plugin-img-lazy` → 待找替代

### 阶段四：客户端组件迁移
- [ ] 11. 迁移 AiChat.vue 到 Vue 3（769行，含 DeepSeek API 流式对话、KaTeX 渲染）
- [ ] 12. 迁移 Forum.vue 到 Vue 3（829行，含 localStorage 持久化论坛）
- [x] 13. WeChat JS-SDK 分享逻辑已迁移到 theme2/client.ts

### 阶段五：构建与验证
- [x] 14. gen-sidebar.js 已迁移到 ESM
- [x] 15. dev proxy 已迁移到 Vite server.proxy
- [x] 16. package.json scripts 已更新
- [x] 17. dev 模式启动正常（Vite dev server on port 8080）
- [x] 18. build 输出成功（191 页面，3.83s）
- [ ] 19. 浏览器验证所有页面渲染、i18n 切换、导航、侧边栏

## 暂时禁用的功能
- AiChat.vue 和 Forum.vue 组件（Vue 2 → Vue 3 迁移待做）
- 数学公式渲染（vuepress-plugin-mathjax → 需替换）
- SEO 元数据自动生成（vuepress-plugin-seo → 需替换）
- RSS Feed 输出
- 代码复制按钮
- 图片懒加载
- 百度自动推送
- 标签系统
