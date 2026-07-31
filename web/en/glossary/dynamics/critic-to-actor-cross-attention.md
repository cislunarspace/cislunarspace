---
title: Critic-to-Actor Cross-Attention
description: "The directional attention structure employed in A2PPO, where actor tokens query the critic's token key-value pairs to integrate valuation context into the polic"
keywords: Critic-to-Actor Cross-Attention, dynamics terminology, cislunar space
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Critic-to-Actor Cross-Attention
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Critic-to-Actor Cross-Attention Explained | Term Definition
  description: A2PPO中采用的定向注意力结构，演员token查询评论家token的键值对，将评论家的价值评估信息融入策略表征，同时保持评论家与演员探索噪声的解耦。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Critic-to-Actor Cross-Attention Explained | Term Definition
  description: A2PPO中采用的定向注意力结构，演员token查询评论家token的键值对，将评论家的价值评估信息融入策略表征，同时保持评论家与演员探索噪声的解耦。
  image: /logo.png
permalink: /en/glossary/dynamics/critic-to-actor-cross-attention/
---

# Critic-to-Actor Cross-Attention

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The directional attention structure employed in A2PPO, where actor tokens query the critic's token key-value pairs to integrate valuation context into the policy representation, while keeping the critic decoupled from the actor's exploratory noise.

## References

- Ul Haq 等 - 2026 - Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning
