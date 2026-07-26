---
title: 双向单程测距（Dual One-Way Ranging, DOWR）
description: 详细解析双向单程测距的工作原理、在引力红移测量中的应用及与DOWR差分处理的抗干扰优势
keywords: 双向单程测距, DOWR, Dual One-Way Ranging, 测距, 时间频率传递, 星间链路, K波段, 差分处理
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 双向单程测距（Dual One-Way Ranging, DOWR）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 双向单程测距（Dual One-Way Ranging, DOWR）详解 | 术语定义
  description: 详细解析双向单程测距的工作原理、在引力红移测量中的应用及优势
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 双向单程测距（Dual One-Way Ranging, DOWR）详解 | 术语定义
  description: 详细解析双向单程测距的工作原理、在引力红移测量中的应用及优势
  image: /logo.png
permalink: /glossary/fundamentals/dual-one-way-ranging/
---

# 双向单程测距（Dual One-Way Ranging, DOWR）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文参考：Li Y et al. 2026 Chin. Phys. Lett. 43 031101
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

双向单程测距（Dual One-Way Ranging, DOWR）是一种精密测量技术，通过同时进行上行和下行链路的单程测距，利用两条链路信号传播时间变化的符号相反特性进行差分处理，从而提取出引力红移等效应。与传统的单程、双程测距相比，DOWR能够有效消除链路中的公共误差项。

## 工作原理

DOWR系统的基本配置包括：

```text
星载PHM → TFDP → K波段应答机 → (上行 23 GHz) → 地面站
                                       ↓
地面站 → (下行 26.5 GHz) → 星载TFDP → PHM
```

DOWR的核心处理步骤：

1. **同时双向传输**：地面站发射23 GHz信号，卫星同时发射26.5 GHz信号
2. **独立码伪距测量**：对上行和下行链路的伪距分别进行测量
3. **差分组合**：将两个方向的测量结果相减

差分处理的关键优势在于：

- **消除公共误差**：卫星和地面的时钟偏差、时频传递系统延迟等公共项在差分中被消除
- **信号增强**：两次测量结果相减相当于获得两倍的引力红移效应
- **环境干扰抑制**：大气折射、离子层延迟等影响在差分后显著减小

## 与引力红移测量的关系

在DRO-A卫星引力红移实验中，DOWR用于实现星-地时间频率比对：

| 测量参数 | 精度 |
| :--- | :--- |
| 时间比对精度 | >1 ns |
| 频率比对稳定性（MDEV） | $10^{-14}$ @2000 s |

DOWR的差分特性使其成为引力红移测量的理想技术手段，因为：

1. 引力红移在上行和下行链路中符号相反
2. 通过差分可提取纯引力红移信号
3. 与三链路方案相比，DOWR减少一条链路，降低系统复杂度

## K波段选用的原因

DOWR实验选用K波段（23/26.5 GHz）而非更低频率的原因：

| 因素 | K波段优势 |
| :--- | :--- |
| 离子层延迟 | K波段对离子层不敏感，电子总含量（TEC）变化影响小 |
| 大气衰减 | K波段大气透过率更高 |
| 天线尺寸 | 高频可用更小口径天线 |

但K波段也有局限：双频系统无法精确确定TEC，因此无法像三频系统那样精确修正离子层延迟。

## 在其他任务中的应用

DOWR技术已在多个航天任务中得到验证和应用：

- **Gravity Recovery and Climate Experiment (GRACE)**：重力卫星时间传递
- **Gravity Recovery and Interior Laboratory (GRAIL)**：月球重力测量
- **北斗导航卫星系统**：星间DOWR码测量，时间同步精度<1 ns

## 相关概念

- [引力红移（Gravitational Redshift）](/glossary/fundamentals/gravitational-redshift/)
- [被动氢原子钟（PHM）](/glossary/fundamentals/passive-hydrogen-maser/)
- [阿伦偏差（ADEV）](/glossary/fundamentals/allan-deviation/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [星间链路（Inter-Satellite Link）](/glossary/communication/inter-satellite-link/)

## 参考文献

- Li Y, Liu T et al. 2026 Chin. Phys. Lett. 43 031101
- Qin C G et al. 2024 Class. Quantum Grav. 41 135006
- Kim J and Tapley B D 2003 J. Spacecr. Rockets 40 419
- Turyshev S G et al. 2013 Phys. Rev. D 87 024020
