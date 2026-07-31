---
title: Variable-Step
description: ODE求解器根据局部误差估计动态调整积分步长的策略，在轨迹变化平缓区用大步长、在高非线性区用小步长，以提高效率并保证精度。
keywords: 变步长, Variable-Step, 轨道动力学, 三体问题, 平动点
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Variable-Step
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Variable-Step Explained | Term Definition
  description: ODE求解器根据局部误差估计动态调整积分步长的策略，在轨迹变化平缓区用大步长、在高非线性区用小步长，以提高效率并保证精度。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Variable-Step Explained | Term Definition
  description: ODE求解器根据局部误差估计动态调整积分步长的策略，在轨迹变化平缓区用大步长、在高非线性区用小步长，以提高效率并保证精度。
  image: /logo.png
permalink: /en/glossary/dynamics/variable-step/
---

# Variable-Step

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A strategy in ODE solvers that dynamically adjusts the integration step size based on local error estimates, using larger steps in smooth regions and smaller steps in highly nonlinear regions to improve efficiency while ensuring accuracy.

## Application Value

在变步长的分析中，可用于轨道传播和机动设计，帮助工程师评估航天器在不同动力学环境下的运动特性 该概念为地月空间任务设计提供了理论基础，尤其在平动点轨道设计和低能转移分析中具有重要应用价值 利用变步长进行轨迹优化，可以有效降低任务燃料消耗，提高任务经济效益 在任务设计中，变步长的分析有助于理解航天器在复杂引力场中的行为，指导轨道保持策略的制定

## Related Concepts

- [微分代数](/en/glossary/dynamics/微分代数/)
- [羽流冲击](/en/glossary/dynamics/羽流冲击/)
- [动量积分](/en/glossary/dynamics/动量积分/)

## References

- Kayama 等 - 2022
