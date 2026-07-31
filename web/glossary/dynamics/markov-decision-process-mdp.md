---
title: 马尔可夫决策过程（Markov Decision Process, MDP）
description: 离散时间随机过程，当前状态的条件概率仅取决于前一个状态。MDP 由状态空间 S、动作空间 A、状态转移概率函数 T、奖励函数 R 和折扣因子 γ 构成，目标是寻找使累积未来奖励最大化的策略函数。MDP 是完全可观测的，但其大状态、大动作空间使求解最优策略迅速变得 intractable，需要结合随机采样和启发式方法逼近
keywords: 马尔可夫决策过程, Markov Decision Process, MDP, MDP, 轨道力学, 三体问题, 非线性动力学, 轨道稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 马尔可夫决策过程（Markov Decision Process, MDP）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 马尔可夫决策过程详解 | 术语定义
  description: 离散时间随机过程，当前状态的条件概率仅取决于前一个状态。MDP 由状态空间 S、动作空间 A、状态转移概率函数 T、奖励函数 R 和折扣因子 γ 构成，目标是寻找使累积未来奖励最大化的策略函数。MDP 是完全可观测的，但其大状态、大动作空间使求解最优策略迅速变得 intractable，需要结合随机采样和启发式方法逼近
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 马尔可夫决策过程详解 | 术语定义
  description: 离散时间随机过程，当前状态的条件概率仅取决于前一个状态。MDP 由状态空间 S、动作空间 A、状态转移概率函数 T、奖励函数 R 和折扣因子 γ 构成，目标是寻找使累积未来奖励最大化的策略函数。MDP 是完全可观测的，但其大状态、大动作空间使求解最优策略迅速变得 intractable，需要结合随机采样和启发式方法逼近
  image: /logo.png
permalink: /glossary/dynamics/markov-decision-process-mdp/
---

# 马尔可夫决策过程（Markov Decision Process, MDP）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

离散时间随机过程，当前状态的条件概率仅取决于前一个状态。MDP 由状态空间 S、动作空间 A、状态转移概率函数 T、奖励函数 R 和折扣因子 γ 构成，目标是寻找使累积未来奖励最大化的策略函数。MDP 是完全可观测的，但其大状态、大动作空间使求解最优策略迅速变得 intractable，需要结合随机采样和启发式方法逼近近似解。

## 应用价值

马尔可夫决策过程是序贯决策的数学模型，用于求解不确定环境下的最优决策策略。在地月空间任务规划中，MDP框架可用于处理观测不完整性和环境不确定性，是实现自主决策的理论基础。

## 相关概念

- [雅可比常数（Jacobi Constant, JC）](/glossary/dynamics/jacobi-constant-jc/)
- [希尔区域（Hill Region）](/glossary/fundamentals/hill-region/)
- [庞加莱映射（Poincaré Map）](/glossary/dynamics/poincar-map/)
- [稳定性（Stability）](/glossary/dynamics/stability/)
## 参考文献

- Klonowski et al., 2023
