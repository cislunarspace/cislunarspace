---
title: 春分点轨道根数（Equinoctial Orbital Elements）
description: 解析春分点轨道根数的定义、与经典轨道根数的转换关系、以及在轨道控制中的应用优势
keywords: 春分点轨道根数, Equinoctial Orbital Elements, MEE, Modified Equinoctial Elements, 轨道根数, 轨道控制
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 春分点轨道根数（Equinoctial Orbital Elements）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 春分点轨道根数详解 | 轨道控制中的数值稳定性
  description: 解析春分点轨道根数的定义、优势及其在轨道控制中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 春分点轨道根数详解 | 轨道控制中的数值稳定性
  description: 解析春分点轨道根数相比经典轨道根数的优势
  image: /logo.png
permalink: /glossary/dynamics/equinoctial-elements/
---

# 春分点轨道根数（Equinoctial Orbital Elements）

>本文编辑来源：胡敏, 肖金伟, 张天天, 陶雪峰 (2026) "面向中高轨小卫星批量部署的轨道转移飞行器任务规划"
>
>Narayanaswamy S, Damaren C J. Equinoctial Lyapunov control law for low-thrust rendezvous[J]. Journal of Guidance, Control, and Dynamics, 2023, 46(4): 781-795.
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

春分点轨道根数（Equinoctial Orbital Elements）是一类非奇异的轨道根数表示方法，通过将经典轨道根数进行三角函数变换，避免了经典根数在近圆轨道和小倾角情况下的奇异性问题。

改进春分点轨道根数（Modified Equinoctial Elements, MEE）是其改进形式，在Q-law控制律中具有更好的数值稳定性和控制性能。

## 数学定义

### 经典轨道根数

经典轨道根数包括：
- $a$：半长轴
- $e$：偏心率
- $i$：轨道倾角
- $\omega$：近地点幅角
- $\Omega$：升交点赤经
- $\theta$：真近点角

### 改进春分点轨道根数（MEE）

胡敏等（2026）采用的MEE定义为：

$$\begin{cases}
p = a(1 - e^2) \\
e_1 = e\cos(\omega + \Omega) \\
e_2 = e\sin(\omega + \Omega) \\
h_1 = \tan(i/2)\cos\Omega \\
h_2 = \tan(i/2)\sin\Omega \\
L = \omega + \Omega + \theta
\end{cases}$$

其中：
- $p$：半通径
- $e_1, e_2$：偏心率矢量分量
- $h_1, h_2$：轨道面法向矢量分量
- $L$：真经度

## 优势分析

### 数值稳定性

| 问题类型 | 经典根数 | MEE |
|:---|:---|:---|
| 近圆轨道(e≈0) | 倾角i和近地点幅角ω定义模糊 | 无奇异性 |
| 小倾角(i≈0) | 升交点赤经Ω定义模糊 | 无奇异性 |
| 大偏心率 | 数值计算稳定 | 数值计算稳定 |

### 控制性能

胡敏等（2026）的研究表明，采用半长轴a代替半通径p的改进形式具有更好的控制性能：

$$p = a(1 - e^2)$$

这种改进使得控制律在优化过程中对半长轴的直接控制更加自然和稳定。

### 几何解释

MEE的各分量具有清晰的几何意义：

- **$e_1, e_2$**：偏心率矢量，描述轨道椭圆形状和朝向
- **$h_1, h_2$**：描述轨道平面在空间中的朝向
- **$L$**：真经度，快速变化量，描述航天器瞬时位置

## 在Q-law控制中的应用

### Q函数定义

在Q-law控制律中，Q函数定义为MEE误差的加权二次型：

$$Q(Z) = (1 + W_P P) \sum_{i=1}^{5} W_i S_i \left(\frac{\delta Z_i}{\max_L(\dot{X}_i)}\right)^2$$

其中 $\delta Z_i$ 是各MEE分量的误差。

### 归一化度量

轨道误差的归一化度量基于MEE：

$$\sigma_{oe} = \left(\frac{\Delta a}{R_G}\right)^2 + (\Delta e_1)^2 + (\Delta e_2)^2 + (\Delta h_1)^2 + (\Delta h_2)^2$$

其中 $R_G$ 为地球同步轨道半径，用于无量纲化处理。

### 入轨精度判定

仿真终止条件基于入轨精度阈值：

$$\sigma_{oe} \leq \varepsilon$$

研究中使用 $\varepsilon = 1 \times 10^{-6}$ 量级的高精度标准。

## 与其他轨道表示法的比较

| 表示方法 | 维度 | 奇异性 | 适用场景 |
|:---|:---|:---|:---|
| 经典根数 | 6 | 有（e=0, i=0, i=π） | 一般轨道分析 |
| MEE | 6 | 无 | 轨道控制、优化 |
| CARTESIAN | 6 | 无 | 动力学积分 |
| Delaunay | 6 | 有 | 正则变换 |

## 相关概念

- [Q-law控制律](/glossary/dynamics/q-law/)
- [轨道转移飞行器（OTV）](/glossary/fundamentals/orbital-transfer-vehicle/)
- [批量部署（Batch Deployment）](/glossary/dynamics/batch-deployment/)
- [滑行弧（Coasting Arc）](/glossary/dynamics/coasting-arc/)

## 参考文献

- 胡敏, 肖金伟, 张天天, 陶雪峰. 面向中高轨小卫星批量部署的轨道转移飞行器任务规划[J]. 航天器工程, 2026, 25(3): 634-646.
- Narayanaswamy S, Damaren C J. Equinoctial Lyapunov control law for low-thrust rendezvous[J]. Journal of Guidance, Control, and Dynamics, 2023, 46(4): 781-795.
- Koon W S, Lo M W, Marsden J E, et al. Dynamical systems, the three-body problem and space mission design[M]. 2006.