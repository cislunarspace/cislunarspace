---
title: 无量纲化与归一化单位（Nondimensionalization / Normalized Units）
description: 用特征质量、特征长度、特征时间对运动方程的变量做缩放，使其化为无量纲形式；CR3BP 经无量纲化后只依赖单一参数——质量比 μ。覆盖地月系的标准取法（特征长度取两主天体平均距离，特征时间使平均运动 n = 1，特征质量取两主天体质量之和）及由此导出的归一化距离、时间与速度单位。
keywords: 无量纲化, 归一化单位, 特征量, 质量参数, CR3BP, 地月系统, 量纲分析, 正则单位
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 无量纲化与归一化单位（Nondimensionalization / Normalized Units）
  desc: 用特征质量、长度、时间缩放运动方程，CR3BP 化为只含单一参数 μ 的无量纲形式；附地月正则单位。
  image: /logo.png
og:
  title: 无量纲化与归一化单位详解 | 术语定义
  description: 用特征质量、特征长度、特征时间对运动方程的变量做缩放，使其化为无量纲形式；CR3BP 经无量纲化后只依赖单一参数——质量比 μ。覆盖地月系的标准取法及由此导出的归一化距离、时间与速度单位。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 无量纲化与归一化单位详解 | 术语定义
  description: 用特征质量、特征长度、特征时间对运动方程的变量做缩放，使其化为无量纲形式；CR3BP 经无量纲化后只依赖单一参数——质量比 μ。覆盖地月系的标准取法及由此导出的归一化距离、时间与速度单位。
  image: /logo.png
permalink: /glossary/fundamentals/nondimensionalization/
---

# 无量纲化与归一化单位（Nondimensionalization / Normalized Units）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

**无量纲化**（nondimensionalization）是用同量纲的特征量把运动方程的物理变量加以缩放，使新变量不含单位。在限制性三体问题中，无量纲化把所有量纲常数吸收掉，方程最终只保留一个无量纲参数：**质量比** $\mu = m_2/(m_1 + m_2)$。缩放后的一套变量称为**归一化单位**（normalized/canonical/dimensionless units）。

## 特征量的取法

CR3BP 的惯例（Szebehely 1967, §1.5）：

- **特征质量**：$m^* = m_1 + m_2$（两主天体质量之和），于是 $\mu = m_2/m^*$。

- **特征长度**：$l^* = $ 两主天体的（平均）距离。

- **特征时间**：使次天体绕主天体的平均运动等于 1，即 $t^* = 1/n$，其中 $n = \sqrt{G(m_1 + m_2)/(l^*)^3}$ 为量纲平均运动。由开普勒第三定律，$G(m_1 + m_2) t^{*2}/l^{*3} = 1$，新单位制下引力常数化为 1。

经此变换，两主天体分别位于 $(-\mu, 0, 0)$ 与 $(1-\mu, 0, 0)$，会合系角速度为 1，运动方程化为只显含 $\mu$ 的标准 CR3BP 形式（参见 [运动方程](/glossary/fundamentals/eom/)）。

## 地月系的归一化单位

取地月平均距离 $l^* \approx 384{,}400$ km，$\mu \approx 0.0121506$，得到：

- 单位长度 $l^* \approx 3.844 \times 10^5$ km；

- 单位时间 $t^* = 1/n \approx 3.752 \times 10^5$ s $\approx 4.342$ 天（两主天体公转一圈对应 $2\pi$ 时间单位）；

- 单位速度 $v^* = l^*/t^* \approx 1.025$ km/s。

不同文献取值略有差异，主要源于 $l^*$ 用半长轴还是瞬时距离，以及地月质量比的采用值；基于 DE440 的现代 $\mu$ 值约为 0.012150585。

## 为何要无量纲化

无量纲化有三层价值。（i）**普适性**：单一参数 $\mu$ 描述一切类地月、类日地、类日木系统，结论可按比例直接搬用。（ii）**数值稳定性**：以 $l^*$、$t^*$ 为工作单位，位置、速度、时间均为 $O(1)$，长弧积分中的浮点对消被压低。（iii）**概念清晰**：运动方程中各项（科氏 vs. 引力 vs. 离心）的相对重要性从无量纲形式直接读出。

一个常见误读：无量纲方程并不假设两主天体真实距离就是某个物理单位长度（Szebehely 1967, §1.5）。它对任何物理系统成立，只是缩放关系不同；回到物理量时按 $l^*$、$t^*$、$v^*$ 反向相乘即可。

## 相关概念

- [运动方程与状态方程（Equation of Motion）](/glossary/fundamentals/eom/)

- [会合坐标系（Synodic Frame）](/glossary/fundamentals/synodic-frame/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [雅可比常数（Jacobi Constant）](/glossary/dynamics/jacobi-integral/)

## 参考文献

- Szebehely, 1967, *Theory of Orbits*, §§1.2–1.5：量纲到无量纲方程的推导，以及对误把无量纲单位当成物理单位的告诫。

- Vallado, 2022, *Fundamentals of Astrodynamics and Applications*, §12.3：无量纲 CR3BP 方程与质量比。

- 李星明 等，2024，地月周期轨道对地月 L1 与 L2 附近 Halo 轨道的可见性分析：地月归一化单位的典型数值设置。

- 张晨，2024，北京航空航天大学学报：PBCR4BP 中以地月质量之和、平均距离、平均角速度为基准的归一化。
