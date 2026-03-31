# 修复 Space News 侧边栏文字 + 多余页脚

## 目标
修复 Space News 左侧边栏提纲文字不显示的问题，以及首页/存档页顶部多余的页面说明和双重页脚。

## 问题分析

### 1. 侧边栏提纲文字不显示
- `gen-sidebar.js:52,58,68,75` 生成的 sidebar 对象使用 `"title"` 字段
- VuePress 2 的 SidebarConfig 要求使用 `"text"` 字段
- 导致年份分组标题（"2026"、"2025"等）和顶级标题（"Space News"）在侧边栏中为空白

### 2. 首页顶部多余的页面说明
- `SpaceNewsHome.vue` 布局嵌套了默认 `<Layout>`，后者渲染 README.md 的 markdown 正文
- 导致自定义 hero 区域上方多出一段说明文字

### 3. 双重页脚
- Layout 的 `#page-bottom` 插槽放了 `<Footer />`
- `SpaceNewsHomeContent` 组件内部也有 `<Footer />`
- 导致页脚出现两次

## 任务列表
- [x] 1. 修复 `gen-sidebar.js`：将所有 `"title"` 改为 `"text"`
- [x] 2. 重新生成 `sidebar.auto.json` 和 `space-news-articles.json`
- [x] 3. 修复 `SpaceNewsHome` 布局：隐藏默认 markdown 内容 + 移除重复 Footer
- [x] 4. 修复 `SpaceNewsArchive` 布局：隐藏默认 markdown 内容 + 移除重复 Footer
- [x] 5. 构建验证

## 备注
- 保留侧边栏导航功能，只修正字段名
- 隐藏默认内容通过 CSS `display: none` 实现（无 slot 可替换 markdown 渲染）
