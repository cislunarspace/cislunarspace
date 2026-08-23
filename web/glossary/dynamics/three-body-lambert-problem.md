---
title: 三体 Lambert 问题（Three-Body Lambert Problem）
description: 在限制性三体模型（CR3BP）框架下，给定起点、终点和飞行时间求解连接轨道的边值问题。无解析解，必须数值求解；初值估计是核心难点；对同一组边界条件可能存在多条本质不同的解。覆盖 L3BP / CR3BP Lambert 问题同义关系、与二体 Lambert 的根本差异、初值方法（二体解 + 同伦牛顿迭代 / 遗传算法 / Sukhanov-Pravo 两层迭代）、多解性及其与不变流形/Halo 轨道的关联。
keywords: 三体 Lambert 问题, Three-Body Lambert Problem, L3BP, CR3BP Lambert 问题, 三体两点边值问题, Halo 轨道交会, 同伦牛顿法, 不变流形
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 三体 Lambert 问题（Three-Body Lambert Problem）
  desc: CR3BP 框架下的两点边值问题——无解析解、初值难求、多解并存。
  image: /logo.png
og:
  title: 三体 Lambert 问题（Three-Body Lambert Problem）详解 | 术语定义
  description: 在限制性三体模型（CR3BP）框架下，给定起点、终点和飞行时间求解连接轨道的边值问题。无解析解，必须数值求解；初值估计是核心难点；对同一组边界条件可能存在多条本质不同的解。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 三体 Lambert 问题（Three-Body Lambert Problem）详解 | 术语定义
  description: 在限制性三体模型（CR3BP）框架下，给定起点、终点和飞行时间求解连接轨道的边值问题。无解析解，必须数值求解；初值估计是核心难点；对同一组边界条件可能存在多条本质不同的解。
  image: /logo.png
permalink: /glossary/dynamics/three-body-lambert-problem/
---

# 三体 Lambert 问题（Three-Body Lambert Problem）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

三体 Lambert 问题（Three-Body Lambert Problem，3BLP；亦记 L3BP，即 Lambert Three-Body Problem；在 CR3BP 模型下又称 CR3BP Lambert 问题）是 [Lambert 问题](/glossary/fundamentals/lamberts-problem/) 在三体动力学框架下的推广：在 [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/) 模型下，给定起点 $\vec r_1$（时刻 $t_1$）、终点 $\vec r_2$（时刻 $t_2$）、飞行时间 $\Delta t=t_2-t_1$，求连接两端的轨道及两端的速度（孙俞 等 2017）。

由于 CR3BP 运动方程不可积、对初值高度敏感，三体 Lambert 问题**不存在解析解**，只能数值求解；初值估计是核心难点，简单的 Newton-Raphson 打靶对长时间转移几乎不收敛。

## 与二体 Lambert 问题的根本差异

| 方面 | 二体 Lambert | 三体 Lambert |
|---|---|---|
| 解的存在性 | Lambert 定理保证，至多 $2N+1$ 解 | 无解析结构，存在性需由数值方法判定 |
| 时间-轨道映射 | $\Delta t$ 只依赖 $a,\,r_1+r_2,\,c$ | $\Delta t$ 与轨道形状耦合，Lambert 定理失效 |
| 多解性 | 至多 $2N+1$（按圈数和短/长程分支） | 可能有多条**本质不同**的解（短弧/长弧/绕月/多圈/流形类） |
| 守恒量 | 能量、角动量 | [雅可比常数](/glossary/dynamics/jacobi-integral/) $C_J$（可作为额外约束或自由参数） |
| 平面 | 两矢量自动确定 | 两矢量不唯一确定平面（三维转移常见） |
| 求解方法 | 一个超越方程 + 标准算法 | 数值打靶 + 微分改正，依赖好初值 |

## 初值方法

求解三体 Lambert 问题本质上是两端固定的打靶问题。常用初值策略：

- **二体解 + 同伦迭代**：先求二体 Lambert 解 $\vec v_1^{(2B)}$ 作初值，再引入同伦参数 $\lambda\in[0,1]$ 把动力学从二体连续变形到 CR3BP（[同伦法](/glossary/dynamics/homotopy-method/)），每步用 Newton-Raphson 收敛；此法对长时间转移显著优于直接打靶（孙俞 等 2017）。

- **遗传算法作参考轨道**：用 GA 全局搜索一条粗略满足边界的位置-时间序列作参考，再上同伦牛顿迭代精化，能解决长时间 Halo 间转移收敛性差的问题（孙俞 等 2017）。

- **Sukhanov-Prado 两层迭代**：在 Hill 模型下同时修正初末位置矢量，收敛性好但无法保证收敛到期望解（因三体 Lambert 多解）。

- **不变流形拼接**：对平动点轨道之间的转移，把问题化为两条 Halo/Lissajous 轨道的不稳定流形与稳定流形的 [庞加莱截面](/glossary/fundamentals/synodic-frame/) 拼接，再以三体 Lambert 精化。

## 多解性

同一组 $(\vec r_1,\vec r_2,\Delta t)$ 可能对应多条本质不同的转移轨道：直接短弧、绕月长弧、绕地球多圈后到达、借助日地摄动的低能转移等。这是 CR3BP 非线性动力学的直接结果，与二体 Lambert 至多 $2N+1$ 解形成对比。实际工程中通常：

- 限定 [雅可比常数](/glossary/dynamics/jacobi-integral/) $C_J$ 的范围，把搜索空间裁剪到能量可行的子集；

- 限定绕行方向（绕月/绕地/绕日地 $L_1$）；

- 用 [微分改正](/glossary/dynamics/differential-correction/) 配合多条初值并行打靶，挑选 $\Delta v$ 最小的解。

对 [Halo 轨道计算](/glossary/dynamics/halo-orbit-computation/) 与平动点交会，这种多解性既是麻烦（需筛选），也是机会（多一条候选意味着可能更省燃料）。

## 应用要点

- **平动点交会对接**：同一 Halo 轨道不同相位两航天器间的转移、不同振幅 Halo 间的转移，是地月 $L_2$ 空间站建设的基础工具（孙俞 等 2017）。

- **低能地月转移**：配合日地摄动设计 WSB、流形拼接转移。

- **多弧段拼接**：把一条 cislunar 转移切成多段三体 Lambert 弧，每段独立求解再拼接。

- **不能解析处理**：所有应用都需要稳定的数值流程与好初值，这是与二体 Lambert 工程化使用的最大区别。

## 相关概念

- [兰伯特问题（Lambert's Problem）](/glossary/fundamentals/lamberts-problem/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [雅可比常数（Jacobi Constant）](/glossary/dynamics/jacobi-integral/)

- [平动点（Libration Point）](/glossary/fundamentals/libration-point/)

- [Halo 轨道计算（Halo Orbit Computation）](/glossary/dynamics/halo-orbit-computation/)

- [微分改正（Differential Correction）](/glossary/dynamics/differential-correction/)

- [同伦方法（Homotopy Method）](/glossary/dynamics/homotopy-method/)

- [两点边值问题（Two-Point Boundary Value Problem）](/glossary/dynamics/tpbvp/)

## 参考文献

- 孙俞, 张进, 罗亚中, 2017, 基于三体 Lambert 算法的平动点交会轨道设计（地月 $L_2$ Halo 间交会，遗传算法 + 同伦牛顿迭代求解法）

- Vallado, 2022, Fundamentals of Astrodynamics and Applications, §7.6（二体 Lambert 问题，作对照与本词族上位概念）

- Szebehely, 1967, Theory of Orbits: The Restricted Problem of Three Bodies（CR3BP 框架）
