# 侧边栏层级样式优化 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 为 VuePress 默认侧边栏的 4 级目录添加灰阶渐变颜色、递减动画速度、级联展开效果和分层悬停/激活样式。

**Architecture:** 纯 CSS 方案，仅修改 `web/.vuepress/theme2/styles/index.scss`。通过 `.vp-sidebar-children` 嵌套深度检测层级，替换现有的扁平 sidebar 样式规则。

**Tech Stack:** SCSS, VuePress 2 默认主题 CSS 覆盖

**Key DOM insight:** VuePress `VPSidebarItem.vue` 只在 `depth === 0` 时添加 `.vp-sidebar-heading` 类。嵌套的子分组（depth >= 1）都是 `:not(.vp-sidebar-heading)`。因此层级检测必须基于 `.vp-sidebar-children` 的嵌套层数，而非 `.vp-sidebar-heading` 类。

DOM 结构：
```
.vp-sidebar
  > ul.vp-sidebar-items
    > li.vp-sidebar-item.vp-sidebar-heading    ← L1 (depth=0, 可展开的分组)
      > ul.vp-sidebar-children
        > li.vp-sidebar-item:not(.heading)     ← L2 叶子 (depth=1)
        > li.vp-sidebar-item:not(.heading)     ← L2 分组 (depth=1, 有 .vp-sidebar-children)
          > ul.vp-sidebar-children
            > li.vp-sidebar-item:not(.heading) ← L3 叶子 (depth=2)
            > li.vp-sidebar-item:not(.heading) ← L3 分组 (depth=2)
              > ul.vp-sidebar-children
                > li.vp-sidebar-item:not(.heading) ← L4 叶子 (depth=3)
```

---

### Task 1: 替换侧边栏分组标题（L1 heading）样式

**Files:**
- Modify: `web/.vuepress/theme2/styles/index.scss:213-234`

替换现有的 `.vp-sidebar-item.vp-sidebar-heading` 和 `:hover` 规则。L1 heading 保持深色加粗，添加左侧色条和分层悬停效果。

- [ ] **Step 1: 替换 L1 heading 基础样式和悬停效果**

将 `index.scss` 第 213-234 行（从 `/* ---- 侧边栏分组标题 ---- */` 到 `.vp-sidebar-item.vp-sidebar-heading.collapsible { ... }`）替换为：

```scss
/* ---- 侧边栏分组标题 (L1 heading) ---- */
.vp-sidebar-item.vp-sidebar-heading {
  font-family: var(--font-family-heading);
  font-weight: 700;
  font-size: 1.05em;
  color: var(--vp-c-text);
  padding-block: 0.5rem;
  padding-inline: 1.25rem 1.5rem;
  border-inline-start: 3px solid transparent;
  transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  margin-right: 0.5rem;
}

.vp-sidebar-item.vp-sidebar-heading:hover {
  color: var(--vp-c-accent);
  background: var(--vp-c-accent-soft);
  border-inline-start-color: rgba(37, 99, 235, 0.25);
}

html[data-theme='dark'] .vp-sidebar-item.vp-sidebar-heading:hover {
  border-inline-start-color: rgba(194, 65, 77, 0.25);
}

.vp-sidebar-item.vp-sidebar-heading.collapsible {
  cursor: pointer;
}
```

- [ ] **Step 2: 在浏览器中验证 L1 heading 样式**

Run: `cd /home/ouyangjiahong/codes/cislunarspace/web && npm run docs:dev`
验证：打开任意有侧边栏的页面（如「研究前沿」），检查：
- 顶级分组标题颜色为 `#1e293b`（浅色）/ `#d1d5db`（深色）
- 左侧色条为 3px solid transparent
- 悬停时色条变蓝（浅色）/ 变红（深色），文字变强调色
- 深色/浅色主题都正确

- [ ] **Step 3: Commit**

```bash
git add web/.vuepress/theme2/styles/index.scss
git commit -m "feat(sidebar): L1 heading with left border accent on hover"
```

---

### Task 2: 添加层级感知的子项样式（L2/L3/L4）

**Files:**
- Modify: `web/.vuepress/theme2/styles/index.scss:245-275`

替换现有的扁平子项样式，按 `.vp-sidebar-children` 嵌套深度区分 L2/L3/L4 的颜色、字重、字号和色条宽度。

- [ ] **Step 1: 替换子项基础样式和悬停效果**

将 `index.scss` 第 245-275 行（从 `/* ---- 侧边栏子项 ---- */` 到最后一个 `.active` 规则）替换为：

```scss
/* ---- 侧边栏子项：按层级深度区分 ---- */

/* L2 叶子（一层 .vp-sidebar-children 嵌套，无更深层） */
.vp-sidebar-children > .vp-sidebar-item:not(.vp-sidebar-heading) {
  font-size: 0.98em;
  font-weight: 400;
  color: #334155;
  padding-block: 0.35rem;
  padding-inline: 2rem 1rem;
  border-inline-start: 2.5px solid transparent;
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  margin-right: 0.5rem;
  transition: color 0.2s ease, background 0.2s ease, border-color 0.25s ease, padding-left 0.28s var(--ease-out-expo);
}

.vp-sidebar-children > .vp-sidebar-item:not(.vp-sidebar-heading).auto-link:hover {
  color: var(--vp-c-accent);
  background: var(--vp-c-accent-soft);
  padding-left: calc(2rem + 4px);
}

html[data-theme='dark'] .vp-sidebar-children > .vp-sidebar-item:not(.vp-sidebar-heading) {
  color: #b0b8c1;
}

/* L3 叶子（两层嵌套） */
.vp-sidebar-children .vp-sidebar-children > .vp-sidebar-item:not(.vp-sidebar-heading) {
  font-size: 0.94em;
  font-weight: 400;
  color: #475569;
  padding-inline: 2.5rem 1rem;
  border-inline-start: 2px solid transparent;
  transition: color 0.2s ease, background 0.2s ease, border-color 0.22s var(--ease-out-expo), padding-left 0.22s var(--ease-out-expo);
}

.vp-sidebar-children .vp-sidebar-children > .vp-sidebar-item:not(.vp-sidebar-heading).auto-link:hover {
  color: var(--vp-c-accent);
  background: var(--vp-c-accent-soft);
  padding-left: calc(2.5rem + 3px);
}

html[data-theme='dark'] .vp-sidebar-children .vp-sidebar-children > .vp-sidebar-item:not(.vp-sidebar-heading) {
  color: #9ca3af;
}

/* L4 叶子（三层嵌套） */
.vp-sidebar-children .vp-sidebar-children .vp-sidebar-children > .vp-sidebar-item:not(.vp-sidebar-heading) {
  font-size: 0.92em;
  font-weight: 400;
  color: #64748b;
  padding-inline: 3rem 1rem;
  border-inline-start: 1.5px solid transparent;
  transition: color 0.18s ease-out, background 0.18s ease-out, border-color 0.18s ease-out, padding-left 0.18s ease-out;
}

.vp-sidebar-children .vp-sidebar-children .vp-sidebar-children > .vp-sidebar-item:not(.vp-sidebar-heading).auto-link:hover {
  color: var(--vp-c-accent);
  background: var(--vp-c-accent-soft);
  padding-left: calc(3rem + 2px);
}

html[data-theme='dark'] .vp-sidebar-children .vp-sidebar-children .vp-sidebar-children > .vp-sidebar-item:not(.vp-sidebar-heading) {
  color: #9ca3af;
}

/* ---- 侧边栏激活项（所有层级通用 accent 色）---- */
.vp-sidebar-item:not(.vp-sidebar-heading).active {
  border-inline-start-color: var(--vp-c-accent);
  color: var(--vp-c-accent);
  background: var(--vp-c-accent-soft);
  font-weight: 600;
}
```

- [ ] **Step 2: 在浏览器中验证子项层级**

Run: `cd /home/ouyangjiahong/codes/cislunarspace/web && npm run docs:dev`
验证：导航到有深层目录的页面（如「术语表」或「研究前沿」），检查：
- L2 项：颜色 `#334155`，左侧色条 2.5px，悬停右移 4px
- L3 项：颜色 `#475569`，左侧色条 2px，悬停右移 3px
- L4 项：颜色 `#64748b`，左侧色条 1.5px，悬停右移 2px
- 激活项：蓝色文字（浅色）/ 红色文字（深色）+ accent-soft 背景
- 深色主题下颜色正确

- [ ] **Step 3: Commit**

```bash
git add web/.vuepress/theme2/styles/index.scss
git commit -m "feat(sidebar): level-aware child item styles with depth-based selectors"
```

---

### Task 3: 添加级联展开动画和分层动画速度

**Files:**
- Modify: `web/.vuepress/theme2/styles/index.scss:277-280`

替换现有的展开/收起动画规则，添加 `@keyframes sidebarCascadeIn` 和分层动画速度。

- [ ] **Step 1: 添加级联动画 keyframes 和分层展开速度**

将 `index.scss` 第 277-280 行（从 `/* ---- 侧边栏展开/收起动画 ---- */` 到 `.vp-sidebar-children` 规则结尾）替换为：

```scss
/* ---- 侧边栏展开/收起动画：按层级分层速度 ---- */
@keyframes sidebarCascadeIn {
  from {
    opacity: 0;
    transform: translateX(-8px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* L1 展开速度（0.35s） */
.vp-sidebar > .vp-sidebar-items > .vp-sidebar-item > .vp-sidebar-children {
  transition: opacity 0.35s var(--ease-out-expo), transform 0.35s var(--ease-out-expo);
}

/* L2 展开速度（0.28s） */
.vp-sidebar-children > .vp-sidebar-item > .vp-sidebar-children {
  transition: opacity 0.28s var(--ease-out-expo), transform 0.28s var(--ease-out-expo);
}

/* L3 展开速度（0.22s） */
.vp-sidebar-children .vp-sidebar-children > .vp-sidebar-item > .vp-sidebar-children {
  transition: opacity 0.22s var(--ease-out-expo), transform 0.22s var(--ease-out-expo);
}

/* 级联子项逐项延迟 */
@media (prefers-reduced-motion: no-preference) {
  .vp-sidebar-children > .vp-sidebar-item:nth-child(1) { animation-delay: 0ms; }
  .vp-sidebar-children > .vp-sidebar-item:nth-child(2) { animation-delay: 30ms; }
  .vp-sidebar-children > .vp-sidebar-item:nth-child(3) { animation-delay: 60ms; }
  .vp-sidebar-children > .vp-sidebar-item:nth-child(4) { animation-delay: 90ms; }
  .vp-sidebar-children > .vp-sidebar-item:nth-child(5) { animation-delay: 120ms; }
  .vp-sidebar-children > .vp-sidebar-item:nth-child(6) { animation-delay: 150ms; }
  .vp-sidebar-children > .vp-sidebar-item:nth-child(7) { animation-delay: 180ms; }
  .vp-sidebar-children > .vp-sidebar-item:nth-child(8) { animation-delay: 210ms; }
  .vp-sidebar-children > .vp-sidebar-item:nth-child(9) { animation-delay: 240ms; }
  .vp-sidebar-children > .vp-sidebar-item:nth-child(10) { animation-delay: 270ms; }
  .vp-sidebar-children > .vp-sidebar-item:nth-child(n+11) { animation-delay: 300ms; }

  .vp-sidebar-children > .vp-sidebar-item {
    animation: sidebarCascadeIn 0.25s var(--ease-out-expo) both;
  }
}
```

- [ ] **Step 2: 更新箭头动画为分层速度**

将现有箭头动画规则（Task 1 之后紧跟在 collapsible 规则后面的部分）替换为：

```scss
/* 折叠箭头动画：按层级递减速度 */
.vp-sidebar > .vp-sidebar-items > .vp-sidebar-item > p .arrow,
.vp-sidebar > .vp-sidebar-items > .vp-sidebar-item > a .arrow {
  transition: transform 0.35s var(--ease-out-expo);
}

.vp-sidebar-children > .vp-sidebar-item > p .arrow,
.vp-sidebar-children > .vp-sidebar-item > a .arrow {
  transition: transform 0.28s var(--ease-out-expo);
}

.vp-sidebar-children .vp-sidebar-children > .vp-sidebar-item > p .arrow,
.vp-sidebar-children .vp-sidebar-children > .vp-sidebar-item > a .arrow {
  transition: transform 0.22s var(--ease-out-expo);
}

.vp-sidebar-item .arrow.down {
  transform: rotate(180deg);
}
```

注意：删除原有的统一 `.vp-sidebar-item .arrow` 和 `.vp-sidebar-item .arrow.down` 两条规则，替换为上面的分层版本。

- [ ] **Step 3: 在浏览器中验证动画效果**

Run: `cd /home/ouyangjiahong/codes/cislunarspace/web && npm run docs:dev`
验证：
- 展开 L1 分组：子项逐个淡入滑入，速度 0.35s
- 展开 L2 子分组：更快，0.28s
- 展开 L3 子分组：更快，0.22s
- 箭头旋转速度与展开同步递减
- 术语表（50+ 项）展开不会卡顿
- 设置 `prefers-reduced-motion: reduce` 后级联动画消失

- [ ] **Step 4: Commit**

```bash
git add web/.vuepress/theme2/styles/index.scss
git commit -m "feat(sidebar): cascade expand animation with level-based speed"
```

---

### Task 4: 整体验证和构建测试

**Files:**
- Modify: `web/.vuepress/theme2/styles/index.scss` (仅微调，如有需要)

- [ ] **Step 1: 完整构建验证**

Run: `cd /home/ouyangjiahong/codes/cislunarspace/web && npm run docs:build`
验证：构建成功，无 SCSS 编译错误。

- [ ] **Step 2: 在多个页面验证侧边栏**

在 dev server 中检查以下页面区域的侧边栏：
- `/what-is-cislunarspace/` — 2 级，浅层目录
- `/glossary/` — 最多 4 级，大量叶子项（验证级联动画在大列表下不卡顿）
- `/research-frontiers/` — 4 级深度，验证所有层级样式
- `/cislunar-orbits/` — 3 级，验证中间层级
- `/en/` 前缀的英文页面 — 验证英文侧边栏同样生效
- 深色/浅色主题切换 — 验证所有层级颜色正确
- `/space-news/` — 验证 SpaceNewsSidebar 未受影响

- [ ] **Step 3: 移动端验证**

在浏览器 DevTools 中切换到移动端视口（< 960px），验证：
- 移动端侧边栏行为未受影响
- 层级样式在移动端抽屉中同样可见

- [ ] **Step 4: Final commit**

```bash
git add web/.vuepress/theme2/styles/index.scss
git commit -m "feat(sidebar): complete 4-level hierarchy styling with depth-based colors, animations, and hover states"
```
