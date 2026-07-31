---
title: 二维卷积神经网络（2D Convolutional Neural Network）
description: 卷积神经网络的一种架构变体，将输入数据视为二维矩阵（行对应时间步、列对应状态分量），通过二维卷积核在时间-状态空间上滑动提取局部特征。相比一维CNN，2DCNN能同时捕捉时间维度和状态分量维度上的局部模式；相比LSTM等循环网络，2DCNN在短序列瞬态异常检测上计算效率更高，且不易过拟合。本文用2DCNN对地月空间目标
keywords: 二维卷积神经网络, 2D Convolutional Neural Network, 2DCNN, observation
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 二维卷积神经网络（2D Convolutional Neural Network）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 二维卷积神经网络详解 | 术语定义
  description: 卷积神经网络的一种架构变体，将输入数据视为二维矩阵（行对应时间步、列对应状态分量），通过二维卷积核在时间-状态空间上滑动提取局部特征。相比一维CNN，2DCNN能同时捕捉时间维度和状态分量维度上的局部模式；相比LSTM等循环网络，2DCNN在短序列瞬态异常检测上计算效率更高，且不易过拟合。本文用2DCNN对地月空间目标
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 二维卷积神经网络详解 | 术语定义
  description: 卷积神经网络的一种架构变体，将输入数据视为二维矩阵（行对应时间步、列对应状态分量），通过二维卷积核在时间-状态空间上滑动提取局部特征。相比一维CNN，2DCNN能同时捕捉时间维度和状态分量维度上的局部模式；相比LSTM等循环网络，2DCNN在短序列瞬态异常检测上计算效率更高，且不易过拟合。本文用2DCNN对地月空间目标
  image: /logo.png
permalink: /glossary/observation/2dcnn/
---

# 二维卷积神经网络（2D Convolutional Neural Network）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

卷积神经网络的一种架构变体，将输入数据视为二维矩阵（行对应时间步、列对应状态分量），通过二维卷积核在时间-状态空间上滑动提取局部特征。相比一维CNN，2DCNN能同时捕捉时间维度和状态分量维度上的局部模式；相比LSTM等循环网络，2DCNN在短序列瞬态异常检测上计算效率更高，且不易过拟合。本文用2DCNN对地月空间目标观测序列进行分类，判断时间窗口内是否发生脉冲机动，输入形状为20×6×1（20个时间步、6个状态分量、单通道），经三层卷积-池化和两层全连接后输出二分类概率。

## 应用价值

二维卷积神经网络用于地月空间目标分类和异常检测，可实现短序列数据的快速处理。

## 相关概念

- [空间监视网络（Space Surveillance Network）](/glossary/observation/ssn/)
- [天基空间监视系统（Space-Based Space Surveillance）](/glossary/observation/sbss/)
- [欧盟空间监视与跟踪系统（EU Space Surveillance and Tracking）](/glossary/observation/eu sst/)

## 参考文献

- Zhang和Dang - 2025 - Impulsive maneuver detection of cislunar space objects based on convolutional neural network。
