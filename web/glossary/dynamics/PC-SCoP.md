---
title: 相位约束序列锥规划（Phase-Constrained Sequential Cone Program, PC-SCoP）
description: 针对平动点轨道保持提出的优化算法。将x轴穿越控制框架表述为非线性规划问题，目标函数为速度增量的二范数，约束分别对准状态分量偏差和相位偏差，避免了微分修正法中需要手动调节的缩放权重。非线性规划通过序列线性化转化为二阶锥规划逐次求解，每次迭代更新状态估计并重新线性化动力学。
keywords: 相位约束序列锥规划, Phase-Constrained Sequential Cone Program, PC-SCoP, PC-SCoP, 轨道动力学, 控制理论, 非线性控制, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 相位约束序列锥规划（Phase-Constrained Sequential Cone Program, PC-SCoP）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 相位约束序列锥规划详解 | 术语定义
  description: 针对平动点轨道保持提出的优化算法。将x轴穿越控制框架表述为非线性规划问题，目标函数为速度增量的二范数，约束分别对准状态分量偏差和相位偏差，避免了微分修正法中需要手动调节的缩放权重。非线性规划通过序列线性化转化为二阶锥规划逐次求解，每次迭代更新状态估计并重新线性化动力学。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 相位约束序列锥规划详解 | 术语定义
  description: 针对平动点轨道保持提出的优化算法。将x轴穿越控制框架表述为非线性规划问题，目标函数为速度增量的二范数，约束分别对准状态分量偏差和相位偏差，避免了微分修正法中需要手动调节的缩放权重。非线性规划通过序列线性化转化为二阶锥规划逐次求解，每次迭代更新状态估计并重新线性化动力学。
  image: /logo.png
permalink: /glossary/dynamics/PC-SCoP/
---

# 相位约束序列锥规划（Phase-Constrained Sequential Cone Program, PC-SCoP）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

针对平动点轨道保持提出的优化算法。将x轴穿越控制框架表述为非线性规划问题，目标函数为速度增量的二范数，约束分别对准状态分量偏差和相位偏差，避免了微分修正法中需要手动调节的缩放权重。非线性规划通过序列线性化转化为二阶锥规划逐次求解，每次迭代更新状态估计并重新线性化动力学。

## 应用价值

将平动点轨道保持问题表述为二阶锥规划，显式处理状态和相位约束，避免缩放权重的人工调节，适合工程应用。

## 相关概念

- [规定性能控制（Prescribed Performance Control, PPC）](/glossary/dynamics/PPC/)
- [规定性能函数（Prescribed Performance Function, PPF）](/glossary/dynamics/PPF/)
- [动力下降制导（Powered Descent Guidance）](/glossary/dynamics/PDG/)
- [平面双圆限制性四体问题（Planar Bicircular Restricted Four-Body Problem）](/glossary/dynamics/PBR4BP/)

## 参考文献

- Shimane et al. 2025。
