---
title: 编队飞行（Formation Flight）
description: 多颗航天器保持特定相对构型协同飞行的任务模式；三体环境下以线性化相对运动方程与 Floquet 分解分析有界性，典型构型有三角平动点的并行/圆编队与 DRO 上的伴飞/绕飞编队。
keywords: 编队飞行, Formation Flight, 绕飞编队, 三角平动点, DRO, 相对运动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: 编队飞行（Formation Flight）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 编队飞行详解 | 术语定义
  description: 多颗航天器保持特定相对构型协同飞行的任务模式；三体环境下以线性化相对运动方程与 Floquet 分解分析有界性，典型构型有三角平动点的并行/圆编队与 DRO 上的伴飞/绕飞编队。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 编队飞行详解 | 术语定义
  description: 多颗航天器保持特定相对构型协同飞行的任务模式；三体环境下以线性化相对运动方程与 Floquet 分解分析有界性，典型构型有三角平动点的并行/圆编队与 DRO 上的伴飞/绕飞编队。
  image: /logo.png
permalink: /glossary/orbits/formation-flight/
---

# 编队飞行（Formation Flight）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

编队飞行是多颗航天器保持特定相对构型协同飞行的任务模式。三体环境下，相对运动用线性化相对运动方程加 Floquet 分解分析：有界解集本身就包含周期解与准周期解，只有发散解需要剔除，有界性是防止成员间漂移与碰撞的本质要求（Yang, Wang & Zhang 2023）。相比二体轨道，三体动力学的强非线性使编队构型的维持更依赖动力学结构的选择。

## 三角平动点编队

Catlin & McLaughlin 2007 在 CR3BP 下推导地月 L4 附近的相对运动，把相对运动分解为长周期与短周期分量分别设计（双周期并存时相对运动是轴比约 16/5、周期 458 天的复杂曲线，不适合编队）：

- **并行（parallel）编队**：成员在面内方向保持固定相位偏移、面外分量时刻相同。对入轨初值误差最宽容（维持约束下初值精度 1000%、即 26 km 与 1 m/s 即可），是文中最鲁棒的自然编队。
- **领从（leader–follower）编队**：成员沿同一轨迹一前一后。
- **圆编队**：长周期运动的椭圆轴比约 16/3（周期约 92 天），天然圆编队不可能；短周期运动（轴比约 2、周期约一个月）可用平面近似得到倾角约 60° 的近似圆，但需主动控制维持（每圈末脉冲重置或持续修正）。

背景与价值：三角平动点尚无航天器实际到达（2007 年时点），到达成本显著高于共线点；价值在深空观测与辐射监测的无遮挡视线，及未来空间站选址。摄动排序：太阳点质量引力最显著，太阳光压次之，地球 J2 可忽略（Catlin 2007）。

## DRO 上的相对运动模式

对参考 DRO（13.64 天、2:1 共振）线性化相对运动的有界解组合为三种模式（Yang, Wang & Zhang 2023）：

- **平面周期模式（又称 natural periodic mode）**：副星位于参考 DRO 上作相位偏移的运动；轨迹只位于主星单侧，适合作交会对接的停泊轨道。
- **平面准周期模式**：由两个周期分量合成，轨迹绕主星旋转、界于有界空心区域内部，是绕飞编队的基础模式。注意长期纯自然绕飞的几何不规则，工程绕飞为「一个 DRO 周期内的自然段 + 转移段」拼接，每圈仅两次脉冲，1 km 尺度编队每圈燃耗小于 1 cm/s。
- **法向准周期模式**：仅含法向（z）分量，用于把平面编队扩展为三维；该模式只能叠加在平面编队上，不能单独成编队。

## DRO 编队设计

杨驰航等 2023（航空学报中文版，与上条英文版为同团队姊妹篇）给出两类设计：

- **自然伴飞编队**：以有界解中的周期解为基础，副星在主星前方或后方几米至几百千米长期低燃耗伴飞；但自然构型非常有限、相对运动慢。
- **圆形受控绕飞编队**：以空间圆为参考轨迹，在均布变轨点上施加脉冲控制副星绕飞（算例每圈 10 个变轨点，尺度 1~100 km）；燃耗与圆的法向、圆心位置、尺度相关；它是脉冲控制而非持续推力。

## 相位差与交会

同一晕轨道上两个航天器之间沿轨道的角度间距称相位差。同轨交会中，转移时间相同时初始相位差越大、所需速度增量越大（孙俞 2017 算例：L2 北向晕轨道上 1° 相位差 3.46 天转移仅 3.40 m/s，5° 时 7.35 天达 49.85 m/s）；不同振幅晕轨道间的交会是幅值差越大 ΔV 越大。故安全性允许时相位差应尽可能小。

## 术语变体对照

| 术语 | 含义 | 出处 |
|------|------|------|
| 并行编队（parallel） | 面内相位偏移、面外相同的构型（最鲁棒） | Catlin 2007 |
| 圆编队（circular） | 短周期平面近似 + 主动控制维持的圆形构型 | Catlin 2007 |
| 三角平动点编队 | L4/L5 附近的编队设计 | Catlin 2007 |
| 平面周期模式 | 副星在参考 DRO 上相位偏移（=natural periodic mode） | Yang 2023 |
| 平面准周期模式 | 绕主星旋转的有界空心区域模式（绕飞基础） | Yang 2023 |
| 法向准周期模式 | 仅法向分量，叠加扩展三维编队 | Yang 2023 |
| 受控绕飞编队 | 空间圆参考轨迹 + 变轨点脉冲 | 杨驰航 2023 |
| 相位差 | 同一轨道上两航天器的角度间距 | 孙俞 2017 |

## 相关概念

- [远距离逆行轨道（Distant Retrograde Orbit, DRO）](/glossary/orbits/distant-retrograde-orbit-dro/)
- [星座（Multi-Body Constellation）](/glossary/orbits/multi-body-constellation/)
- [晕轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [准周期轨道（Quasi-Periodic Orbit, QPO）](/glossary/orbits/qpo/)

## 参考文献

- Catlin & McLaughlin, 2007, Earth–Moon triangular libration point spacecraft formations
- 孙俞、张进、罗亚中, 2017, 基于三体 Lambert 算法的平动点交会轨道设计
- Yang, Wang & Zhang, 2023, Close relative motion on distant retrograde orbits
- 杨驰航、符弘岚、张皓, 2023, 远距离逆行轨道上的近距离自然及受控编队（航空学报 44(5):326563）
