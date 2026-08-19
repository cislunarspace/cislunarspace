---
title: 月球飞越辅助轨道面变换（Lunar-Flyby-Assisted Plane Change）
description: 一种利用月球飞越建立的面外速度分量来替代独立面外变轨的转移策略：航天器从面内地月转移轨道出发，借由近距月球飞越（通常配合动力近月点 PLF）产生面外分量，飞越后轨道面已转到目标轨道面上，可单脉冲进入三维 halo 轨道稳定流形（或在飞向 DRO 时改变数十度倾角），省去一次面外脉冲，节省量级 10^2 m/s。
keywords: 月球飞越辅助轨道面变换, 飞越面外转移, 月球飞越, 动力月球飞越, PLF, halo 流形入轨, 倾角变换, 低能转移
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 月球飞越辅助轨道面变换（Lunar-Flyby-Assisted Plane Change）
  desc: 用月球飞越的面外分量替面外变轨，省 10^2 m/s 量级的脉冲。
  image: /logo.png
og:
  title: 月球飞越辅助轨道面变换详解 | 术语定义
  description: 一种利用月球飞越建立的面外速度分量来替代独立面外变轨的转移策略：航天器从面内地月转移轨道出发，借由近距月球飞越（通常配合动力近月点 PLF）产生面外分量，飞越后轨道面已转到目标轨道面上，可单脉冲进入三维 halo 轨道稳定流形（或在飞向 DRO 时改变数十度倾角），省去一次面外脉冲，节省量级 10^2 m/s。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 月球飞越辅助轨道面变换详解 | 术语定义
  description: 一种利用月球飞越建立的面外速度分量来替代独立面外变轨的转移策略：航天器从面内地月转移轨道出发，借由近距月球飞越（通常配合动力近月点 PLF）产生面外分量，飞越后轨道面已转到目标轨道面上，可单脉冲进入三维 halo 轨道稳定流形（或在飞向 DRO 时改变数十度倾角），省去一次面外脉冲，节省量级 10^2 m/s。
  image: /logo.png
permalink: /glossary/dynamics/lunar-flyby-plane-change/
---

# 月球飞越辅助轨道面变换（Lunar-Flyby-Assisted Plane Change）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

月球飞越辅助轨道面变换是这样一种转移策略：让近距月球飞越建立的面外速度分量起到一次独立面外变轨的作用，从而省掉专门的面外脉冲。航天器从**面内**的地月转移轨道出发，在飞越中（通常配合动力近月点 PLF）让月球引力把 $\vec v_\infty$ 转出一个 $z$ 方向分量，飞越后轨道面已经落到目标轨道面上，于是可以用一次单脉冲转入三维 halo 轨道的稳定流形，或在飞向 DRO 的过程中把倾角拉到所需值。

## 几何与节省量

飞越的转向角 $\delta$ 在低近月点高度下很大（见 [月球飞越](/glossary/dynamics/lunar-flyby/)），若入射 $\vec v_\infty$ 在地月轨道面内、所选 B 平面瞄准点让出射 $\vec v_\infty(t_{\rm out})$ 带可观的 $z$ 分量，飞越就相当于用月球引力"免费"做了一次面外机动——等效 $\Delta v$ 可达 $10^2$ m/s 量级（Zanzottera et al. 2011, §5.1）。Peng 等（2024）在 GTO–DRO 转移里实测：飞越后落到地月轨道面所需的面内显式脉冲 $\Delta v_\Sigma$ 可压到 5 m/s 以内，而飞越本身等效提供了超过 200 m/s 的 $z$ 方向速度变化。

对于面内出发到 halo 轨道稳定流形的转移，这正是"单脉冲转移"成立的机理：飞越把面内的地月转移弧弯出地月轨道面、直接搭上 halo 稳定流形，省去了原本独立的面外变轨。

## 方法：二体筛查 + BCR4BP 修正

由于 BCR4BP 不可积，工程做法是先用**月心二体模型**筛查候选近月点状态、给出 $\Delta\vec v_{\rm per}$ 的初值猜测；再在 BCR4BP 的旋转坐标系（ROT）里做差分校正，使航天器按要求落到地月轨道面并匹配目标面内状态。月心二体的关系 $\tan\delta^+ = \hat v_p^z/\hat r_p^z$（Peng et al. 2024, Eq. 11）给出把出射 $z$ 方向 $\vec v_\infty$ 压零所需的转向角，再由两段双曲线的能量守恒解出 $|\Delta\vec v_{\rm per}|$。差分校正把残余 $z$ 速度清零并锁定到目标流形。

## 应用要点

- **GTO–DRO 低能转移**：与一段 WSB 弧和第二次 PLF 串接，飞越面外分量让从带倾角 GTO 出发的低能转移仍能落到面内 DRO，总 $\Delta v$ 控制在 1200 m/s 以内（Peng et al. 2024）。

- **地月到 halo 的转移**：Zanzottera 等（2011）用太阳摄动下的月球飞越搭接面内地球出发弧与三维 halo 稳定流形，是经典的单脉冲 Earth-to-halo 转移。

- **近距月球飞越**：另一分类里的"近距月球飞越面外转移（close lunar flyby plane change transfer）"是同一机制的另一称呼，强调用极近的近月点把转向角做到最大。

## 相关概念

- [月球飞越与月球引力辅助（Lunar Flyby）](/glossary/dynamics/lunar-flyby/)

- [稳定流形 $W^s$（Stable Manifold）](/glossary/dynamics/invariant-manifold/)

- [远距离逆行轨道（DRO）](/glossary/programs/dro/)

- [双圆限制性四体问题（BCR4BP）](/glossary/dynamics/bcr4bp/)

- [月球引力作用球（SOI）](/glossary/dynamics/soi/)

## 参考文献

- Zanzottera 等, 2011, Low-energy Earth-to-halo transfers in the Earth-Moon scenario with Sun-perturbation, Acta Astronautica, §5.1

- Peng 等, 2024, Low-Energy Transfers to Lunar Distant Retrograde Orbits from Geostationary Transfer Orbits, J. Spacecraft and Rockets, doi:10.2514/1.A35623, §III.A
