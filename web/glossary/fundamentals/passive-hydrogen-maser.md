---
title: 被动氢原子钟（Passive Hydrogen Maser, PHM）
description: 详细解析被动氢原子钟的工作原理、频率稳定性指标、在空间引力红移测量中的应用
keywords: 被动氢原子钟, PHM, Hydrogen Maser, 原子钟, 频率标准, 时间频率, 频率稳定性, 阿伦偏差
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 被动氢原子钟（Passive Hydrogen Maser, PHM）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 被动氢原子钟（Passive Hydrogen Maser, PHM）详解 | 术语定义
  description: 详细解析被动氢原子钟的工作原理、频率稳定性指标及在空间引力红移测量中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 被动氢原子钟（Passive Hydrogen Maser, PHM）详解 | 术语定义
  description: 详细解析被动氢原子钟的工作原理、频率稳定性指标及在空间引力红移测量中的应用
  image: /logo.png
permalink: /glossary/fundamentals/passive-hydrogen-maser/
---

# 被动氢原子钟（Passive Hydrogen Maser, PHM）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文参考：Li Y et al. 2026 Chin. Phys. Lett. 43 031101
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

被动氢原子钟（Passive Hydrogen Maser, PHM）是一种高精度原子频率标准器件，利用氢原子超精细能级跃迁（21 cm谱线，对应频率约1.42 GHz）作为参考，通过被动锁定技术输出高度稳定的射频信号。与主动氢钟（主动振荡器）不同，PHM需要外部信号源来锁定其振荡频率，但具有更好的小型化潜力，适合空间应用。

## 工作原理

PHM的核心是一个涂覆有聚四氟乙烯（PTFE）内壁的石英泡（存储泡），用于存储氢原子气体。其基本工作流程：

1. **氢原子制备**：通过射频放电产生氢分子，将其分解为高能态氢原子
2. **态选择**：利用磁场梯度将高能态氢原子（$F=1, m_F=0$）选择性地送入存储泡
3. **受激辐射**：存储泡中的氢原子与微波腔发生相互作用，产生受激辐射
4. **频率锁定**：检测存储泡中原子跃迁信号，通过锁相环（PLL）锁定外部振荡器

关键性能指标：

- **频率准确度**：空间应用级PHM可达 $5 \times 10^{-12}$ 量级
- **频率稳定性**：ADEV在1000秒平均时间可达 $10^{-14}$ 量级
- **体积重量**：DRO-A卫星搭载的PHM仅8.5 kg，尺寸约39 cm

## 空间应用的环境敏感性

空间环境对PHM的影响主要包括：

| 环境因素 | 敏感系数 | 影响 |
| :--- | :--- | :--- |
| 温度 | $< 2 \times 10^{-14}/^\circ C$ | 温度变化±1°C时频率漂移< $2 \times 10^{-14}$ |
| 磁场 | $2 \times 10^{-13}/G$ | 磁场变化<0.05 G时频率漂移< $1 \times 10^{-14}$ |
| 宇宙辐射 | - | 需屏蔽保护 |

## 在DRO-A卫星中的应用

2025年4月的DRO-A引力红移实验是全球首次在月球DRO上部署PHM进行基础物理实验。该实验验证了紧凑型空间PHM的在轨性能：

- 频率准确度约 $5 \times 10^{-12}$
- 1000秒平均时间的ADEV约 $4.5 \times 10^{-14}$
- 10000秒平均时间的ADEV约 $1.5 \times 10^{-14}$

实验结果表明，星载PHM的性能受空间环境（温度、磁场等）影响控制在 $10^{-14}$ 量级，满足引力红移测量的需求。

## 与引力红移测量的关系

引力红移测量精度受限于时钟的频率准确度而非稳定性。在DRO-A实验中：

- 时钟稳定性（$10^{-14}$ 量级）比准确度（$10^{-12}$ 量级）好两个数量级
- 因此系统性能的主要限制因素是准确度而非稳定性
- 要实现更高精度的引力红移检验（如 $10^{-6}$ 量级），需要部署准确度达 $10^{-16}$ 的原子钟

## 相关概念

- [引力红移（Gravitational Redshift）](/glossary/fundamentals/gravitational-redshift/)
- [阿伦偏差（ADEV）](/glossary/fundamentals/allan-deviation/)
- [双向单程测距（DOWR）](/glossary/fundamentals/dual-one-way-ranging/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [爱因斯坦等效原理（EEP）](/glossary/fundamentals/einstein-equivalence-principle/)

## 参考文献

- Li Y, Liu T et al. 2026 Chin. Phys. Lett. 43 031101
- Vessot R F C et al. 1980 Phys. Rev. Lett. 45 2081
- Cacciapuoti L et al. 2007 Nucl. Phys. B Proc. Suppl. 166 303
