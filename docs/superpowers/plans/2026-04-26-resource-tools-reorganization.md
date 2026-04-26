# 资源与工具栏目分类重构实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将"资源与工具"栏目的扁平结构重组为4分类层级分组，新建9个工具页面（中英文各9个），重构README为分类总览。

**Architecture:** 纯内容重构——修改 VuePress 侧边栏配置 + 创建 Markdown 页面，无代码逻辑变更。

**Tech Stack:** VuePress 2, Markdown

---

## 文件变更总览

| 操作 | 文件 |
|------|------|
| 修改 | `web/.vuepress/sidebar.ts` |
| 修改 | `web/.vuepress/sidebar-en.ts` |
| 修改 | `web/resources-tools/README.md` |
| 修改 | `web/en/resources-tools/README.md` |
| 新建 | `web/resources-tools/gmat.md` |
| 新建 | `web/resources-tools/stk.md` |
| 新建 | `web/resources-tools/orekit.md` |
| 新建 | `web/resources-tools/poliastro.md` |
| 新建 | `web/resources-tools/basilisk.md` |
| 新建 | `web/resources-tools/pykep.md` |
| 新建 | `web/resources-tools/digital-lunar.md` |
| 新建 | `web/resources-tools/llm.md` |
| 新建 | `web/resources-tools/naoc-data.md` |
| 新建 | `web/en/resources-tools/gmat.md` |
| 新建 | `web/en/resources-tools/stk.md` |
| 新建 | `web/en/resources-tools/orekit.md` |
| 新建 | `web/en/resources-tools/poliastro.md` |
| 新建 | `web/en/resources-tools/basilisk.md` |
| 新建 | `web/en/resources-tools/pykep.md` |
| 新建 | `web/en/resources-tools/digital-lunar.md` |
| 新建 | `web/en/resources-tools/llm.md` |
| 新建 | `web/en/resources-tools/naoc-data.md` |

---

## Task 1: 更新 sidebar.ts（中文侧边栏）

**文件:** `web/.vuepress/sidebar.ts:148-161`

- [ ] **Step 1: 替换 `resourcesToolsSidebar` 定义**

将原来的扁平结构：
```typescript
const resourcesToolsSidebar = [
  wayfindingZhGroup,
  {
    text: '资源与工具（数据、代码与数据集）',
    collapsible: false,
    children: [
      '/resources-tools/',
      '/resources-tools/e2m2e',
      '/resources-tools/scipy',
      '/resources-tools/r2s2',
      '/resources-tools/datasets',
    ],
  },
]
```

替换为分类可折叠结构：
```typescript
const resourcesToolsSidebar = [
  wayfindingZhGroup,
  {
    text: '资源与工具（数据、代码与数据集）',
    collapsible: false,
    children: [
      '/resources-tools/',
      {
        text: '仿真软件',
        collapsible: true,
        children: [
          '/resources-tools/gmat',
          '/resources-tools/stk',
        ],
      },
      {
        text: '核心算法库',
        collapsible: true,
        children: [
          '/resources-tools/e2m2e',
          '/resources-tools/scipy',
          '/resources-tools/r2s2',
          '/resources-tools/orekit',
          '/resources-tools/poliastro',
          '/resources-tools/basilisk',
          '/resources-tools/pykep',
        ],
      },
      {
        text: '数据资源',
        collapsible: true,
        children: [
          '/resources-tools/datasets',
        ],
      },
      {
        text: 'AI与云平台',
        collapsible: true,
        children: [
          '/resources-tools/digital-lunar',
          '/resources-tools/llm',
          '/resources-tools/naoc-data',
        ],
      },
    ],
  },
]
```

- [ ] **Step 2: 提交**

```bash
git add web/.vuepress/sidebar.ts
git commit -m "refactor(resources-tools): reorganize sidebar into 4 collapsible categories"
```

---

## Task 2: 更新 sidebar-en.ts（英文侧边栏）

**文件:** `web/.vuepress/sidebar-en.ts:99-112`

- [ ] **Step 1: 替换 `resourcesToolsSidebar` 定义**

将原来的扁平结构：
```typescript
const resourcesToolsSidebar = [
  wayfindingEnGroup,
  {
    text: 'Resources & tools (data, code & datasets)',
    collapsible: false,
    children: [
      '/en/resources-tools/',
      '/en/resources-tools/e2m2e',
      '/en/resources-tools/scipy',
      '/en/resources-tools/r2s2',
      '/en/resources-tools/datasets',
    ],
  },
]
```

替换为分类可折叠结构：
```typescript
const resourcesToolsSidebar = [
  wayfindingEnGroup,
  {
    text: 'Resources & Tools (Data, Code & Datasets)',
    collapsible: false,
    children: [
      '/en/resources-tools/',
      {
        text: 'Simulation Software',
        collapsible: true,
        children: [
          '/en/resources-tools/gmat',
          '/en/resources-tools/stk',
        ],
      },
      {
        text: 'Core Algorithm Libraries',
        collapsible: true,
        children: [
          '/en/resources-tools/e2m2e',
          '/en/resources-tools/scipy',
          '/en/resources-tools/r2s2',
          '/en/resources-tools/orekit',
          '/en/resources-tools/poliastro',
          '/en/resources-tools/basilisk',
          '/en/resources-tools/pykep',
        ],
      },
      {
        text: 'Data Resources',
        collapsible: true,
        children: [
          '/en/resources-tools/datasets',
        ],
      },
      {
        text: 'AI & Cloud Platforms',
        collapsible: true,
        children: [
          '/en/resources-tools/digital-lunar',
          '/en/resources-tools/llm',
          '/en/resources-tools/naoc-data',
        ],
      },
    ],
  },
]
```

- [ ] **Step 2: 提交**

```bash
git add web/.vuepress/sidebar-en.ts
git commit -m "refactor(resources-tools): reorganize English sidebar into 4 collapsible categories"
```

---

## Task 3: 创建中文工具页面（9个）

每个页面的 frontmatter 格式统一：
```yaml
---
title: <工具名称>
description: <一句话简介>
---
```

内容从当前 `resources-tools/README.md` 中提取对应工具的已有描述，按模板组织。

- [ ] **Step 1: 创建 `web/resources-tools/gmat.md`**

内容来源：当前 README.md 第66-74行。

页面内容：
```markdown
---
title: GMAT
description: NASA 开源通用任务分析工具，支持轨道设计、姿态分析与轨迹优化
---

## 简介

GMAT（General Mission Analysis Tool）是 NASA 和工业界合作开发的开源空间任务设计、优化和导航系统。支持从低地球轨道到月球、自由点及深空飞行任务的全流程分析。

## 基本信息

- **许可证**：NASA Open Source Agreement
- **来源**：NASA AMMOS
- **官方文档**：https://gmat.sourceforge.net/

## 主要功能

- 轨道传播与数值积分
- 轨迹优化与 impulsive/finite-thrust 机动设计
- 可视化界面与报告生成
- 自定义脚本与 API 接口

## 应用场景

- 地月转移轨道设计与 DRO 稳定点搜索
- 深空任务仿真与窗口分析
- 姿态控制仿真

## 官方资源

- 官网：https://gmat.sourceforge.net/
- GitHub：https://github.com/NASA-AMMOS/GMAT
- 最新版本：R2024a
```

- [ ] **Step 2: 创建 `web/resources-tools/stk.md`**

内容来源：当前 README.md 第76-82行。

```markdown
---
title: STK
description: AGI（Ansys）商业空间仿真平台，提供高级分析可视化和报告
---

## 简介

STK（Systems Tool Kit，原 Satellite Tool Kit）由美国 AGI 公司（现 Ansys）开发，是航天领域领先的商用现货（COTS）分析软件。

## 基本信息

- **许可证**：商业软件（教育版免费）
- **来源**：AGI / Ansys
- **官方文档**：https://www.agi.com/products/stk

## 主要功能

- 轨道设计与 Astrogator 模块
- 通信链路分析与覆盖分析
- 姿态仿真与传感器分析
- 深空任务设计

## 应用场景

- 深空任务仿真与星座设计
- 通信窗口分析与传感器覆盖分析
- 地月 L1/L2 点转移和 Halo 轨道设计

## 官方资源

- 官网：https://www.agi.com/products/stk
- 教育版申请：https://www.agi.com/pages/academic
```

- [ ] **Step 3: 创建 `web/resources-tools/orekit.md`**

内容来源：当前 README.md 第84-97行。

```markdown
---
title: Orekit
description: ESA 开源飞行动力学库，基于 Java（Python binding 可用）
---

## 简介

Orekit 是用 Java 编写的底层航天飞行动力学库，由 CS GROUP 维护，2008 年起开源。

## 基本信息

- **许可证**：Apache License 2.0
- **来源**：ESA / CS GROUP
- **官方文档**：https://www.orekit.org/
- **语言**：Java 8+
- **数学依赖**：Hipparchus 4.0.3

## 主要功能

- 轨道传播（解析法、半解析法、数值法、TLE）
- 轨道确定（最小二乘、卡尔曼滤波）
- 姿态定义与坐标系转换
- 低推力轨迹设计与大气密度建模
- 日食与可见性事件检测

## 应用场景

- 轨道传播与轨道确定
- 低推力轨迹设计与大气密度建模
- 坐标系转换与事件检测

## 官方资源

- 官网：https://www.orekit.org/
- GitLab：https://gitlab.orekit.org/orekit/orekit
- GitHub 镜像：https://github.com/CS-SI/Orekit
- Python 封装：JCC / JPype
```

- [ ] **Step 4: 创建 `web/resources-tools/poliastro.md`**

内容来源：当前 README.md 第99-110行。

```markdown
---
title: poliastro
description: 纯 Python 天体力学库（已归档，仅保留存档状态）
---

## 简介

poliastro 是纯 Python 开源天体力学库，专注于轨道力学计算和航天器轨迹仿真。**注意：poliastro 已归档，不再积极维护**。

## 基本信息

- **许可证**：MIT
- **来源**：poliastro Community
- **官方文档**：https://docs.poliastro.space
- **GitHub**：https://github.com/poliastro/poliastro
- **Python 版本**：3.8 – 3.11

## 主要功能

- 解析与数值轨道传播（Kepler、Cowell）
- 经典轨道要素 ↔ 位置速度矢量转换
- 坐标系变换与脉冲机动设计（霍曼转移、双椭圆转移、Lambert 问题）
- 2D/3D 静态与交互式轨迹绘图
- 基于 SPICE kernels 的行星历表
- 大气模型（COESA 1962/1976、Jacchia）

## 应用场景

- LEO/MEO/GEO 轨道设计
- 行星际转移轨道与 Lambert 问题求解
- 低推力轨迹分析与快速任务原型开发

## 官方资源

- 官网：https://www.poliastro.space/
- GitHub：https://github.com/poliastro/poliastro
```

- [ ] **Step 5: 创建 `web/resources-tools/basilisk.md`**

内容来源：当前 README.md 第112-119行。

```markdown
---
title: Basilisk
description: JPL 开源航天器动力学仿真框架，C++ 核心 + Python 接口
---

## 简介

Basilisk 是 JPL（NASA 喷气推进实验室）开发的高级航天器动力学仿真框架，采用模块化架构。

## 基本信息

- **许可证**：NASA Open Source Agreement
- **来源**：JPL / NASA
- **官网**：https://bsk-lair.com/
- **GitHub**：https://github.com/AstroYuvPA/basilisk

## 主要功能

- 航天器姿态控制仿真
- 轨道传播与机动分析
- 多体动力学支持
- 模块化场景架构

## 应用场景

- 航天器姿态控制仿真
- 轨道机动分析与多体动力学

## 官方资源

- 官网：https://bsk-lair.com/
- GitHub：https://github.com/AstroYuvPA/basilisk
```

- [ ] **Step 6: 创建 `web/resources-tools/pykep.md`**

内容来源：当前 README.md 第121-132行。

```markdown
---
title: pykep
description: ESA 行星际轨迹设计库，基于 Galbio 等算法
---

## 简介

pykep 是 ESA 先进概念团队（ACT）主导开发的行星际轨迹设计与轨道力学科学库，C++ 核心 + Python 接口。

## 基本信息

- **许可证**：MPL-2.0（Mozilla Public License 2.0）
- **来源**：ESA
- **官网/文档**：https://esa.github.io/pykep/
- **GitHub**：https://github.com/esa/pykep
- **语言**：C++23 + Python（3.11 – 3.14）

## 主要功能

- Lambert 问题求解与 Kepler/拉格朗日传播
- Sims–Flanagan 与 ZOH 轨迹段
- 基于 heyoka 的泰勒自适应积分器（CR3BP、BCP）
- 用户自定义行星接口（UDPLA）

## 应用场景

- 行星际转移轨道设计与引力辅助序列优化
- 低推力轨迹优化与泰勒积分快速原型

## 官方资源

- 官网/文档：https://esa.github.io/pykep/
- GitHub：https://github.com/esa/pykep
```

- [ ] **Step 7: 创建 `web/resources-tools/digital-lunar.md`**

内容来源：当前 README.md 第134-141行。

```markdown
---
title: 数字月球云平台
description: 中国科学院月球探测数据云平台
---

## 简介

数字月球云平台由中科院地球化学研究所牵头建设，是目前国际上月球探测数据最齐全的云平台。

## 基本信息

- **来源**：中国科学院地球化学研究所
- **平台地址**：http://moon.bao.ac.cn/

## 主要功能

- 月球探测数据汇聚（影像、地形、光谱、雷达、重力、地质图）
- 科研态势感知工具
- 着陆区自动选址等智能分析工具
- API 对接月球科学多模态大模型 V2.0

## 应用场景

- 嫦娥系列、LRO、GRAIL 等探月工程数据查询
- 月球科学研究与工程应用

## 官方资源

- 平台地址：http://moon.bao.ac.cn/
```

- [ ] **Step 8: 创建 `web/resources-tools/llm.md`**

内容来源：当前 README.md 第143-149行。

```markdown
---
title: 月球科学多模态大模型 V2.0
description: 月球陨石坑识别等任务的 AI 多模态大模型
---

## 简介

月球科学多模态专业大模型由中科院地球化学研究所与阿里云联合研发，V2.0 版本已集成到数字月球云平台。

## 基本信息

- **来源**：中国科学院地球化学研究所 × 阿里云
- **技术基础**：通义视觉模型 + 多模态大模型 + RAG 知识库

## 主要功能

- 月球撞击坑识别与分类
- 多模态月球数据分析
- 月球撞击坑年代和形态判别（准确率 80%+）

## 应用场景

- 月球撞击坑自动识别与分类
- 月球科学多模态数据分析

## 官方资源

- 平台集成于数字月球云平台：http://moon.bao.ac.cn/
```

- [ ] **Step 9: 创建 `web/resources-tools/naoc-data.md`**

内容来源：当前 README.md 第151-156行。

```markdown
---
title: 月球与行星数据发布系统
description: 中国科学院国家天文台月球与行星科学数据发布平台
---

## 简介

月球与行星数据发布系统由中科院国家天文台主办，是月球与行星科学研究的重要数据来源。

## 基本信息

- **来源**：中国科学院国家天文台
- **平台地址**：https://moon.bao.ac.cn/

## 主要功能

- 月球遥感影像数据
- 地形模型与重力场数据
- 行星科学研究数据发布

## 应用场景

- 月球与行星科学研究数据查询
- 行星科学数据门户服务

## 官方资源

- 平台地址：https://moon.bao.ac.cn/
```

- [ ] **Step 10: 提交**

```bash
git add web/resources-tools/gmat.md web/resources-tools/stk.md web/resources-tools/orekit.md web/resources-tools/poliastro.md web/resources-tools/basilisk.md web/resources-tools/pykep.md web/resources-tools/digital-lunar.md web/resources-tools/llm.md web/resources-tools/naoc-data.md
git commit -m "feat(resources-tools): add 9 Chinese tool pages (GMAT, STK, Orekit, poliastro, Basilisk, pykep, digital-lunar, llm, naoc-data)"
```

---

## Task 4: 创建英文工具页面（9个）

英文版内容与中文版对应，将中文内容翻译为英文。工具名称保持英文原文。

- [ ] **Step 1: 创建 `web/en/resources-tools/gmat.md`**

```markdown
---
title: GMAT
description: NASA's open-source General Mission Analysis Tool for orbit design and trajectory optimization
---

## Overview

GMAT (General Mission Analysis Tool) is an open-source space mission design, optimization and navigation system developed by NASA and industry. It supports full-cycle analysis from LEO to the Moon, libration points and deep space missions.

## Basic Information

- **License**: NASA Open Source Agreement
- **Source**: NASA AMMOS
- **Official Docs**: https://gmat.sourceforge.net/

## Key Features

- Orbit propagation and numerical integration
- Trajectory optimization and impulsive/finite-thrust maneuver design
- Visualization interface and report generation
- Custom scripting and API interface

## Use Cases

- Earth-Moon transfer orbit design and DRO stable point search
- Deep space mission simulation and window analysis
- Attitude control simulation

## Official Resources

- Website: https://gmat.sourceforge.net/
- GitHub: https://github.com/NASA-AMMOS/GMAT
- Latest version: R2024a
```

- [ ] **Step 2: 创建 `web/en/resources-tools/stk.md`**

```markdown
---
title: STK
description: AGI (Ansys) commercial space simulation platform with advanced analysis and visualization
---

## Overview

STK (Systems Tool Kit) is a leading commercial off-the-shelf (COTS) analysis software for space missions, developed by AGI (now Ansys).

## Basic Information

- **License**: Commercial (Free academic license available)
- **Source**: AGI / Ansys
- **Official Docs**: https://www.agi.com/products/stk

## Key Features

- Orbit design with Astrogator module
- Communication link and coverage analysis
- Attitude simulation and sensor analysis
- Deep space mission design

## Use Cases

- Deep space mission simulation and constellation design
- Communication window and sensor coverage analysis
- Earth-Moon L1/L2 transfer and Halo orbit design

## Official Resources

- Website: https://www.agi.com/products/stk
- Academic program: https://www.agi.com/pages/academic
```

- [ ] **Step 3: 创建 `web/en/resources-tools/orekit.md`**

```markdown
---
title: Orekit
description: ESA open-source flight dynamics library, Java-based (Python bindings available)
---

## Overview

Orekit is a low-level space flight dynamics library written in Java, maintained by CS GROUP, open source since 2008.

## Basic Information

- **License**: Apache License 2.0
- **Source**: ESA / CS GROUP
- **Official Docs**: https://www.orekit.org/
- **Language**: Java 8+
- **Math dependency**: Hipparchus 4.0.3

## Key Features

- Orbit propagation (analytical, semi-analytical, numerical, TLE)
- Orbit determination (least squares, Kalman filtering)
- Attitude definition and coordinate reference systems
- Low-thrust trajectory design and atmospheric density modeling
- Eclipse and visibility event detection

## Use Cases

- Orbit propagation and orbit determination
- Low-thrust trajectory design and atmospheric density modeling
- Coordinate transformations and event detection

## Official Resources

- Website: https://www.orekit.org/
- GitLab: https://gitlab.orekit.org/orekit/orekit
- GitHub mirror: https://github.com/CS-SI/Orekit
- Python wrappers: JCC / JPype
```

- [ ] **Step 4: 创建 `web/en/resources-tools/poliastro.md`**

```markdown
---
title: poliastro
description: Pure Python astrodynamics library (archived — read-only maintenance)
---

## Overview

poliastro is a pure Python open-source astrodynamics library focused on orbital mechanics and spacecraft trajectory simulation. **Note: poliastro is archived and no longer actively maintained.**

## Basic Information

- **License**: MIT
- **Source**: poliastro Community
- **Official Docs**: https://docs.poliastro.space
- **GitHub**: https://github.com/poliastro/poliastro
- **Python versions**: 3.8 – 3.11

## Key Features

- Analytical and numerical orbit propagation (Kepler, Cowell)
- Classical orbital elements ↔ position/velocity vector conversion
- Coordinate system transformations and impulsive maneuver design (Hohmann, bi-elliptic, Lambert)
- 2D/3D static and interactive trajectory plotting
- SPICE kernel-based planetary ephemerides
- Atmospheric models (COESA 1962/1976, Jacchia)

## Use Cases

- LEO/MEO/GEO orbit design
- Interplanetary transfer orbits and Lambert problem solving
- Low-thrust trajectory analysis and rapid mission prototyping

## Official Resources

- Website: https://www.poliastro.space/
- GitHub: https://github.com/poliastro/poliastro
```

- [ ] **Step 5: 创建 `web/en/resources-tools/basilisk.md`**

```markdown
---
title: Basilisk
description: JPL open-source spacecraft dynamics simulation framework, C++ core with Python interface
---

## Overview

Basilisk is an advanced spacecraft dynamics simulation framework developed by JPL (NASA Jet Propulsion Laboratory), featuring a modular architecture.

## Basic Information

- **License**: NASA Open Source Agreement
- **Source**: JPL / NASA
- **Website**: https://bsk-lair.com/
- **GitHub**: https://github.com/AstroYuvPA/basilisk

## Key Features

- Spacecraft attitude control simulation
- Orbit propagation and maneuver analysis
- Multi-body dynamics support
- Modular scenario architecture

## Use Cases

- Spacecraft attitude control simulation
- Orbit maneuver analysis and multi-body dynamics

## Official Resources

- Website: https://bsk-lair.com/
- GitHub: https://github.com/AstroYuvPA/basilisk
```

- [ ] **Step 6: 创建 `web/en/resources-tools/pykep.md`**

```markdown
---
title: pykep
description: ESA interplanetary trajectory design library based on Galbio and related algorithms
---

## Overview

pykep is an interplanetary trajectory design and orbital mechanics scientific library led by ESA's Advanced Concepts Team (ACT), with C++ core and Python interface.

## Basic Information

- **License**: MPL-2.0 (Mozilla Public License 2.0)
- **Source**: ESA
- **Website/Docs**: https://esa.github.io/pykep/
- **GitHub**: https://github.com/esa/pykep
- **Languages**: C++23 + Python (3.11 – 3.14)

## Key Features

- Lambert problem solving and Kepler/Lagrange propagation
- Sims–Flanagan and ZOH trajectory segments
- Taylor adaptive integrator based on heyoka (CR3BP, BCP)
- User-defined planetary interface (UDPLA)

## Use Cases

- Interplanetary transfer orbit design and gravity-assist sequence optimization
- Low-thrust trajectory optimization and Taylor integration rapid prototyping

## Official Resources

- Website/Docs: https://esa.github.io/pykep/
- GitHub: https://github.com/esa/pykep
```

- [ ] **Step 7: 创建 `web/en/resources-tools/digital-lunar.md`**

```markdown
---
title: Digital Lunar Cloud Platform
description: Chinese Academy of Sciences lunar exploration data cloud platform
---

## Overview

The Digital Lunar Cloud Platform is led by the Institute of Geochemistry, Chinese Academy of Sciences, and is currently the most comprehensive lunar exploration data cloud platform internationally.

## Basic Information

- **Source**: Institute of Geochemistry, Chinese Academy of Sciences
- **Platform URL**: http://moon.bao.ac.cn/

## Key Features

- Lunar exploration data aggregation (imagery, terrain, spectral, radar, gravity, geologic maps)
- Scientific research situational awareness tools
- Automated landing site selection and intelligent analysis tools
- API integration with Lunar Science Multimodal LLM V2.0

## Use Cases

- Chang'e series, LRO, GRAIL and other lunar mission data queries
- Lunar science research and engineering applications

## Official Resources

- Platform URL: http://moon.bao.ac.cn/
```

- [ ] **Step 8: 创建 `web/en/resources-tools/llm.md`**

```markdown
---
title: Lunar Science Multimodal LLM V2.0
description: AI multimodal large model for lunar crater recognition and analysis
---

## Overview

The Lunar Science Multimodal Professional LLM is jointly developed by the Institute of Geochemistry, Chinese Academy of Sciences and Alibaba Cloud. V2.0 is integrated into the Digital Lunar Cloud Platform.

## Basic Information

- **Source**: Institute of Geochemistry, CAS × Alibaba Cloud
- **Technical basis**: Qwen Vision Model + Multimodal LLM + RAG knowledge base

## Key Features

- Lunar crater recognition and classification
- Multimodal lunar science data analysis
- Lunar crater age and morphology identification (accuracy 80%+)

## Use Cases

- Automated lunar crater recognition and classification
- Multimodal lunar science data analysis

## Official Resources

- Integrated in Digital Lunar Cloud Platform: http://moon.bao.ac.cn/
```

- [ ] **Step 9: 创建 `web/en/resources-tools/naoc-data.md`**

```markdown
---
title: NAOC Lunar & Planetary Data Distribution System
description: Chinese Academy of Sciences National Astronomical Observatory lunar and planetary science data portal
---

## Overview

The Lunar & Planetary Data Distribution System is hosted by the National Astronomical Observatory of the Chinese Academy of Sciences and is an important data source for lunar and planetary science research.

## Basic Information

- **Source**: National Astronomical Observatory, Chinese Academy of Sciences
- **Platform URL**: https://moon.bao.ac.cn/

## Key Features

- Lunar remote sensing image data
- Terrain models and gravity field data
- Planetary science research data distribution

## Use Cases

- Lunar and planetary science research data queries
- Planetary science data portal services

## Official Resources

- Platform URL: https://moon.bao.ac.cn/
```

- [ ] **Step 10: 提交**

```bash
git add web/en/resources-tools/gmat.md web/en/resources-tools/stk.md web/en/resources-tools/orekit.md web/en/resources-tools/poliastro.md web/en/resources-tools/basilisk.md web/en/resources-tools/pykep.md web/en/resources-tools/digital-lunar.md web/en/resources-tools/llm.md web/en/resources-tools/naoc-data.md
git commit -m "feat(resources-tools): add 9 English tool pages"
```

---

## Task 5: 重构中文 README.md

将 `web/resources-tools/README.md` 从工具详情页改为分类总览页。保留引言部分，删除各工具完整介绍（已迁移至独立页面），改为分类概述 + 指向各页面的链接卡片。

- [ ] **Step 1: 重写 `web/resources-tools/README.md`**

新内容：
```markdown
---
permalink: /resources-tools/
title: 地月空间资源与工具
description: 仿真软件、核心算法库、数据资源和 AI/云平台工具索引。
lastUpdated: 2026-04-26
wechatShare:
  title: 地月空间资源与工具
  desc: 数据、代码库与数据集索引。
  image: /logo.png
---

# 地月空间资源与工具

> 本栏目收录地月空间领域的仿真软件、核心算法库、数据资源和 AI/云平台工具。

## 仿真软件

专业任务分析工具，支持轨道设计、仿真优化与可视化分析。

| 工具 | 说明 |
|------|------|
| [GMAT](./gmat/) | NASA 开源通用任务分析工具 |
| [STK](./stk/) | AGI（Ansys）商业仿真平台 |

## 核心算法库

开源轨道设计与天体力学计算库。

| 工具 | 说明 |
|------|------|
| [e2m2e](./e2m2e/) | 地月空间转移轨道设计库（CR3BP） |
| [scipy](./scipy/) | Python 科学计算库 |
| [r2s2](./r2s2/) | 地月空间时空坐标转换库 |
| [Orekit](./orekit/) | ESA 开源飞行动力学库（Java） |
| [poliastro](./poliastro/) | Python 天体力学库（已归档） |
| [Basilisk](./basilisk/) | JPL 航天器动力学仿真框架 |
| [pykep](./pykep/) | ESA 行星际轨迹设计库 |

## 数据资源

| 资源 | 说明 |
|------|------|
| [数据集](./datasets/) | JPL星历、月球重力场模型、空间环境参数等 |

## AI与云平台

月球探测数据云平台与 AI 智能分析工具。

| 工具 | 说明 |
|------|------|
| [数字月球云平台](./digital-lunar/) | 中科院地化所月球探测数据云平台 |
| [月球科学多模态大模型 V2.0](./llm/) | 月球撞击坑识别 AI 大模型 |
| [月球与行星数据发布系统](./naoc-data/) | 中科院国家天文台行星科学数据门户 |
```

- [ ] **Step 2: 提交**

```bash
git add web/resources-tools/README.md
git commit -m "refactor(resources-tools): convert README to categorized overview"
```

---

## Task 6: 重构英文 README.md

- [ ] **Step 1: 重写 `web/en/resources-tools/README.md`**

新内容：
```markdown
---
permalink: /en/resources-tools/
title: Resources & Tools
description: Index of simulation software, core algorithm libraries, data resources and AI/cloud platforms.
---

# Resources & Tools

> This section covers simulation software, core algorithm libraries, data resources and AI/cloud platform tools for cislunar space research.

## Simulation Software

Professional mission analysis tools for orbit design, simulation optimization and visualization.

| Tool | Description |
|------|-------------|
| [GMAT](./gmat/) | NASA's open-source General Mission Analysis Tool |
| [STK](./stk/) | AGI (Ansys) commercial simulation platform |

## Core Algorithm Libraries

Open-source orbit design and celestial mechanics computing libraries.

| Tool | Description |
|------|-------------|
| [e2m2e](./e2m2e/) | Earth-Moon transfer orbit design library (CR3BP) |
| [scipy](./scipy/) | Python Scientific Computing Library |
| [r2s2](./r2s2/) | Cislunar space-time coordinate transformation library |
| [Orekit](./orekit/) | ESA open-source flight dynamics library (Java) |
| [poliastro](./poliastro/) | Python astrodynamics library (archived) |
| [Basilisk](./basilisk/) | JPL spacecraft dynamics simulation framework |
| [pykep](./pykep/) | ESA interplanetary trajectory design library |

## Data Resources

| Resource | Description |
|----------|-------------|
| [Datasets](./datasets/) | JPL ephemerides, lunar gravity field models, space environment parameters |

## AI & Cloud Platforms

Lunar exploration data cloud platforms and AI intelligent analysis tools.

| Tool | Description |
|------|-------------|
| [Digital Lunar Cloud Platform](./digital-lunar/) | CAS Institute of Geochemistry lunar data cloud |
| [Lunar Science Multimodal LLM V2.0](./llm/) | AI model for lunar crater recognition |
| [NAOC Lunar & Planetary Data System](./naoc-data/) | CAS National Astronomical Observatory planetary science data portal |
```

- [ ] **Step 2: 提交**

```bash
git add web/en/resources-tools/README.md
git commit -m "refactor(resources-tools): convert English README to categorized overview"
```

---

## Task 7: 验证构建

- [ ] **Step 1: 运行 `npm run gen-sidebar`**

验证侧边栏配置无误，无 JSON 报错。

- [ ] **Step 2: 运行 `npm run docs:build`**

验证完整构建成功，无错误。

---

## Task 8: 最终提交

合并所有变更到 master：

```bash
git log --oneline -10
```

确认所有 commits 已创建，无遗漏。

---

## 验证清单

- [ ] `sidebar.ts` 中 resourcesToolsSidebar 包含 4 个 collapsible 分类组
- [ ] `sidebar-en.ts` 中 resourcesToolsSidebar 包含 4 个 collapsible 分类组
- [ ] 13 个工具页面均可访问（4 已有 + 9 新建）× 2 语言
- [ ] `npm run docs:build` 构建成功
- [ ] README 改为分类总览风格，无工具详情重复内容
