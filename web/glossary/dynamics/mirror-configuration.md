---
title: 镜像构型（Mirror Configuration）
description: "圆型限制性三体问题中关于对称平面的一种状态：位置落在对称平面内，速度垂直于该平面，在关于该平面反射并反转时间的联合变换下保持不变。两个相隔半个周期的镜像构型互为镜像，可拼成对称周期轨道，是晕轨道等周期解计算与长期捕获轨道种子反推的初值来源。"
keywords: 镜像构型, Mirror Configuration, 对称周期轨道, 垂直穿越, 镜像对称, CR3BP, 周期轨道
author: 天疆说
date: 2026-10-28
lastUpdated: 2026-10-28
wechatShare:
  title: 镜像构型（Mirror Configuration）
  desc: "位置落在对称平面内、速度垂直于该平面的状态，两个相隔半个周期即可拼成对称周期轨道。"
  image: /logo.png
og:
  title: 镜像构型（Mirror Configuration）详解 | 术语定义
  description: "位置落在对称平面内、速度垂直于该平面的状态，在反射与时间反演的联合变换下不变，用于构造对称周期轨道。"
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 镜像构型（Mirror Configuration）详解 | 术语定义
  description: "位置落在对称平面内、速度垂直于该平面的状态，在反射与时间反演的联合变换下不变，用于构造对称周期轨道。"
  image: /logo.png
permalink: /glossary/dynamics/mirror-configuration/
aliases:
  - mirror configuration
related:
  - ref: dynamics/theorem-of-image-trajectories
    relation: related
  - ref: orbits/orthogonal-plane-crossing-condition
    relation: related
  - ref: orbits/halo-orbit
    relation: related
  - ref: orbits/lyapunov-orbit
    relation: related
  - ref: dynamics/poincare-map
    relation: related
  - ref: dynamics/differential-correction
    relation: related
  - ref: dynamics/continuation
    relation: related
---

# 镜像构型（Mirror Configuration）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

镜像构型是圆型限制性三体问题中关于对称平面的一种状态：位置落在对称平面内，速度垂直于该平面。以地月旋转坐标系的 x-z 平面为对称平面时，位置满足 y=0，速度的 x 与 z 分量为零，只剩 y 分量。位置在平面内、速度沿平面法向，两者自然垂直，所以位置与速度的点积为零是这一定义的推论，不是定义本身\cite{szebehelyTheoryOrbitRestricted1967}。

这一定义来自运动方程的对称性。CR3BP 的方程在关于 x-z 平面反射并反转时间的联合变换下保持不变，镜像构型是该变换下状态保持不变的点。反射把位置映回自身，反射与时间反转合成后只把速度的面内分量变号。镜像构型处这些分量都为零，状态保持不变，轨迹经过该点时与自身的镜像相接，这也是“镜像”一词的来源\cite{szebehelyTheoryOrbitRestricted1967}。

位置与速度垂直只是镜像构型的必要条件。它等价于到旋转系原点的距离取极值，满足它的状态可以在相空间任何位置出现，不一定落在对称平面上。单凭位置与速度垂直不能判定周期解。

## 对称性与周期轨道的构造

联合变换写全为

$$
(x,y,z,\dot x,\dot y,\dot z,t)\mapsto(x,-y,z,-\dot x,\dot y,-\dot z,-t).
$$

镜像构型把一条轨迹分成互为镜像的两段。从镜像构型出发沿相流积分，若在时刻 $T/2$ 再次垂直穿越同一平面，则第二段轨迹是第一段关于 x-z 平面的镜像，两段首尾相接构成周期为 $T$ 的对称周期轨道\cite{mieleTheoremImageTrajectories1961,gomezDynamicsMissionDesign2001Vol1}。对只经过两个镜像构型的对称轨道，第二个状态是第一个的镜像，位置分量相同，速度反向。

数值求解时，未知量取对称平面上的状态分量与半周期。以 x-z 平面为例，初值形如 $(x_0,0,z_0,0,\dot y_0,0)$，打靶条件要求积分 $T/2$ 后再次满足 $y=0$、$\dot x=0$、$\dot z=0$。固定一个族参数，例如面外振幅 $z_0$ 或雅可比常数，条件数与未知量数相等，用[微分修正](/glossary/dynamics/differential-correction/)或多次打靶收敛。这样求出的轨道关于 x-z 平面对称，周期为 $T$。

[晕轨道](/glossary/orbits/halo-orbit/)是最直接的例子。单条晕轨道关于 x-z 平面对称，每圈两次垂直穿越该平面，两次穿越点都是镜像构型，中间隔半个周期\cite{gomezDynamicsMissionDesign2001Vol1}。平面 Lyapunov 轨道与 DRO 也各有两次镜像构型，它们落在 x 轴穿越点上，此时 $y=z=0$ 且 $\dot x=\dot z=0$。

## 与相邻概念的区别

### 与图像轨迹定理

[图像轨迹定理](/glossary/dynamics/theorem-of-image-trajectories/)断言，一条可行轨迹经过时间反射与符号变换得到的镜像轨迹同样可行\cite{mieleTheoremImageTrajectories1961}。定理管的是整条轨迹的可行性，镜像构型管的是轨迹上与镜像相接的单个状态。两者配合使用，定理保证镜像段是解，镜像构型给出把两段拼成周期轨道的连接条件。

### 与正交穿平面条件

[正交穿平面条件](/glossary/orbits/orthogonal-plane-crossing-condition/)是晕轨道设计中的周期性约束，要求轨道在 $t=0$ 与 $t=T/2$ 两次正交穿越 x-z 平面。镜像构型是每次穿越处的状态。前者是设计条件，后者是状态概念。写词条或论文时不要用条件名指代状态，也不要用状态名指代条件。

### 与位置速度垂直

在 x-z 平面穿越点上，位置与速度的点积为零自动成立，但反过来不成立。到原点距离的极值点都满足垂直条件，它们不一定在对称平面上，也不一定成对出现半个周期。把垂直当作镜像构型的定义，会把大量非对称状态误判为周期轨道候选。

### 与晕轨道南北族的镜像

单条晕轨道关于 x-z 平面对称，这是镜像构型所依赖的对称性。北族与南族之间关于 xy 平面互为镜像，这是族与族之间的关系，不是同一条轨道上的镜像构型。两种对称性的平面不同，混用会把南北族关系错写成单条轨道的性质。

## 在周期解研究中的用法

从晕族分岔出的三维周期解研究把镜像构型作为描述半周期回归的几何条件。Howell 与 Campbell 1999 以 L1、L2 晕族为基线，识别出与其他三维族的相交与分岔，并数值计算了这些族中的轨道\cite{howellThreeDimensionalPeriodic1999}。用镜像构型写闭合条件，可以把周期轨道问题化为对称平面上的打靶，这正是上一节构造方法的来源。

长期捕获轨道搜索也用到同一几何。[庞加莱映射](/glossary/dynamics/poincare-map/)的近星点图上，non-transit 点附近的周期轨道种子可以由镜像构型反推初值，再经[延拓](/glossary/dynamics/continuation/)得到。

## 相关概念

- [图像轨迹定理（Theorem of Image Trajectories）](/glossary/dynamics/theorem-of-image-trajectories/)
- [正交穿平面条件（Orthogonal Plane-Crossing Condition）](/glossary/orbits/orthogonal-plane-crossing-condition/)
- [晕轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [Lyapunov 轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [庞加莱映射（Poincaré Map）](/glossary/dynamics/poincare-map/)
- [微分修正（Differential Correction）](/glossary/dynamics/differential-correction/)
- [延拓（Continuation）](/glossary/dynamics/continuation/)
