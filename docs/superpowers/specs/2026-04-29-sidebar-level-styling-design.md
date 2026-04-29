# 侧边栏层级样式优化设计

> 日期：2026-04-29
> 状态：待实现

## 背景

VuePress 默认侧边栏的所有层级外观几乎一致，只有叶子页面的激活态有视觉区分。用户希望通过颜色和动画差异，让 4 级目录层次一目了然。

## 方案选择

**选定：方案 A — 同色系灰阶渐变**

通过从深到浅的灰色系区分 4 级目录，配合递减的动画速度和左侧色条宽度。不引入新色彩，在现有风格基础上增强。

备选方案 B（左侧色条 + 背景色块）因在词汇表等扁平列表中视觉噪声较大而未采纳。

## 设计详情

### 1. 层级颜色与字体系统

以 `.vp-sidebar-children` 嵌套深度区分 4 级：

| 层级 | 文字颜色 (浅色) | 文字颜色 (深色) | 字重 | 字号 | 左侧色条宽度 |
|------|-----------------|-----------------|------|------|-------------|
| L1（顶级分组标题） | `#1e293b` | `#d1d5db` | 700 | 1.05em | 3px solid |
| L2（二级分组） | `#334155` | `#b0b8c1` | 600 | 0.98em | 2.5px solid |
| L3（三级分组） | `#475569` | `#9ca3af` | 500 | 0.94em | 2px solid |
| L4（叶子页面） | `#64748b` | `#9ca3af` | 400 | 0.92em | 1.5px solid |

激活态统一使用 `--vp-c-accent`（浅色蓝 / 深色红）高亮，不受层级灰阶影响。

### 2. 动画效果

#### 2.1 展开/收起级联动画

子项逐个淡入滑入，每项递增 30ms 延迟，上限 300ms（10 项后不再递增）：

```scss
.vp-sidebar-children > .vp-sidebar-item:nth-child(1) { animation-delay: 0ms }
.vp-sidebar-children > .vp-sidebar-item:nth-child(2) { animation-delay: 30ms }
// ...
.vp-sidebar-children > .vp-sidebar-item:nth-child(n+11) { animation-delay: 300ms }
```

#### 2.2 不同层级动画速度

外层缓慢沉稳，内层快速轻盈：

| 层级 | 展开时长 | 缓动函数 |
|------|---------|---------|
| L1 | 0.35s | cubic-bezier(0.16, 1, 0.3, 1) |
| L2 | 0.28s | cubic-bezier(0.16, 1, 0.3, 1) |
| L3 | 0.22s | cubic-bezier(0.16, 1, 0.3, 1) |
| L4 | 0.18s | ease-out |

箭头旋转同步递减：L1 0.35s, L2 0.28s, L3 0.22s。

#### 2.3 悬停效果按层级区分

| 层级 | 悬停效果 |
|------|---------|
| L1 | 背景微亮 + 左侧色条变色（accent 透明度 0.25）+ 文字变强调色 |
| L2 | 背景微亮 + 微右移（padding-left +4px） |
| L3 | 背景微亮 + 微右移（padding-left +3px） |
| L4 | 仅背景微亮 + 右移（padding-left +2px，保持现有行为） |

#### 2.4 激活状态按层级区分

所有层级激活时使用 `--vp-c-accent`，表现形式不同：

| 层级 | 激活样式 |
|------|---------|
| L1-L3 | 左侧色条变为 accent 实色 + 文字变强调色 + 浅背景 |
| L4（叶子） | 保持现有行为：左侧色条 + 强调色文字 + accent-soft 背景 |

#### 2.5 无障碍

所有动画包裹在 `@media (prefers-reduced-motion: no-preference)` 中。

### 3. 实现策略

**纯 CSS 方案，不修改 Vue 组件。**

#### 3.1 层级检测选择器

```scss
// L1 heading：顶层直接子项
.vp-sidebar > .vp-sidebar-item.vp-sidebar-heading { }

// L2 heading：一层嵌套
.vp-sidebar-children .vp-sidebar-item.vp-sidebar-heading { }

// L3 heading：两层嵌套
.vp-sidebar-children .vp-sidebar-children .vp-sidebar-item.vp-sidebar-heading { }

// 叶子项按嵌套深度区分 L2/L3/L4
```

#### 3.2 修改文件

仅 `web/.vuepress/theme2/styles/index.scss`：
- 替换现有 `.vp-sidebar-heading` 和 `.vp-sidebar-item:not(.vp-sidebar-heading)` 规则
- 新增 `@keyframes sidebarCascadeIn` 级联动画
- 新增 `@keyframes sidebarArrowRotate` 箭头动画
- 新增 `@media (prefers-reduced-motion)` 包裹

不修改 `vars.scss`（层级颜色是结构性的，不是主题变量）。

#### 3.3 深色主题

通过 `[data-theme='dark']` 选择器覆盖层级颜色（见第 1 节深色列）。

#### 3.4 不影响的部分

- SpaceNewsSidebar（航天动态侧边栏）— 独立自定义组件
- 侧边栏显示/隐藏动画 — 保持 `--sn-sidebar-sync-duration`
- SidebarToggle 按钮
- 移动端行为

## 关键动画 keyframes

```scss
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
```

展开时子项通过 `.vp-sidebar-children` 的 `overflow: hidden` 配合 `max-height` 或 VuePress 默认的展开逻辑，叠加级联延迟实现逐项滑入。
