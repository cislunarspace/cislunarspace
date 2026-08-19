---
title: 月心轨道（Moon-Centered Orbit）
description: 环绕月球运行、可由绕月二体初值（顺行逆行均可）延拓得到的周期轨道类，含 DRO、DPO、LoPO 三族（对应 Hénon f/g/g′族）；工程上的低月轨道/月球停泊轨道是低能转移的常用终点。
keywords: 月心轨道, Moon-Centered Orbit, DRO, DPO, LoPO, 低月轨道, 月球停泊轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: 月心轨道（Moon-Centered Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 月心轨道详解 | 术语定义
  description: 环绕月球运行、可由绕月二体初值（顺行逆行均可）延拓得到的周期轨道类，含 DRO、DPO、LoPO 三族（对应 Hénon f/g/g′族）；工程上的低月轨道/月球停泊轨道是低能转移的常用终点。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 月心轨道详解 | 术语定义
  description: 环绕月球运行、可由绕月二体初值（顺行逆行均可）延拓得到的周期轨道类，含 DRO、DPO、LoPO 三族（对应 Hénon f/g/g′族）；工程上的低月轨道/月球停泊轨道是低能转移的常用终点。
  image: /logo.png
permalink: /glossary/orbits/moon-centered-orbit/
---

# 月心轨道（Moon-Centered Orbit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义与分类位置

月心轨道是环绕月球运行、可由绕月二体问题的初值猜测（顺行、逆行均可）延拓得到的周期轨道（He 2026）。在周期轨道分类中，月心轨道与平动点轨道、共振轨道并列（He 2026、Folta 2015）。

## 三族成员

月心轨道含三族，分别对应 Hénon 1969（Hill 情形周期轨道分类）的 f、g、g′ 族（He 2026）：

- **DRO（远距逆行轨道，f 族）**：旋转系中绕月逆行，振幅增大时可扩展到 L1/L2 以外——见[远距离逆行轨道（DRO）](/glossary/orbits/distant-retrograde-orbit-dro/)。
- **DPO（远距顺行轨道，g 族）**：旋转系中呈「8」字形，近月点近月、远月点沿 y 向延伸。
- **LoPO（低顺行轨道，g′ 族）**：顺行近圆低振幅轨道，振幅增大时远月点沿 x 向延伸。

## 工程成员：低月轨道与月球停泊轨道

工程上常用的月心轨道是低月轨道（LLO）/月球停泊轨道——属二体近圆轨道而非三体轨道族。典型用法：取距月面 100 km 的近月圆轨道为停泊轨道；与之相切的大幅值 L1 Lyapunov 轨道，在切点（x 轴上）经一次切向减速脉冲即可直接进入停泊轨道（郑越 2023），该机制构成「一条流形连接近地与近月轨道」的地月低能转移（见[低能转移](/glossary/orbits/low-energy-transfer/)）。

## 月球周期轨道与流形相交的转移构造

Giancotti 2012 在平面 CR3BP 中引入圆柱同构映射，把给定雅可比常数的状态约化到 (x, y, γ) 相空间（γ 为速度方向角），使月球周期轨道与 L1 Lyapunov 轨道的不稳定流形可置于同一空间比较；沿两者的交点集取「只转动速度矢量、不改变大小」的最小脉冲。算例（C=3.185 的单圈月球周期轨道）：最优者从 L1 Lyapunov 轨道转入仅需 18.71 m/s。

## 相关统称

「近月周期轨道」（near-Moon periodic orbits）是按离月远近选出的跨类统称——成员含平动点轨道族（Halo、Lyapunov、Butterfly）与月心轨道族（DRO、LoPO）两类（Qi & Oguri 2023，用于光学自主定轨性能比较：近远月点距离差决定月球视直径变化范围，从而影响定轨性能）。它与「月心轨道」不是同一层概念，引用时注意区分。

## 术语变体对照

| 术语 | 含义 | 出处 |
|------|------|------|
| 月球停泊轨道 | 作转移终点的近月圆轨道（如 100 km） | 郑越 2023 |
| 月球周期轨道 | 平面 CR3BP 中绕月的闭合轨道 | Giancotti 2012 |
| 近月周期轨道 | 按离月远近选出的跨类统称 | Qi & Oguri 2023 |
| DPO / LoPO | 远距顺行 / 低顺行轨道（g / g′ 族） | He 2026 |

## 相关概念

- [远距离逆行轨道（Distant Retrograde Orbit, DRO）](/glossary/orbits/distant-retrograde-orbit-dro/)
- [准卫星轨道（Quasi-Satellite Orbit, QSO）](/glossary/orbits/qso-quasi-satellite-orbit/)
- [Lyapunov 轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [低能转移（Low-Energy Transfer）](/glossary/orbits/low-energy-transfer/)

## 参考文献

- Hénon, 1969, Numerical exploration of the restricted problem. V. Hill's case
- Giancotti, Pontani & Teofilatto, 2012, Lunar capture trajectories and homoclinic connections through isomorphic mapping
- Folta et al., 2015, An Earth-Moon system trajectory design reference catalog
- Qi & Oguri, 2023, Analysis of autonomous orbit determination in various near-Moon periodic orbits
- 郑越、赵敏, 2023, 基于大幅值 Lyapunov 轨道稳定流形的地月转移方法
- He et al., 2026, A review of cislunar constellation design and optimization
