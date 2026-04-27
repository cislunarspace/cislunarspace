---
title: 非合作目标（Noncooperative Target）
description: 非合作目标是指不与操作航天器共享意图或轨迹信息的空间物体，包括废弃卫星、空间碎片和身份不明的航天器，对空间安全构成严重威胁。
keywords: 非合作目标, 空间碎片, 空间安全, 航天器意图识别, 空间态势感知
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: 非合作目标（Noncooperative Target）| 空间安全
  description: 不与操作航天器共享意图或轨迹信息的空间物体，是空间安全研究的核心对象
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 非合作目标（Noncooperative Target）| 空间安全
  description: 不与操作航天器共享意图或轨迹信息的空间物体，是空间安全研究的核心对象
  image: /logo.png
permalink: /glossary/noncooperative-target/
---

# 非合作目标（Noncooperative Target）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

非合作目标（Noncooperative Target）是指在空间操作中，不主动与操作航天器（Operational Spacecraft）进行通信、协作或共享自身意图和轨迹信息的空间物体。与合作目标（如补给飞船、编队卫星）不同，非合作目标不会主动配合交会对接、避碰机动或其他协同操作。

非合作目标的典型类型包括：

- **废弃卫星**：已退役或失控的人造卫星，不再响应地面指令
- **空间碎片**：火箭残骸、碰撞产物、解体碎片等无功能物体
- **故障失控卫星**：仍在轨道上但失去姿态或轨道控制能力的卫星
- **非协同正常运行卫星**：正常运行但不与特定操作方共享信息的他国或商业卫星
- **身份不明物体**：轨道上编目但无法确定身份或功能的物体

## 与合作目标的对比

| 特征 | 合作目标 | 非合作目标 |
|------|----------|------------|
| 通信能力 | 有，主动共享状态数据 | 无或不配合 |
| 意图可知性 | 已知或可协商 | 未知，需通过观测推断 |
| 轨迹信息 | 精确（GNSS数据共享） | 需要地面/天基观测 |
| 交会对接 | 标准化对接机构配合 | 需要非合作捕获技术 |
| 典型实例 | 天舟货运飞船、Dragon | 空间碎片、失效卫星 |

## 对空间安全的威胁

随着在轨物体数量的急剧增长，非合作目标已成为空间安全的核心挑战：

- **碰撞风险**：大型碎片（>10 cm）与活跃航天器的碰撞可能产生灾难性后果，并引发凯斯勒综合征（Kessler Syndrome）
- **意图不确定性**：无法确定非协同运行卫星的真实意图（如监视、干扰、攻击），增加了空间态势感知的复杂性
- **规避成本**：频繁的碰撞规避机动消耗宝贵的推进剂，缩短航天器寿命
- **空间站安全**：在空间站运行场景中，接近的非合作目标需要进行威胁评估和意图识别，以保障在轨人员安全

## 意图识别方法

针对非合作目标的意图识别是当前空间安全研究的前沿方向。主要方法包括：

- **基于轨道动力学**：通过分析相对运动轨迹（如CW方程预测的典型模式）推断运动意图（逼近、飞越、交会等）
- **基于模糊推理**：利用模糊决策树对特征数据进行分类
- **基于深度学习**：训练神经网络从轨道数据中识别意图模式
- **基于大语言模型（LLM）**：将多源信息（轨道数据、图像、环境条件）转化为文本输入，利用LLM的逻辑推理能力进行综合意图判断

Jing等（2025年）提出了基于LLM的非合作目标意图识别框架，将意图分为运动意图、操作意图和任务意图三大类共23种子类型，并利用ChatGLM模型实现了99.9%的识别准确率。

## 相关概念

- [航天器意图识别](/glossary/spacecraft-intention-recognition/)
- [CW方程（Clohessy-Wiltshire）](/glossary/clohessy-wiltshire/)
- [太空交通管控（STM）](/glossary/space-traffic-management/)

## 参考文献

- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
- Sun Q, Dang Z. Deep neural network for non-cooperative space target intention recognition. Aerosp Sci Technol. 2023;142:108681.
- Qi P, et al. A method and system for intent analysis of non cooperative target spacecraft. Patent 202310735989.X, 2023.
