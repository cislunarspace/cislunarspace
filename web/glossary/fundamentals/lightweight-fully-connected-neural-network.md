---
title: 轻量化全连接神经网络（Lightweight Fully-Connected Neural Network）
description: 面向星载有限计算资源设计的精简全连接网络架构。论文采用 17-40-25-10-3 的四层隐藏层结构，总参数量仅约 1,368 个，以 Sigmoid 为激活函数、贝叶斯正则化反向传播为训练算法。在保证脉冲比例系数预测精度（相对误差低于 3%）的前提下，将参数量控制在可星上部署的规模。
keywords: 轻量化全连接神经网络, Lightweight Fully-Connected Neural Network, , 基础理论, 轨道力学, 摄动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 轻量化全连接神经网络（Lightweight Fully-Connected Neural Network）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 轻量化全连接神经网络详解 | 术语定义
  description: 面向星载有限计算资源设计的精简全连接网络架构。论文采用 17-40-25-10-3 的四层隐藏层结构，总参数量仅约 1,368 个，以 Sigmoid 为激活函数、贝叶斯正则化反向传播为训练算法。在保证脉冲比例系数预测精度（相对误差低于 3%）的前提下，将参数量控制在可星上部署的规模。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 轻量化全连接神经网络详解 | 术语定义
  description: 面向星载有限计算资源设计的精简全连接网络架构。论文采用 17-40-25-10-3 的四层隐藏层结构，总参数量仅约 1,368 个，以 Sigmoid 为激活函数、贝叶斯正则化反向传播为训练算法。在保证脉冲比例系数预测精度（相对误差低于 3%）的前提下，将参数量控制在可星上部署的规模。
  image: /logo.png
permalink: /glossary/fundamentals/lightweight-fully-connected-neural-network/
---

# 轻量化全连接神经网络（Lightweight Fully-Connected Neural Network）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：[地月空间入门指南](https://cislunarspace.cn)

## 定义

面向星载有限计算资源设计的精简全连接网络架构。论文采用 17-40-25-10-3 的四层隐藏层结构，总参数量仅约 1,368 个，以 Sigmoid 为激活函数、贝叶斯正则化反向传播为训练算法。在保证脉冲比例系数预测精度（相对误差低于 3%）的前提下，将参数量控制在可星上部署的规模。

## 应用价值

轻量化全连接神经网络总参数量约1368个，可在星载有限计算资源上部署，用于快速估计地月转移中途修正脉冲，辅助地面飞控人员快速决策。

## 相关概念

- [微分修正法（Differential Correction Method）](/glossary/fundamentals/differential-correction-method/)
- [拉瓦尔喷管（Laval Nozzle）](/glossary/fundamentals/laval-nozzle/)
- [拉格朗日点（Lagrange Point）](/glossary/fundamentals/lagrange-point/)
- [轨道根数（Orbital Elements）](/glossary/fundamentals/orbital-elements/)

## 参考文献

- 常笑宽 等 - 2026 - 基于神经网络的地月转移中途修正脉冲快速估计方法
