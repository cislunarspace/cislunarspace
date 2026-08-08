---
title: Lambert制导例程（Lambert Guidance Routine）
description: 将Lambert问题的求解嵌入主动段制导的实时算法：在每个积分步求解当前状态到目标点的Lambert问题，得到所需速度，再与当前速度之差作为推力方向指令。当剩余速度增量低于阈值时停止推力，转入弹道飞行。适用于需要精确控制到达时间和到达位置的任务。
keywords: Lambert制导例程, Lambert Guidance Routine, 轨道动力学, 姿态控制, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Lambert制导例程（Lambert Guidance Routine）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Lambert制导例程详解 | 术语定义
  description: 将Lambert问题的求解嵌入主动段制导的实时算法：在每个积分步求解当前状态到目标点的Lambert问题，得到所需速度，再与当前速度之差作为推力方向指令。当剩余速度增量低于阈值时停止推力，转入弹道飞行。适用于需要精确控制到达时间和到达位置的任务。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lambert制导例程详解 | 术语定义
  description: 将Lambert问题的求解嵌入主动段制导的实时算法：在每个积分步求解当前状态到目标点的Lambert问题，得到所需速度，再与当前速度之差作为推力方向指令。当剩余速度增量低于阈值时停止推力，转入弹道飞行。适用于需要精确控制到达时间和到达位置的任务。
  image: /logo.png
permalink: /glossary/dynamics/lambert-guidance-routine/
---

# Lambert制导例程（Lambert Guidance Routine）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：Burns和Scherock - 2004
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将Lambert问题的求解嵌入主动段制导的实时算法：在每个积分步求解当前状态到目标点的Lambert问题，得到所需速度，再与当前速度之差作为推力方向指令。当剩余速度增量低于阈值时停止推力，转入弹道飞行。适用于需要精确控制到达时间和到达位置的任务。

## 应用价值

该术语在地月空间任务中具有重要应用价值。在轨道设计阶段，工程师利用相关理论进行轨迹优化；在导航与轨道确定中，用于提升测量精度；在姿态控制与轨道保持任务中，确保航天器稳定运行。具体应用中，可结合任务需求进行参数优化和算法适配，提高任务成功率和资源利用效率。

## 相关概念

- 特征指数（Characteristic Exponents）
- 捕获对接段（Capture Docking Phase）
- 月球借力转移（Lunar Flyby Transfer）

## 参考文献

- Burns和Scherock - 2004
