---
title: Hill三体模型（Hill Three-Body Problem）
description: 详细解析Hill三体模型的定义、线性化假设、Hill-Brown理论，以及在日地月系统中的应用
keywords: Hill三体模型, Hill Three-Body Problem, Hill-Brown理论, CRTBP, 线性化, 日地月系统, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Hill三体模型（Hill Three-Body Problem）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Hill三体模型详解 | 日地月系统的简化动力学描述
  description: 详细解析Hill三体模型的定义、线性化假设、Hill-Brown理论，以及在日地月系统中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Hill三体模型详解 | 日地月系统的简化动力学描述
  description: 详细解析Hill三体模型的定义、线性化假设、Hill-Brown理论，以及在日地月系统中的应用
  image: /logo.png
permalink: /glossary/dynamics/hill-three-body/
---

# Hill三体模型

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Hill三体模型（Hill Three-Body Problem）是由美国天文学家George William Hill于1878年提出的限制性三体问题的进一步简化模型。该模型在圆型限制性三体问题（CRTBP）的基础上，将旋转坐标系的原点由系统质心平移至第二主天体（如月球）中心，并假设距离比 $R/R_1 \ll 1$（$R$ 为第二主天体与第一主天体的距离，$R_1$ 为小天体与第二主天体的距离），对引力项进行线性化近似。

Hill模型最初用于研究日地月系统中月球的运动规律，后经Ernest William Brown改进，形成了经典的Hill-Brown月球运动理论。该模型也可近似描述质量比较小的系统中探测器在第二主天体附近的运动，如航天器在月球附近的轨道动力学分析。

## 核心要素

### 基本假设与简化

Hill模型的核心假设包括：

1. **坐标平移**：将参考系原点置于第二主天体（如月球）中心
2. **小参数假设**：第二主天体到第一主天体的距离远大于小天体到第二主天体的距离
3. **引力线性化**：在小参数假设下，对第一主天体的引力进行Taylor展开并保留低阶项

线性化后的运动方程为：

$$\ddot{x} - 2n\dot{y} - n^2 x = -\frac{\mu}{r^3}x + 3n^2 x$$
$$\ddot{y} + 2n\dot{x} - n^2 y = -\frac{\mu}{r^3}y$$
$$\ddot{z} = -\frac{\mu}{r^3}z - n^2 z$$

其中 $n$ 为轨道平均角速度，$\mu$ 为第二主天体的引力常数。

### Hill-Brown理论

Brown对Hill模型进行了系统性改进，主要贡献包括：

- **Fourier级数展开**：将月球运动方程的解展开为Fourier级数
- **收敛性保证**：证明了级数展开的收敛性
- **高阶修正**：逐步引入高阶项提高精度
- **系统化方法**：建立了从低阶到高阶逐步求解的系统化方法

### 与CRTBP的关系

Hill模型与CRTBP的关系体现在：

| 对比项 | CRTBP | Hill模型 |
|:---|:---|:---|
| 参考系原点 | 系统质心 | 第二主天体中心 |
| 引力处理 | 精确（无近似） | 线性化近似 |
| 适用范围 | 全空间 | 第二主天体附近 |
| 数学复杂度 | 高（非线性） | 较低（可线性化） |
| 物理保真度 | 较高 | 有限 |

### 适用条件与局限性

Hill模型的适用范围和局限性包括：

- **适用条件**：小天体运动范围远小于两个主天体之间的距离
- **优势**：方程形式简化，可进行部分解析处理
- **局限性**：不适用于远离第二主天体的运动，无法描述跨系统转移

## 相关概念

- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [平动点（Libration Point）](/glossary/dynamics/libration-point/)
- [Clohessy-Wiltshire方程](/glossary/dynamics/clohessy-wiltshire/)

## 参考文献

- Hill G W. Researches in the lunar theory[J]. American Journal of Mathematics, 1878, 1(1): 5-26.
- Brown E W. An introductory treatise on the lunar theory[M]. Cambridge University Press, 1896.
- Szebehely V. Theory of Orbits: The Restricted Problem of Three Bodies[M]. Academic Press, 1967.
