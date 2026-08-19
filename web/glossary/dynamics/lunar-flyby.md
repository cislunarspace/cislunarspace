---
title: 月球飞越与月球引力辅助（Lunar Flyby and Lunar Gravity Assist）
description: 航天器在月球引力作用范围内作无推力双曲线通过的轨迹事件；在能量与动量上等价于用月球公转的动量改写航天器相对第三体的速度矢量。覆盖双曲线转向角与近月点半径公式、顺行/逆行与首尾侧的借力分类、B 平面瞄准、以及用于 DRO 转移的动力近月点（powered lunar flyby, PLF）变体。
keywords: 月球飞越, 月球引力辅助, 月球借力, lunar flyby, lunar gravity assist, LGA, swingby, powered lunar flyby, PLF, B 平面, 转向角, 双曲线超速度, v-infinity, DRO
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 月球飞越与月球引力辅助（Lunar Flyby and Lunar Gravity Assist）
  desc: 双曲线通过月球作用球，用转向角改写 v-infinity 矢量，并从月球公转里取走能量。
  image: /logo.png
og:
  title: 月球飞越与月球引力辅助详解 | 术语定义
  description: 航天器在月球引力作用范围内作无推力双曲线通过的轨迹事件；在能量与动量上等价于用月球公转的动量改写航天器相对第三体的速度矢量。覆盖双曲线转向角与近月点半径公式、顺行/逆行与首尾侧的借力分类、B 平面瞄准、以及用于 DRO 转移的动力近月点（powered lunar flyby, PLF）变体。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 月球飞越与月球引力辅助详解 | 术语定义
  description: 航天器在月球引力作用范围内作无推力双曲线通过的轨迹事件；在能量与动量上等价于用月球公转的动量改写航天器相对第三体的速度矢量。覆盖双曲线转向角与近月点半径公式、顺行/逆行与首尾侧的借力分类、B 平面瞄准、以及用于 DRO 转移的动力近月点（powered lunar flyby, PLF）变体。
  image: /logo.png
permalink: /glossary/dynamics/lunar-flyby/
---

# 月球飞越与月球引力辅助（Lunar Flyby and Lunar Gravity Assist）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

月球飞越（lunar flyby，又称月球旁转向、lunar swingby）指航天器进入月球引力作用球（SOI）后不被捕获、以双曲线轨道离开的事件。月球引力辅助（lunar gravity assist，LGA）则强调这一事件对航天器相对**第三体**（地心二体、日心系等）的轨道能量/动量的影响：航天器进入月心双曲线后出射，相对月球的双曲线超速度大小 $v_\infty$ 守恒，**唯一被月球引力改变的是 $\vec v_\infty$ 矢量的方向**。这一转向把月球的部分公转动量传递给航天器（或反之），等效于一次无须耗工质的 $\Delta\vec v$，差额由月球承担（因月球质量远大于航天器，月球轨道的扰动可忽略；Vallado 2022, §12.4）。

同一物理事件，强调几何时叫"飞越"，强调能量/动量交换时叫"引力辅助"。地月空间任务中"飞越"通常默认月球为辅助天体，而能量参考系取地心二体或日地系。

## 双曲线转向角与最近接近距离

在月心二体框架内，由能量守恒 $v_\infty = \sqrt{v_p^2 - 2\mu_M/r_p}$ 和双曲线偏心率 $e = 1 + r_p v_\infty^2 / \mu_M$（$\mu_M$ 为月心引力常数，$r_p$ 为近月点半径），可得出射渐进线相对入射渐进线的**转向角**

$$
\sin\frac{\delta}{2} = \frac{1}{e}, \qquad \delta = 2\arcsin\frac{1}{e}
$$

（Vallado 2022, Eq. 2-28、12-11）。同时由 $\cos\delta = \vec v_\infty(t_{\rm in})\cdot\vec v_\infty(t_{\rm out})/v_\infty^2$ 可读出方向变化。给定入射、出射 $\vec v_\infty$，最近接近距离为

$$
r_p = \frac{\mu_M}{v_\infty^2}\left(\frac{1}{\cos\big(\frac{\pi-\delta}{2}\big)} - 1\right)
$$

（Vallado 2022, Eq. 12-12）。设计时需核验 $r_p$ 大于月球半径与任一规避区（环、卫星）。地月系中常见的 $v_\infty\sim 0.2$–$1.5$ km/s，配以百公里量级近月高度，转向角可达数十度，远大于行星际飞越。

## 方向分类：两套独立轴

工程中常用两套近乎独立的轴来描述飞越方向，混淆它们是初学者常见错误：

- **顺行（prograde）与逆行（retrograde）飞越**：以**航天器绕月的运动方向**为准。在地月旋转系中，逆时针（与月球绕地公转同向）为顺行，顺时者为逆行。逆行飞越使 $\vec v_\infty$ 在月心速度方向上的投影变化更大，等效 $\Delta v$ 也更大——这是 DRO 转移里"逆行飞越"在同等近月点条件下需要的脉冲总量更低的根本原因（魏赞等 2026）。

- **首侧（leading-side）与尾侧（trailing-side）飞越**：以**飞越发生在月球公转运动的前方还是后方**为准，等价于 $\vec v_\infty(t_{\rm out})\cdot\vec v_M$ 相对入射是增是减。从月球后方（运动方向后方）掠过，航天器从月球公转里取走能量，相对地心的轨道能量下降；反之从前方掠过则注入能量。

顺行/逆行与首尾侧两轴正交组合，构成四种不同的飞越几何。在 DRO 入轨里，魏赞等（2026）还细分了"加速入轨"（近月点速度与入轨脉冲同向，DRO 内侧进入）与"减速入轨"（反向，DRO 外侧进入）。

## B 平面瞄准

飞越几何在工程上用 **B 平面**（B-plane）描述：过月球中心、垂直于入射渐进线的平面。瞄准点 $(B\cdot\hat T, B\cdot\hat R)$ 唯一确定出射方向 $\vec v_\infty(t_{\rm out})$，也就唯一确定了下游轨道。于是飞越设计转化为 B 平面瞄准与下游目标状态的 $v_\infty$ 匹配（参见 [v-infinity 匹配](/glossary/dynamics/v-infinity-matching/)）。

## 动力近月点（Powered Lunar Flyby, PLF）

在近月点施加小幅脉冲 $\Delta\vec v$，称为动力月球飞越（powered lunar flyby, PLF）或动力月球引力辅助。由于近月点速度最大，此处脉冲对出射 $v_\infty$ 的能量杠杆最大，常以 $10^2$ m/s 量级的脉冲等效换得下游数百 m/s 的 $\Delta v$ 节省。月心二体近似下，前后两段双曲线的转向角分别为

$$
\sin\delta^- = \frac{\mu_M/r_p}{(v_\infty^-)^2 + \mu_M/r_p}, \qquad \sin\delta^+ = \frac{\mu_M/r_p}{(v_\infty^+)^2 + \mu_M/r_p}
$$

其中 $\delta^-$ 把 $\vec v_\infty(t_{\rm in})$ 转到近月点速度 $\vec v_p$，$\delta^+$ 把脉冲后的 $\vec v_p' = \vec v_p + \Delta\vec v$ 转到 $\vec v_\infty(t_{\rm out})$，$|\vec v_\infty^\pm|^2 = |\vec v_p^{(\prime)}|^2 - 2\mu_M/r_p$（Peng et al. 2024, Eqs. 5–8）。要把出射轨道压回地月轨道面，需满足 $\tan\delta^+ = \hat v_p^z/\hat r_p^z$，由此定出 $|\Delta\vec v|$（Peng et al. 2024, Eqs. 11–14）。PLF 是两条工程路线的基石：

- **轨道面变换**：PLF 的面外分量可代替一次独立的面外变轨，把航天器从地月轨道面外"免费"转入面内，节省量级 $10^2$ m/s（详见 [月球飞越辅助轨道面变换](/glossary/dynamics/lunar-flyby-plane-change/)；Peng et al. 2024）。

- **逆行动力 LGA（DRO 交会）**：Murakami & Yamanaka（2015）提出的"retrograde-powered lunar gravity assist"。逆行飞越本就提供更大的转向角，再加近月点小幅脉冲，可显著降低 DRO 交会的总 $\Delta v$。Peng et al.（2024）在 GTO–DRO 任务里系统使用了双 PLF。

## 应用要点

- **低能 DRO 转移**：两次 PLF 串联一段 WSB 弧，可以把小卫星从 GTO 送入 DRO，总 $\Delta v$ 远低于直接转移，代价是飞行时间拉长到数周至数月（Peng et al. 2024）。参见 [远距离逆行轨道（DRO）](/glossary/programs/dro/) 与 [弱稳定边界（WSB）](/glossary/dynamics/wsb/)。

- **NRHO 任务恢复**：Matsumoto 等（2023）用单次月球飞越代替失败的 NRHO 入轨机动，恢复地月空间任务。

- **轨道面变换**：用飞越的面外分量替面外变轨，halo 流形入轨可省 $10^2$ m/s（Zanzottera et al. 2011）。

- **瞄准精度**：飞越过程短暂、速度高，B 平面瞄准误差会被放大成下游巨大的位置误差，飞越窗口内的天线/敏感器指向都必须事先规划。

## 相关概念

- [月球引力作用球（SOI）](/glossary/dynamics/soi/)

- [v-infinity 匹配（v-infinity Matching）](/glossary/dynamics/v-infinity-matching/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [双圆限制性四体问题（BCR4BP）](/glossary/dynamics/bcr4bp/)

- [弱稳定边界（WSB）](/glossary/dynamics/wsb/)

- [远距离逆行轨道（DRO）](/glossary/programs/dro/)

- [会合坐标系（Synodic Frame）](/glossary/fundamentals/synodic-frame/)

## 参考文献

- Vallado, 2022, Fundamentals of Astrodynamics and Applications, 4th ed., Chap. 12（patched conic、引力辅助、转向角、B 平面）

- Peng 等, 2024, Low-Energy Transfers to Lunar Distant Retrograde Orbits from Geostationary Transfer Orbits, J. Spacecraft and Rockets, doi:10.2514/1.A35623（动力月球飞越模型、GTO–DRO 双 PLF + WSB）

- 魏赞 等, 2026, 地月远距离逆行轨道族月球借力转移入轨研究, 北京航空航天大学学报（顺行/逆行 LGA 用于 DRO 入轨；加速/减速入轨）

- Wang M., Zhang C., Zhang H., 2025, Mechanism analysis of the DRO low-energy transfer problem: an energy perspective

- Murakami & Yamanaka, 2015, Trajectory Design of DRO Rendezvous Using Retrograde Powered Lunar Gravity Assist, IEEE Aerospace Conference

- Matsumoto 等, 2023, Recovery orbit search scheme for major maneuver failure in NRHO transfer orbit using lunar flyby

- Zanzottera 等, 2011, Low-energy Earth-to-halo transfers in the Earth–Moon scenario with Sun-perturbation（飞越辅助轨道面变换）
