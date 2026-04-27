---
name: research-frontiers-publish
description: >-
  Manages cislunar space research frontiers content: creates new direction
  subtopic pages, institution pages, checks content consistency, and batch
  imports from paper lists. Use when the user asks to add research directions,
  add institutions, check research content, or import papers into the
  研究前沿 / research-frontiers section.
---

# 研究前沿内容管理

面向仓库 `web/research-frontiers/` 下的 **研究前沿** 栏目：智能体应**先分类、再创建、后校验**，确保中英文结构同步。

## 站点约定（必须遵守）

| 项目 | 规则 |
|------|------|
| 中文方向 | `web/research-frontiers/directions/<direction>/` |
| 英文方向 | `web/en/research-frontiers/directions/<direction>/`（同目录名） |
| 方向索引 | 每个方向目录下必须有 `README.md` 作为索引页 |
| 子方向 | 方向目录下的 `<slug>.md` 文件 |
| 排除 | 各层 **`README.md`** 仅为索引页，不算子方向内容 |
| 布局 | 研究前沿页面使用默认布局（无需指定 layout） |
| 配图 | 放在方向目录下的 `figures/` 子目录 |
| 模板 | 模板文件在 `scripts/research-frontiers-publish/templates/` |

## 研究方向分类（封闭枚举）

| # | 目录名 | 中文名称 | 英文名称 |
|---|--------|---------|---------|
| 1 | `orbit-design` | 轨道设计与优化 | Orbit Design & Optimization |
| 2 | `navigation` | 导航与定轨 | Navigation & Orbit Determination |
| 3 | `ssa` | 空间态势感知 | Space Situational Awareness |
| 4 | `communication` | 通信与信息网络 | Communication & Information Network |
| 5 | `reference-frame` | 时空基准与测量 | Spatiotemporal Reference & Measurement |
| 6 | `transportation` | 航天运输体系 | Space Transportation System |
| 7 | `formation-flying` | 编队飞行 | Formation Flying |
| 8 | `security-governance` | 安全与治理 | Security & Governance |
| 9 | `infrastructure` | 基础设施与经济 | Infrastructure & Economy |
| 10 | `simulation` | 仿真系统 | Simulation Systems |

**禁止新建上述 10 个以外的方向目录。** 如需新增方向，必须先修改此表和 sidebar 配置。

## 工作流一：新增子方向

```
[1] 识别目标方向（从 10 个方向中匹配）
 ↓
[2] 去重检查（grep 现有文件，确认无同主题页面）
 ↓
[3] 复制子方向模板，填入内容
 ↓
[4] 更新方向 README.md 的子方向导航表
 ↓
[5] 更新 sidebar.ts（中文，在对应方向的 children 中添加条目）
 ↓
[6] 更新 sidebar-en.ts（英文，同步添加）
 ↓
[7] 英文侧创建 placeholder 页面（如有需要）
 ↓
[8] 构建验证（npm run docs:build）
```

### 子方向页面 frontmatter

```yaml
---
title: {子方向中文名称}
description: {一句话描述}
tags: [tag1, tag2]
---
```

### 子方向页面正文结构

```markdown
# {子方向中文名称}

## 概述

{定义和研究范畴}

## 研究现状

{国内外研究进展}

## 关键技术

{核心技术挑战}

## 发展趋势

{未来方向}

## 参考文献

- [1] ...
```

## 工作流二：新增机构

```
[1] 去重检查（确认机构未收录）
 ↓
[2] 复制机构模板，填入内容
 ↓
[3] 更新 institutions/README.md
 ↓
[4] 更新 sidebar.ts（在 institutions children 中添加）
 ↓
[5] 更新 sidebar-en.ts（同步添加）
 ↓
[6] 英文侧创建 placeholder
 ↓
[7] 构建验证
```

## 工作流三：内容检查

```
[1] 扫描所有方向目录，确认 README.md 存在
 ↓
[2] 检查 sidebar.ts 条目与实际文件是否匹配
 ↓
[3] 验证 frontmatter 字段（title, description）
 ↓
[4] 检查内部链接有效性
 ↓
[5] 报告缺失的英文对应页面
 ↓
[6] 输出检查报告
```

## 工作流四：批量导入

```
[1] 解析论文列表（标题 → 方向分类）
 ↓
[2] 去重检查
 ↓
[3] 按方向分组，批量创建子方向页面
 ↓
[4] 批量更新方向 README.md 子方向导航表
 ↓
[5] 批量更新 sidebar.ts + sidebar-en.ts
 ↓
[6] 批量创建英文 placeholder
 ↓
[7] 构建验证
```

## 质量规则

- 每个方向必须有 README.md 索引页
- 子方向页面必须有 `title` 和 `description` frontmatter
- 英文 placeholder 必须有英文 `title` 和 `description`
- 同一方向内不得有重复主题
- 所有 sidebar 条目必须指向存在的文件
- 每次变更后必须通过构建验证

## 相关代码

| 文件 | 用途 |
|------|------|
| `web/.vuepress/sidebar.ts` | 中文侧边栏配置 |
| `web/.vuepress/sidebar-en.ts` | 英文侧边栏配置 |
| `web/.vuepress/sidebar-shared.ts` | 共享导览组 |
| `web/.vuepress/gen-sidebar.js` | 自动生成 sidebar.auto.json |
