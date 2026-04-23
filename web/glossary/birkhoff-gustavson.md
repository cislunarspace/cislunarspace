---
title: Birkhoff-Gustavson标准型（Birkhoff-Gustavson Normal Form）
description: 详细解析Birkhoff-Gustavson标准型的定义、在哈密顿系统正则变换中的应用，以及在地月空间平动点轨道参数化中的作用
keywords: Birkhoff-Gustavson标准型, Hamilton系统, 正则变换, 标准型理论, 平动点轨道, 勒让德展开, 中心流形
author: 天疆说
date: 2026-04-23
lastUpdated: 2026-04-23
wechatShare:
  title: Birkhoff-Gustavson标准型
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Birkhoff-Gustavson标准型详解 | 哈密顿系统正则变换
  description: 详细解析Birkhoff-Gustavson标准型的定义、在哈密顿系统正则变换中的应用，以及在地月空间平动点轨道参数化中的作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Birkhoff-Gustavson标准型详解 | 哈密顿系统正则变换
  description: 详细解析Birkhoff-Gustavson标准型的定义、在哈密顿系统正则变换中的应用，以及在地月空间平动点轨道参数化中的作用
  image: /logo.png
permalink: /glossary/birkhoff-gustavson/
---

# Birkhoff-Gustavson标准型

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文编辑来源：Qiao et al. (2025) "Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points"
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Birkhoff-Gustavson 标准型（Birkhoff-Gustavson Normal Form，简称 B-G 标准型）是一种将哈密顿系统在平衡点附近展开为对角化多项式形式的**正则变换方法**，由 Birkhoff（1927）提出，后经 Gustavson（1966）应用于天体力学中的恒星星系问题。

在圆型限制性三体问题（CR3BP）中，Birkhoff-Gustavson 标准型通过对平动点附近的哈密顿函数进行**勒让德展开**（Legendre expansion）和**李变换**（Lie transformation），将高阶非线性项逐步消除，最终得到可分离的、对角化的哈密顿表达式，使系统在小扰动下具有**可积性**。

## 数学背景

### 从 CR3BP 到多项式哈密顿量

CR3BP 的哈密顿函数在平动点邻域内经坐标平移和归一化后，可展开为齐次多项式序列：

$$H = \sum_{n \geq 2} H_n = H_2 + H_3 + H_4 + \cdots$$

其中 $H_n$ 是 $n$ 阶齐次多项式。通过 Legendre 展开，非线性项 $(1-\mu)/r_1$ 和 $\mu/r_2$ 可转化为多项式形式：

$$\frac{1}{\sqrt{(x-A)^2+(y-B)^2+(z-C)^2}} = \frac{1}{D}\sum_{n=0}^{\infty}\left(\frac{\rho}{D}\right)^n P_n\left(\frac{Ax+By+Cz}{D\rho}\right)$$

其中 $P_n$ 为 $n$ 阶 Legendre 多项式。

### 线性项 $H_2$ 的对角化

在平动点邻域，线性化哈密顿量 $H_2$ 对应**鞍×中心×中心**（saddle × center × center）的动力学结构：

$$H_2 = \lambda q_1 p_1 + \frac{\omega_p}{2}(q_2^2 + p_2^2) + \frac{\omega_\nu}{2}(q_3^2 + p_3^2)$$

其中：

- $\lambda$：双曲特征频率（不稳定方向）
- $\omega_p$、$\omega_\nu$：两个中心模（center mode）的特征频率

通过实线性辛变换矩阵 $C$（满足 $C^TJC = J$），可将原始坐标映射到对角化基底下。

### Gustavson 的贡献

Gustavson（1966）证明：通过将哈密顿量归一化至无穷阶，可以获得**额外的积分**（除哈密顿量本身外）。这一方法被称为"间接法"（indirect method），利用李级数将哈密顿量转换为 Birkhoff-Gustavson 标准型，从而直接识别出积分。

## 李变换（Lie Transformation）过程

标准型的构造通过**李变换**（Lie transformation）实现。对于 $n$ 阶生成函数 $G_n$，变换后的哈密顿量为：

$$\hat{H}_n = H_n + \{H_2, G_n\}$$

通过选择适当的生成函数 $G_n$，可逐步消除非共振项，同时保留共振项（共振项对于理解 Halo 轨道族的分叉至关重要）。具体而言：

- 对三阶项：通过 $G_3$ 消除 $i_1 \neq j_1$ 的项（保持双曲部分 $q_1 p_1$ 的完整性）
- 对高阶项：逐阶使用 $G_n$ 进行消除

归一化精度与计算成本存在权衡。Qiao et al. (2025) 指出：当展开阶数 $N$ 超过 13 时，误差减小趋缓（受限于双精度浮点 15 位有效数字），建议取 $N=15$。

## 与其他方法的关系

| 方法 | 精度 | 可积性 | 局限 |
|:---|:---|:---|:---|
| 线性化（$H_2$）| 低 | 精确可积 | 仅适用于平动点极邻域 |
| B-G 标准型（中低阶）| 中 | 近似可积 | 共振项被消除，高振幅轨道误差大 |
| **完整 B-G 标准型（$N \to \infty$）** | **高** | **可积** | **计算量指数增长** |
| 中心流形理论 | — | 半可积 | 仅处理中心方向 |

Qiao et al. (2025) 的方法在此基础上引入了**中心流形理论**，将双曲不稳定方向从中心流形中解耦，形成一套更完整的参数化体系。

## 应用

在 Qiao et al. (2025) 的研究中，Birkhoff-Gustavson 标准型与中心流形理论结合，用于：

1. 将 CR3BP 六维相空间分解为双曲方向（$q_1, p_1$）和中心流形方向（$I_2, \theta_2, I_3, \theta_3$）
2. 建立从笛卡尔坐标到特征参数的**双射对应**
3. 通过 Poincaré 截面建立平动点轨道分布图

## 相关概念

- [中心流形（Central Manifold）](/glossary/central-manifold/)
- [正则变换（Canonical Transformation）](/glossary/canonical-transformation/)
- [作用角变量（Action-Angle Variables）](/glossary/action-angle/)
- [圆型限制性三体问题（CR3BP）](/glossary/cr3bp/)
- 李变换（Lie Transformation）
- 哈密顿系统（Hamiltonian System）
- Poincaré 截面（Poincaré Section）

## 参考文献

- Birkhoff G D. Dynamical systems[M]. American Mathematical Society, 1927.
- Gustavson F G. On constructing formal integrals of a Hamiltonian system near an equilibrium point[J]. Astronomical Journal, 1966, 71: 670.
- Jorba À, Masdemont J. Dynamics in the center manifold of the collinear points of the restricted three body problem[J]. Phys D, 1999, 132(1-2): 189-213.
- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025. doi: 10.1016/j.cja.2025.103869.
