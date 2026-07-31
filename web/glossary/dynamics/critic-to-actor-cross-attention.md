---
title: 评论家到演员交叉注意力（Critic-to-Actor Cross-Attention）
description: A2PPO中采用的定向注意力结构，演员token查询评论家token的键值对，将评论家的价值评估信息融入策略表征，同时保持评论家与演员探索噪声的解耦。
keywords: 评论家到演员交叉注意力, Critic-to-Actor Cross-Attention, 轨道动力学, 控制理论, 数值仿真
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 评论家到演员交叉注意力（Critic-to-Actor Cross-Attention）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 评论家到演员交叉注意力详解 | 术语定义
  description: A2PPO中采用的定向注意力结构，演员token查询评论家token的键值对，将评论家的价值评估信息融入策略表征，同时保持评论家与演员探索噪声的解耦。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 评论家到演员交叉注意力详解 | 术语定义
  description: A2PPO中采用的定向注意力结构，演员token查询评论家token的键值对，将评论家的价值评估信息融入策略表征，同时保持评论家与演员探索噪声的解耦。
  image: /logo.png
permalink: /glossary/dynamics/critic-to-actor-cross-attention/
---

# 评论家到演员交叉注意力（Critic-to-Actor Cross-Attention）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

A2PPO中采用的定向注意力结构，演员token查询评论家token的键值对，将评论家的价值评估信息融入策略表征，同时保持评论家与演员探索噪声的解耦。

## 应用价值

评论家到演员交叉注意力涉及地月空间航天器的运动特性分析和控制问题。在实际任务设计中，利用该方法可以分析轨道稳定性、计算控制策略，或评估摄动因素对轨道的影响，为任务安全性和可靠性提供保障。

## 相关概念

- [遭遇区域（Encounter Region）](/glossary/dynamics/encounter-region/)
- [相对论效应修正（Relativistic Correction）](/glossary/dynamics/relativistic-correction/)
- [直接飞越转移（Direct Fly-By Transfer, DFBT）](/glossary/dynamics/direct-fly-by-transfer-dfbt/)
- [安全转移编队（Safe Transfer Formation）](/glossary/dynamics/safe-transfer-formation/)

## 参考文献

- Ul Haq 等 - 2026 - Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning
