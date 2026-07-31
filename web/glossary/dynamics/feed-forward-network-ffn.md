---
title: 前馈网络（Feed-Forward Network, FFN）
description: Transformer架构中的全连接网络，对每个token独立进行非线性变换。A2PPO的融合模块在注意力计算后使用token-wise前馈网络（维度 d 到 4d 再回到 d）进行进一步变换。
keywords: 前馈网络, Feed-Forward Network, FFN, FFN, 轨道动力学, 姿态控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 前馈网络（Feed-Forward Network, FFN）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 前馈网络详解 | 术语定义
  description: Transformer架构中的全连接网络，对每个token独立进行非线性变换。A2PPO的融合模块在注意力计算后使用token-wise前馈网络（维度 d 到 4d 再回到 d）进行进一步变换。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 前馈网络详解 | 术语定义
  description: Transformer架构中的全连接网络，对每个token独立进行非线性变换。A2PPO的融合模块在注意力计算后使用token-wise前馈网络（维度 d 到 4d 再回到 d）进行进一步变换。
  image: /logo.png
permalink: /glossary/dynamics/feed-forward-network-ffn/
---

# 前馈网络（Feed-Forward Network, FFN）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：Ul Haq 等 - 2026 - Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Transformer架构中的全连接网络，对每个token独立进行非线性变换。A2PPO的融合模块在注意力计算后使用token-wise前馈网络（维度 d 到 4d 再回到 d）进行进一步变换。

## 应用价值

该术语在地月空间任务中具有重要应用价值。在轨道设计阶段，工程师利用相关理论进行轨迹优化；在导航与轨道确定中，用于提升测量精度；在姿态控制与轨道保持任务中，确保航天器稳定运行。具体应用中，可结合任务需求进行参数优化和算法适配，提高任务成功率和资源利用效率。

## 相关概念

- [特征指数（Characteristic Exponents）](/glossary/dynamics/characteristic-exponents/)
- [捕获对接段（Capture Docking Phase）](/glossary/navigation/capture-docking-phase/)
- [月球借力转移（Lunar Flyby Transfer）](/glossary/orbits/lunar-flyby-transfer/)

## 参考文献

- Ul Haq 等 - 2026 - Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning
