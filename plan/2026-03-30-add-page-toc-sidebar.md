# 为 theme2 添加右侧页面提纲（TOC）边栏

## 目标
在 theme2 的 Layout 中添加右侧 TOC 提纲栏，自动提取当前页面的 h2-h3 标题并显示为可点击的目录导航。

## 背景
- `config.ts` 使用的是 `theme2`（Vue 3 + Composition API）
- `theme2/components/ExtraSidebar.vue` 只有微信等工具栏图标，没有页面提纲
- `theme` 目录（旧版 Vue 2）有 `PageSidebarToc.vue` / `PageSidebarTocLink.vue` 等组件，但未在 theme2 中使用
- `@vuepress/theme-default` 的 Layout 提供 `#page-top` / `#page-bottom` 等插槽，不提供 TOC 插槽
- VuePress 2 的 `usePage()` 返回的 PageData 不含 `headers` 字段（`PageBase` 只有 path/title/lang/frontmatter）
- 因此采用 DOM 提取方式：从 `[vp-content]` 中查询 h2/h3 元素获取标题数据

## 任务列表
- [x] 1. 在 theme2 中创建 `PageToc.vue` 组件，从 DOM 中提取 h2/h3 标题
- [x] 2. 实现提纲渲染逻辑：解析 h2/h3 层级、生成锚点链接、支持滚动高亮
- [x] 3. 将 PageToc 集成到 theme2 的 Layout.vue 中
- [x] 4. 添加样式：固定定位在右侧、滚动跟随、响应式隐藏
- [x] 5. 构建验证通过（`vuepress build .` 成功）

## 变更文件
- `web/.vuepress/theme2/components/PageToc.vue` — 新建，右侧 TOC 提纲组件
- `web/.vuepress/theme2/layouts/Layout.vue` — 引入 PageToc 组件

## 备注
- 使用 Vue 3 Composition API + `<script setup lang="ts">`
- 参考 `theme` 目录下旧版组件的视觉设计，保持一致
- 屏幕宽度 ≤ 1435px 时隐藏 TOC（与旧版行为一致）
- h3 归入对应 h2 下作为子项（groupHeaders 逻辑）
- 使用 `onContentUpdated` 钩子在页面切换后重新提取标题
- 使用 `requestAnimationFrame` 节流滚动事件处理
