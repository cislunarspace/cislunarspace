---
title: 航天器编队飞行（Spacecraft Formation Flying）
description: 多颗航天器以预设的相对几何构型协同飞行的任务模式：固定或时变的距离与方位，为干涉测量、深空成像、通信中继等统一目标服务。区别于星座（覆盖驱动）和集群（无精确相对构型约束）。
keywords: 航天器编队飞行, spacecraft formation flying, 编队保持, 编队重构, 相对运动, 平动点编队, DRO编队, 惯性系固定编队, 自然编队, 极近距离编队, LQR编队控制
sharingurl: 
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 航天器编队飞行（Spacecraft Formation Flying）
  desc: 多颗航天器以预设相对几何构型协同飞行：平动点编队、DRO编队、地月动力学。
  image: /logo.png
og:
  title: 航天器编队飞行（Spacecraft Formation Flying）详解 | 术语定义
  description: 多颗航天器以预设的相对几何构型协同飞行的任务模式：按参考系构型分类（惯性系固定/旋转系固定/距离跟踪）、按尺度分类、自然编队与控制编队、平动点特殊性、地月空间应用。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 航天器编队飞行（Spacecraft Formation Flying）详解 | 术语定义
  description: 多颗航天器以预设的相对几何构型协同飞行的任务模式：按参考系构型分类、按尺度分类、自然编队与控制编队、平动点特殊性、地月空间应用。
  image: /logo.png
permalink: /glossary/dynamics/spacecraft-formation-flying/
---
# 航天器编队飞行（Spacecraft Formation Flying）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

航天器编队飞行（spacecraft formation flying）指多颗航天器以预设的相对几何构型（固定或时变的距离与方位）协同飞行，共同完成单一科学/工程目标（干涉测量、深空成像、通信中继等）的任务模式。

编队飞行不是星座（多轨道面卫星按相位分布完成对地覆盖，如GNSS），也不是集群/蜂群（空间邻近但不要求精确相对构型）。编队的本质特征是成员间相对运动须维持在有界范围内：主星（chief）与副星（deputy）的相对位置矢量须满足预设的时间历程约束。

编队飞行相比单体大航天器降低了单件制造难度和整任务风险：单个成员失效不必导致整任务终止\cite{catlinEarthmoonTriangularLibration2007}。通过多孔径同时采样，还能实现单个平台无法展开的大口径分布式成像。

## 按参考系构型分类

Marchand 和 Howell 按相对构型在哪个参考系中定义，将编队分为三类\cite{marchandControlStrategiesFormation2005}：

1. 惯性系固定编队（formation fixed relative to inertial frame）：主、副星的相对位置矢量在惯性系（如ECI）中恒定。由于会合系中该矢量旋转，这种构型在多体环境中需持续主动控制来维持，属于非自然编队。

2. 旋转系固定编队（formation fixed relative to rotating frame）：相对位置矢量在CR3BP会合系中保持恒定。在平动点附近，航天器通常不会自然维持这种几何，需要主动控制。

3. 距离跟踪（distance tracking）：仅约束成员间标量距离，不约束方位。是最宽松的编队类型，有时可借助自然动力学实现。

## 按尺度分类

- 极近距离编队（ultra-close formation）：间距百米以内。对相对感知精度和毫牛级推力要求极高。传统化学/电推进因羽流污染邻近航天器问题不适用。库仑力编队（通过给航天器充电产生库仑力）已被研究为候选技术。

- 近距编队：千米量级，是平动点干涉测量任务（TPF、Darwin、MAXIM等）的典型编队尺度。可利用光学或射频相对导航实现厘米至米级相对定位。

- 松散编队（loose formation）：千千米量级，成员间动力学差异足够大，不要求精确相对构型，依赖自然漂移在任务时间尺度内约束间距。

## 自然编队与控制编队

自然编队（natural formation）利用多体动力学的内在特性。Héritier 和 Howell 在 2014 年的证明表明：沿某参考轨迹在惯性系中存在区域（近似二次曲面），其中成员间距离和指向方向的变化最小\cite{heritierDynamicalEvolutionNatural2014}。这些区域的特性与参考轨道的Floquet特征结构耦合。

Barden 与 Howell 在 1998 年以及 Barden、Howell 与 Lo 在 1996 年的工作中，于日地 $L_1$/$L_2$ 平动点附近中心流形上发现了六航天器自然编队：成员间相对距离在做多个参考轨道周期后仍保持有界，不需主动控制，控制代价仅为参考轨道的轨道维持\cite{bardenFundamentalMotionsCollinear1998}。

自然伴飞编队（natural companion formation）是DRO附近的特例：副星在满足线性化相对运动周期性条件的初始状态下，沿DRO在主星前/后方以几米至几百千米间距做有界相对运动，不需主动控制即可长时间自然维持，见张如悦等 2025\cite{ZhangRuYueDiYueKongJianDROJinJuChiBianDuiXingJianCeLiangXiangDuiDingGui2025}。

控制编队（controlled/non-natural formation）需要主动推力来抵消参考轨道不稳定特征模态驱动的自然发散。Marchand 和 Howell 的综述给出的方法包括：

- LQR：沿参考轨道对时变线性化动力学 $\delta\dot{x}(t)=A(t)\delta x(t)$ 施加状态反馈。Riccati 矩阵微分方程须与参考轨道联合数值积分。

- 反馈线性化：输入或输出反馈线性化消去非线性引力项，在剩余线性系统上施加 LQR。平动点附近净引力弱，反馈线性化成本合理。

- 滑模控制（SMC）及模型预测控制也已用于 halo 轨道附近编队重构\cite{capannoloModelPredictiveControl2023}。

## 编队保持、驻留与重构

- 编队构型保持（configuration keeping）：部署完成后维持预设的相对几何。控制力较小但需持续作用。性能指标包括基线相对误差、各轴位置误差与燃耗。

- 轨道保持（stationkeeping）：更广义，涵盖维持绝对方位轨道及相对构型约束。DRO编队轨道保持需同时权衡误差敏感性传播、安全性约束及导航收敛时间，见敖海跃等 2024\cite{AoHaiYueYuanJuChiNiXingGuiDaoDeJinJuChiBianDuiGuiDaoBaoChiCeLue2024}。

- 重构（reconfiguration）：副星在编队内从一点移至另一点。安全转移编队（safe transfer formation）用解析设计的参考轨迹保证转移过程中副星与主星始终维持安全距离，相比最优控制结构更简单、工程实用性更强。

- 极近距离控制：百米以下尺度，羽流污染是关键约束。库仑力或微电推进为候选技术。

## 平动点编队的特殊性

平动点参考轨迹（halo、Lissajous、quasi-halo、NRHO）本身是不稳定或弱稳定的。编队成员的相对运动受同一不稳定 Floquet 模态主导，因此两体近圆框架下的 Hill-Clohessy-Wiltshire（HCW）方程不可直接套用\cite{clohessy1960terminal,valladoFundamentalsAstrodynamicsApplications2022}，必须使用 CR3BP 完整的时变线性化动力学，即变分方程 $\delta\dot{x}(t)=A(t)\delta x(t)$，相关讨论见 Marchand 和 Howell 2005 与 Scheeres 等 2003\cite{scheeresStabilizingMotionRelative2003}。

类地行星探测器（TPF）、Darwin 计划、MAXIM 计划等空间干涉任务催生了大量平动点编队研究。Gómez 等在 2001 与 2002 年为 TPF 模拟了 $L_2$ 附近的编队飞行\cite{gomezSimulationFormationFlight2001}。Gómez 等在 2005 年推导了适于控制编队的零相对径向加速度锥（zero-relative-radial-acceleration cones）\cite{gomezZeroRelativeRadial2005}。

三角平动点编队：Catlin 和 McLaughlin 推导了地月 $L_4$/$L_5$ 附近相对运动的解析解。本征频率含长周期与短周期两支。选取初始条件滤除一支可得到纯长周期或纯短周期的相对椭圆。解析近似总幅值误差在最大幅值的 3% 以内。摄动分析指出太阳点质量和太阳光压的影响显著，地球扁率在地月 $L_4$ 区域可忽略。

## 地月空间应用

- DRO近距离编队：张如悦等在 2025 年研究了2:1 DRO主-副星近距离编队基于星间测距测角数据的相对定轨问题。主星轨道精度高时三种方案均达 10 m 相对位置精度和亚毫米/秒级速度精度。主星轨道精度低时，测距+光学测角方案可将相对位置精度提升至 13 m、收敛时间至分钟级。

- 月球导航星座编队段：天都一号、二号通导技术试验卫星月轨编队飞行，验证星间建链。

- 平动点编队：日地 $L_2$ 干涉测量任务仍是多体编队飞行最成熟的概念形态。

## 相关概念

- [相对运动（Relative Motion）](/glossary/dynamics/relative-motion/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [平动点（Libration Point）](/glossary/dynamics/libration-point/)

- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

- [会合坐标系（Synodic Frame）](/glossary/fundamentals/synodic-frame/)

- [Halo轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)

- [远距逆行轨道（DRO）](/glossary/programs/dro/)

- [近直线晕轨道（NRHO）](/glossary/orbits/nrho/)
