---
title: 牛顿二分切换点检测法（Newton-Bisection Hybrid Switching Detection）
description: 用于精确检测bang-bang最优控制中推力开关时刻的混合算法。先用牛顿法快速定位（通常4至5次迭代达到机器精度），若牛顿法失败或收敛到区间外，则退回到较慢但可靠的二分法。该方法结合了牛顿法的高效率和二分法的鲁棒性。
keywords: 牛顿二分切换点检测法, Newton-Bisection Hybrid Switching Detection, , 动力学, 非线性, 稳定性, 流形, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 牛顿二分切换点检测法（Newton-Bisection Hybrid Switching Detection）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 牛顿二分切换点检测法（Newton-Bisection Hybrid Switching Detection）详解 | 术语定义
  description: 用于精确检测bang-bang最优控制中推力开关时刻的混合算法。先用牛顿法快速定位（通常4至5次迭代达到机器精度），若牛顿法失败或收敛到区间外，则退回到较慢但可靠的二分法。该方法结合了牛顿法的高效率和二分法的鲁棒性。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 牛顿二分切换点检测法（Newton-Bisection Hybrid Switching Detection）详解 | 术语定义
  description: 用于精确检测bang-bang最优控制中推力开关时刻的混合算法。先用牛顿法快速定位（通常4至5次迭代达到机器精度），若牛顿法失败或收敛到区间外，则退回到较慢但可靠的二分法。该方法结合了牛顿法的高效率和二分法的鲁棒性。
  image: /logo.png
permalink: /glossary/dynamics/newton-bisection-hybrid-switching-detection/
---

# 牛顿二分切换点检测法（Newton-Bisection Hybrid Switching Detection）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

用于精确检测bang-bang最优控制中推力开关时刻的混合算法。先用牛顿法快速定位（通常4至5次迭代达到机器精度），若牛顿法失败或收敛到区间外，则退回到较慢但可靠的二分法。该方法结合了牛顿法的高效率和二分法的鲁棒性。

## 应用价值

在实际的地月空间任务中，该方法可用于提升航天器的自主导航与姿态控制能力。通过实时处理传感器数据并估计系统状态，航天器能够在缺乏地面测控支持的条件下维持正常工作。这一技术在深空探测和交会对接等复杂任务场景中尤为重要，能够增强系统的鲁棒性和适应性。

## 相关概念

- [椭圆限制性三体问题（Elliptic Restricted Three-Body Problem）](/glossary/dynamics/elliptic-restricted-three-body-problem/)
- [动力一致性（Dynamical Consistency）](/glossary/dynamics/dynamical-consistency/)
- [组合协方差（Combined Covariance）](/glossary/dynamics/combined-covariance/)
- [尼霍罗舍夫估计（Nekhorosev Estimates）](/glossary/dynamics/nekhorosev-estimates/)

## 参考文献

- Zhang et al. 2015, JGCD, doi:10.2514/1.G001080; Martinon and Gergaud 2010, INRIA TR-7380
