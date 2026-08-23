---
title: DRO经Lyapunov轨道过渡调相（DRO-Lyapunov-DRO Transition Phasing, DLD）
description: 利用相切Lyapunov轨道在三体动力学中的周期差异实现DRO卫星低能相位机动的策略。
keywords: DLD, 调相策略, DRO, Lyapunov轨道, 轨道机动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: DRO间接调相策略
  desc: 结合Lyapunov过渡轨道的DRO低消耗相位调整方法。
  image: /logo.png
permalink: /glossary/dynamics/dld/
---

# DRO经Lyapunov轨道过渡调相（DRO-Lyapunov-DRO Transition Phasing, DLD）

## 定义

航天器在远距离逆行轨道（DRO）上施加切向小推力脉冲进入相切的Lyapunov平动点周期轨道，利用两类轨道运行周期的天然差异积累相位角差，并在数圈后再次施加切向脉冲返回目标DRO轨位的间接调相方法。

## 物理机制与工程价值

在单一DRO轨道上直接进行同轨加减速调相时，需要改变轨道半长轴并消耗较多速度增量。由于DRO与周围Lyapunov轨道在相空间中存在天然几何相切点，DLD方法借助不同能量层面的轨道周期差积累漂移时间，总速度增量仅为两次相切机动脉冲之和，显著降低了多星编队重构或交会对接任务的推进剂消耗。

## 相关概念

- [远距离逆行轨道](/glossary/orbits/dro/)
- [Lyapunov轨道](/glossary/orbits/lyapunov-orbit/)
- [轨道机动](/glossary/dynamics/orbital-maneuver/)

## 参考文献

- 宇航学报, 2023, 地月远距离逆行轨道脉冲调相与编队重构方法。
