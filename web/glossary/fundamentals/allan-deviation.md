---
title: 阿伦偏差（Allan Deviation, ADEV）
description: 详细解析阿伦偏差的定义、计算方法、与标准差的关系及在原子钟频率稳定性评估中的应用
keywords: 阿伦偏差, ADEV, Allan Deviation, 频率稳定性, 原子钟, 时间频率, 振荡器, 相位噪声, MDEV
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 阿伦偏差（Allan Deviation, ADEV）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 阿伦偏差（Allan Deviation, ADEV）详解 | 术语定义
  description: 详细解析阿伦偏差的定义、计算方法及在原子钟频率稳定性评估中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 阿伦偏差（Allan Deviation, ADEV）详解 | 术语定义
  description: 详细解析阿伦偏差的定义、计算方法及在原子钟频率稳定性评估中的应用
  image: /logo.png
permalink: /glossary/fundamentals/allan-deviation/
---

# 阿伦偏差（Allan Deviation, ADEV）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文参考：Li Y et al. 2026 Chin. Phys. Lett. 43 031101
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

阿伦偏差（Allan Deviation, ADEV）是评估频率源稳定性的一种统计量，由David W. Allan于1966年提出。与传统的标准差不同，ADEV能够区分不同类型的噪声过程（如白噪声、闪烁噪声、随机游走噪声等），避免在噪声非平稳时出现发散问题。

ADEV是时间频率领域评估原子钟和振荡器性能的核心指标。

## 数学定义

对于采样间隔 $\tau$ 的相邻频率测量值 $\bar{y}_i$，ADEV定义为：

$$\sigma_y^2(\tau) = \frac{1}{2(N-1)} \sum_{i=1}^{N-1} (\bar{y}_{i+1} - \bar{y}_i)^2$$

其中 $N$ 是样本数量，$\bar{y}_i$ 是在第 $i$ 个平均时间 $\tau$ 内的平均相对频率偏移。

对应的阿伦偏差为：
$$\text{ADEV} = \sigma_y(\tau) = \sqrt{\sigma_y^2(\tau)}$$

## 与标准差的区别

传统标准差（StdDev）在评估频率稳定性时存在局限性：当噪声类型为闪烁频率噪声时，标准差随样本数增加而发散，即使用无穷多样本也无法收敛。

ADEV的优势在于：
- 对多种噪声类型都能收敛
- 能够识别噪声的幂律谱类型
- 与物理过程有明确对应关系

| 噪声类型 | 标准差行为 | ADEV行为 |
|:---|:---|:---|
| 白相位噪声 | 发散 | 收敛 $\propto \tau^{-1}$ |
| 闪烁相位噪声 | 发散 | 收敛 $\propto \tau^{0}$ |
| 白频率噪声 | 收敛 | 收敛 $\propto \tau^{-1/2}$ |
| 闪烁频率噪声 | 发散 | 收敛 $\propto \tau^{0}$ |
| 随机游走频率噪声 | 收敛 | 收敛 $\propto \tau^{1/2}$ |

## 改进阿伦偏差（MDEV）

在DRO-A引力红移实验中使用的是改进阿伦偏差（Modified Allan Deviation, MDEV）：

$$\text{MDEV} = \sqrt{\frac{1}{2(N-2\tau_0)} \sum_{i=1}^{N-2} \left( \frac{1}{\tau^2} \int_{\tau_0}^{\tau_0+\tau} \int_{\tau_0}^{\tau_0+\tau} \dot{x}(t_2) - \dot{x}(t_1) \, dt_1 \, dt_2 \right)^2}$$

MDEV相对于ADEV的优势在于：
- 在相同噪声类型下具有更好的置信度
- 能够区分白频率噪声和闪烁频率噪声

## 典型性能指标

不同类型原子钟的ADEV典型值：

| 振荡器类型 | $\tau = 1$ s | $\tau = 1000$ s | $\tau = 10000$ s |
|:---|:---|:---|:---|
| 被动氢原子钟（PHM） | $10^{-12}$ | $10^{-14}$ | $10^{-14}$ |
| 铯原子钟 | $10^{-11}$ | $10^{-13}$ | $10^{-13}$ |
| 铷原子钟 | $10^{-11}$ | $10^{-12}$ | $10^{-12}$ |
| 锶光晶格钟 | $10^{-16}$ | $10^{-18}$ | $10^{-18}$ |

## 在DRO-A实验中的应用

DRO-A卫星引力红移实验中测量了星-地时间频率比对的稳定性：

| 平均时间 | 4月28日 MDEV | 4月29日 MDEV |
|:---|:---|:---|
| 10 s | $6.14 \times 10^{-13}$ | $7.01 \times 10^{-13}$ |
| 100 s | $8.03 \times 10^{-13}$ | $8.03 \times 10^{-13}$ |
| 1000 s | $4.58 \times 10^{-14}$ | $6.98 \times 10^{-14}$ |
| 2000 s | $1.27 \times 10^{-14}$ | $2.10 \times 10^{-14}$ |

实验表明：
- 1000秒平均时间的稳定性超过 $7 \times 10^{-14}$
- 2000秒平均时间的稳定性超过 $2 \times 10^{-14}$
- 稳定性比准确度好两个数量级，因此稳定性是限制引力红移测量的主要因素

## 相关概念

- [被动氢原子钟（PHM）](/glossary/fundamentals/passive-hydrogen-maser/)
- [引力红移（Gravitational Redshift）](/glossary/fundamentals/gravitational-redshift/)
- [双向单程测距（DOWR）](/glossary/fundamentals/dual-one-way-ranging/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)

## 参考文献

- Allan D W 1966 Proc. IEEE 54 221
- Li Y, Liu T et al. 2026 Chin. Phys. Lett. 43 031101