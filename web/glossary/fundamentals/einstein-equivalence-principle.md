---
title: 爱因斯坦等效原理（Einstein Equivalence Principle, EEP）
description: 详细解析爱因斯坦等效原理的三个子原理——弱等效原理、局域洛伦兹不变性和局域位置不变性，及引力红移实验对LPI的检验
keywords: 爱因斯坦等效原理, EEP, 局域位置不变性, LPI, 局域洛伦兹不变性, 弱等效原理, WEP, 引力红移, 基本物理检验
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 爱因斯坦等效原理（Einstein Equivalence Principle, EEP）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 爱因斯坦等效原理（Einstein Equivalence Principle, EEP）详解 | 术语定义
  description: 详细解析爱因斯坦等效原理的三个子原理及引力红移实验对LPI的检验
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 爱因斯坦等效原理（Einstein Equivalence Principle, EEP）详解 | 术语定义
  description: 详细解析爱因斯坦等效原理的三个子原理及引力红移实验对LPI的检验
  image: /logo.png
permalink: /glossary/fundamentals/einstein-equivalence-principle/
---

# 爱因斯坦等效原理（Einstein Equivalence Principle, EEP）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文参考：Li Y et al. 2026 Chin. Phys. Lett. 43 031101, Will C M 2014 Living Rev. Relativ. 17 4
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

爱因斯坦等效原理（Einstein Equivalence Principle, EEP）是广义相对论的核心基石，也是目前检验广义相对论有效性的关键框架。EEP表明：在任何引力场中自由下落的局部参考系内，非引力物理定律的形式与无引力时完全相同。

EEP包含三个子原理，分别从不同角度约束物理定律的引力不变性。

## 三个子原理

### 弱等效原理（Weak Equivalence Principle, WEP）

弱等效原理是最经典的等效原理表述，又称"引力质量等于惯性质量"原理。其核心内容为：

> 所有物体在引力场中的加速度相同，与物体的组成和结构无关。

数学表述为：
$$\frac{m_i}{m_g} = 1$$

WEP的验证实验包括：

- 牛顿时代的落体实验
- 厄特弗什（Eötvös）扭秤实验
- MICROSCOPE卫星实验（精度达 $10^{-15}$）

### 局域洛伦兹不变性（Local Lorentz Invariance, LLI）

局域洛伦兹不变性表明：

> 在任意时空点的局部惯性系中，所有非引力物理定律的表达式不依赖于参考系的速度。

即物理定律在洛伦兹变换下保持不变。LLI的验证通常通过比较不同自旋方向的原子钟振荡频率来实现。

### 局域位置不变性（Local Position Invariance, LPI）

局域位置不变性是EEP中与引力红移直接相关的子原理：

> 在自由下落的局部参考系中，任何非引力实验的结果与实验发生的时间和空间位置无关。

LPI的核心含义是：基本物理常数（如精细结构常数 $\alpha$、电子-质子质量比 $m_e/m_p$ 等）不依赖于引力势。引力红移实验正是通过检验这一假设来验证LPI。

## LPI的数学表述

引力红移效应与LPI的关联通过引入违反参数 $\alpha$ 来描述：

$$\frac{\Delta f}{f} = (1 + \alpha) \frac{\Delta U}{c^2}$$

其中：

- $\Delta f/f$ 是两个时钟的相对频率偏移
- $\Delta U$ 是引力势差
- $c$ 是真空光速
- $\alpha$ 是LPI违反参数

若LPI成立，则 $\alpha = 0$；若LPI被违反，$\alpha$ 将偏离零。

## 各子原理的检验状态

| 子原理 | 检验精度 | 代表性实验 |
| :--- | :--- | :--- |
| WEP | $10^{-15}$ | MICROSCOPE卫星 |
| LLI | $10^{-22}$ | 原子钟对比 |
| LPI | $10^{-5}$ | Galileo卫星引力红移 |

目前，LPI是EEP中检验精度最低的子原理，这也是引力红移实验持续受到重视的原因。

## 与引力红移测量的关系

引力红移实验是检验LPI的主要手段。通过测量位于不同引力势处时钟的频率差，可以约束LPI违反参数 $\alpha$。

历史上重要的引力红移实验：

1. **Pound-Rebka-Snider实验**（1960s）：地面实验，精度~1%
2. **Gravity Probe A**（1976）：空间maser钟，精度 $1.41 \times 10^{-4}$
3. **Galileo卫星**（2018）：椭圆轨道调制，精度 $0.19 \times 10^{-5}$
4. **DRO-A卫星**（2025）：地月空间DRO首次实测，精度 $8.74 \times 10^{-3}$

## 地月空间测量的未来展望

地月空间的独特环境为LPI检验提供了新的机遇：

1. **更大引力势差**：DRO的引力势差（$\sim 6.8 \times 10^{-10}$）比地面实验大数个量级
2. **更长观测时间**：DRO轨道稳定，可实现长期连续观测
3. **更高精度原子钟**：部署准确度达 $10^{-16}$ 的冷原子钟后，预期精度可达 $10^{-6}$

## 相关概念

- [引力红移（Gravitational Redshift）](/glossary/fundamentals/gravitational-redshift/)
- [被动氢原子钟（PHM）](/glossary/fundamentals/passive-hydrogen-maser/)
- [双向单程测距（DOWR）](/glossary/fundamentals/dual-one-way-ranging/)
- [阿伦偏差（ADEV）](/glossary/fundamentals/allan-deviation/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)

## 参考文献

- Will C M 2014 Living Rev. Relativ. 17 4
- Li Y, Liu T et al. 2026 Chin. Phys. Lett. 43 031101
- Delva P et al. 2018 Phys. Rev. Lett. 121 231101
- Herrmann S et al. 2018 Phys. Rev. Lett. 121 231102
