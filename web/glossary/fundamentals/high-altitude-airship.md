---
title: 高空飞艇（HAA）
description: 详细解析高空飞艇（High Altitude Airship）的定义、技术特点、典型项目与发展现状
keywords: 高空飞艇, High Altitude Airship, HAA, 平流层飞艇, 长航时, 临近空间平台
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 高空飞艇（HAA）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 高空飞艇（HAA）详解 | 术语定义
  description: 详细解析高空飞艇（High Altitude Airship）的定义、技术特点、典型项目与发展现状
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 高空飞艇（HAA）详解 | 术语定义
  description: 详细解析高空飞艇（High Altitude Airship）的定义、技术特点、典型项目与发展现状
  image: /logo.png
permalink: /glossary/fundamentals/high-altitude-airship/
---

# 高空飞艇（HAA）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

高空飞艇（High Altitude Airship, HAA）是设计在平流层高度（通常 18-25 km）执行长航时任务的无人浮空平台，属于平流层飞艇的重要分支。与传统飞艇不同，HAA 专注于临近空间应用，强调超长航时（数周至数月）和区域驻留能力。

## 技术特点

| 特点 | 描述 |
|:---|:---|
| 高度 | 18-25 km（典型），部分可达 30 km |
| 航时 | 14-90 天（任务依赖） |
| 有效载荷 | 50-500 kg |
| 功率 | 1-10 kW（太阳能驱动） |
| 覆盖半径 | 数百公里 |
| 能源 | 太阳能电池 + 锂电池/燃料电池 |

## 典型项目

### 国际项目

| 项目 | 国家 | 特点 |
|:---|:---|:---|
| HiSentinel | 美国 | 南开大学与陆军合作，50-80 km 高度 |
| HALE-D | 美国 | DARPA 项目，验证长航时技术 |
| Sceye HAPS | 美国 | 商业平台，太阳能驱动 |
| Project Loon | 美国 | Google X，通信覆盖 |
| Skyship-500 | 英国 | 500 m³ 囊体 |

### 中国项目

- **YEZ-2A**：中国临近空间技术验证飞艇
- **彩虹系列**：航天科技集团临近空间飞行器

## 系统组成

```
┌─────────────────────────────────────────────┐
│                 蒙皮（Envelope）            │
│  ┌───────────────────────────────────────┐  │
│  │         主气囊（氦气）                 │  │
│  │  ┌─────────┐  ┌─────────────────┐   │  │
│  │  │ 副气囊  │  │    囊体（Gondola） │   │  │
│  │  │(Ballonet)│  │  - 有效载荷      │   │  │
│  │  │         │  │  - 太阳能系统     │   │  │
│  │  │         │  │  - 推进系统       │   │  │
│  │  └─────────┘  │  - 飞控系统       │   │  │
│  │               └─────────────────┘   │  │
│  └───────────────────────────────────────┘  │
│                   尾翼                       │
└─────────────────────────────────────────────┘
```

## 关键技术

1. **轻质高强蒙皮材料**：耐紫外、低氦渗透率
2. **高效太阳能系统**：柔性砷化镓/钙钛矿叠层
3. **能源管理**：昼充夜放的能量平衡
4. **自主控制**：复杂气象条件下的自主决策
5. **浮力调节**：氦气量和配重动态管理

## 相关概念

- [平流层飞艇（Stratospheric Airship）](/glossary/fundamentals/stratospheric-airship/)
- [临近空间（Near-space）](/glossary/fundamentals/near-space/)
- [区域驻留控制（Regional Station-keeping Control）](/glossary/dynamics/regional-station-keeping/)

## 参考文献

- 王海峰, 陈伟. 高空飞艇总体设计[M]. 航空工业出版社, 2025.
- DEFENSE A. High Altitude Airship Program Review[R]. DARPA, 2024.