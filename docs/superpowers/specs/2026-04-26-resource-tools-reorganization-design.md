# 资源与工具栏目分类重构设计

## 概述

将"资源与工具"栏目的扁平结构重新组织为按工具类型分类的层级分组，同时补充缺失的工具页面，使栏目结构与 Glossary、Research Frontiers 等其他栏目风格一致。

## 目标

1. 侧边栏按工具类型分为 4 个可折叠分类组
2. 为所有在 README 中提及但尚无独立页面的工具创建页面
3. 中英文双语同步更新
4. README 重构为分类总览风格

---

## 新侧边栏结构

### 中文侧边栏（`sidebar.ts`）

```
资源与工具（数据、代码与数据集）
├── 仿真软件
│   ├── GMAT
│   └── STK
├── 核心算法库
│   ├── e2m2e
│   ├── scipy
│   ├── r2s2
│   ├── Orekit
│   ├── poliastro
│   ├── Basilisk
│   └── pykep
├── 数据资源
│   └── datasets
└── AI与云平台
    ├── 数字月球云平台
    ├── 月球科学多模态大模型 V2.0
    └── 月球与行星数据发布系统
```

### 英文侧边栏（`sidebar-en.ts`）

```
Resources & Tools (Data, Code & Datasets)
├── Simulation Software
│   ├── GMAT
│   └── STK
├── Core Algorithm Libraries
│   ├── e2m2e
│   ├── scipy
│   ├── r2s2
│   ├── Orekit
│   ├── poliastro
│   ├── Basilisk
│   └── pykep
├── Data Resources
│   └── datasets
└── AI & Cloud Platforms
    ├── Digital Lunar Cloud Platform
    ├── Lunar Science Multimodal LLM V2.0
    └── NAOC Lunar & Planetary Data System
```

---

## 需新建的页面

共 9 个工具页面（中英文各 9 个，共 18 个新文件）：

| 工具 | 文件路径 | 简介 |
|------|----------|------|
| GMAT | `resources-tools/gmat.md` | NASA 开源通用任务分析工具，支持轨道设计、姿态分析、轨迹优化等 |
| STK | `resources-tools/stk.md` | AGI（Ansys）商业空间仿真平台，提供高级分析可视化和报告 |
| Orekit | `resources-tools/orekit.md` | ESA 开源 flight dynamics 库，基于 Java（Python binding 可用） |
| poliastro | `resources-tools/poliastro.md` | 纯 Python 天体力学库，已归档维护（仅保留存档状态说明） |
| Basilisk | `resources-tools/basilisk.md` | JPL 开源航天器动力学仿真框架，C++ 核心 + Python 接口 |
| pykep | `resources-tools/pykep.md` | ESA 开源行星际轨迹设计库，基于 Galbio 等算法 |
| 数字月球云平台 | `resources-tools/digital-lunar.md` | 中国科学院月球探测数据云平台 |
| 月球科学多模态大模型 V2.0 | `resources-tools/llm.md` | 月球陨石坑识别等任务的 AI 多模态大模型 |
| 月球与行星数据发布系统 | `resources-tools/naoc-data.md` | 中国科学院国家天文台月球与行星科学数据发布平台 |

英文版路径：`en/resources-tools/` 下相同文件名。

---

## 页面模板规范

每个工具页面包含以下固定章节：

```
## 简介
（一句话说明工具定位）

## 基本信息
- 许可证：
- 来源：
- 官方文档：

## 主要功能
（Bullet list，3-8 条）

## 应用场景
（2-4 个典型用例）

## 官方资源
- 官网/文档：
- GitHub（如有）：
- 相关论文（如有）：
```

已有页面（e2m2e、scipy、r2s2、datasets）保持现有内容结构不变，仅确认是否需要补充上述标准化章节。

---

## README 重构

`resources-tools/README.md` 改为分类总览页，结构：

```
# 资源与工具

> 本栏目收录地月空间领域的仿真软件、核心算法库、数据资源和 AI/云平台工具。

## 仿真软件
（简要说明 + 工具列表卡片）

## 核心算法库
（简要说明 + 工具列表卡片）

## 数据资源
（简要说明 + datasets 页面入口）

## AI与云平台
（简要说明 + 工具列表卡片）
```

英文版 `en/resources-tools/README.md` 结构对应。

---

## 实施步骤

1. 更新 `sidebar.ts` 和 `sidebar-en.ts` 的分类结构
2. 更新 navbar（如需要调整显示名称）
3. 创建 9 个工具页面的中文版
4. 创建 9 个工具页面的英文版
5. 重构 `resources-tools/README.md` 和 `en/resources-tools/README.md`
6. 运行 `npm run gen-sidebar` 验证侧边栏自动生成结果
7. 执行 `npm run docs:build` 验证构建

---

## 验证清单

- [ ] 侧边栏显示正确的 4 个分类分组
- [ ] 所有 13 个工具页面均可访问（4 已有 + 9 新建）
- [ ] 中英文版本一致
- [ ] `npm run docs:build` 构建成功
- [ ] 页面内容符合模板规范
