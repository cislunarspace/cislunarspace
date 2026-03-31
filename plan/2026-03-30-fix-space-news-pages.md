# 修复 Space News 页面问题

## 目标
修复 Space News 相关页面的多重问题：内容不正确、双重页脚、导航/侧边栏异常、排版问题。

## 问题分析

### 1. `__pages` 不存在导致文章列表为空
- `SpaceNewsHome.vue:108` 和 `SpaceNewsArchive.vue:82` 使用 `(page.value as any).__pages`
- VuePress 2 的 `usePageData()` 只返回当前页面数据，不含 `__pages` 属性
- 导致 `articles` 始终为空数组 → 首页和存档页没有文章

### 2. 双重渲染（Layout + 自定义组件同时显示）
- `layouts/SpaceNewsHome.vue` 渲染了 `<Layout>` (默认主题完整布局) + `<SpaceNewsHomeContent />` 
- 默认 Layout 会渲染 markdown 内容（README.md 正文）
- SpaceNewsHomeContent 也渲染了自己的 hero + 文章列表
- 结果：页面同时出现 markdown 正文和自定义内容

### 3. 双重页脚
- Layout 的 `#page-bottom` 插槽放了 `<Footer />`
- SpaceNewsHomeContent 组件内部也有 footer 区域
- 单篇文章页由默认 Layout 渲染，底部也有 Footer

### 4. 侧边栏干扰
- Space News 页面使用自定义全宽布局，但默认 Layout 的侧边栏仍然出现
- 自定义内容在 Layout 之外渲染，导致定位/层级问题

## 任务列表
- [ ] 1. 修复文章列表数据源：使用 `useRoutes()` 获取所有页面路由信息
- [ ] 2. 重构 SpaceNewsHome 布局：不嵌套默认 Layout，独立渲染
- [ ] 3. 重构 SpaceNewsArchive 布局：同上
- [ ] 4. 修复单篇文章页：隐藏侧边栏、添加返回导航
- [ ] 5. 清理双重页脚
- [ ] 6. 构建验证

## 备注
- 需要确认 `useRoutes()` 或其他 API 能否提供 frontmatter 数据
- SpaceNewsHome/Archive 页面的 frontmatter 设置了 `layout: SpaceNewsHome` / `layout: SpaceNewsArchive`，VuePress 2 会使用对应布局
- 单篇文章没有指定 layout，使用默认 Layout，需要处理 sidebar 和导航
