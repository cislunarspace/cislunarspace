---
title: 形状法（Shape Method）
description: 一类小推力轨道初始设计方法。用含待定参数的解析函数（形状函数）近似描述转移轨道的几何形状，从中提取控制加速度作为最优控制求解器的初始猜测值。常见形状函数包括逆多项式函数、正弦指数函数和Fourier级数。本文针对平动点周期轨道构造了振幅和相位按多项式变化的新形状函数，结合了共线平动点附近轨道的动力学特性。
keywords: 形状法, Shape Method, 轨道力学, 最优控制, 轨迹优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 形状法（Shape Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 形状法详解 | 术语定义
  description: 一类小推力轨道初始设计方法。用含待定参数的解析函数（形状函数）近似描述转移轨道的几何形状，从中提取控制加速度作为最优控制求解器的初始猜测值。常见形状函数包括逆多项式函数、正弦指数函数和Fourier级数。本文针对平动点周期轨道构造了振幅和相位按多项式变化的新形状函数，结合了共线平动点附近轨道的动力学特性。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 形状法详解 | 术语定义
  description: 一类小推力轨道初始设计方法。用含待定参数的解析函数（形状函数）近似描述转移轨道的几何形状，从中提取控制加速度作为最优控制求解器的初始猜测值。常见形状函数包括逆多项式函数、正弦指数函数和Fourier级数。本文针对平动点周期轨道构造了振幅和相位按多项式变化的新形状函数，结合了共线平动点附近轨道的动力学特性。
  image: /logo.png
permalink: /glossary/dynamics/shape-method/
---

# 形状法（Shape Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一类小推力轨道初始设计方法。用含待定参数的解析函数（形状函数）近似描述转移轨道的几何形状，从中提取控制加速度作为最优控制求解器的初始猜测值。常见形状函数包括逆多项式函数、正弦指数函数和Fourier级数。本文针对平动点周期轨道构造了振幅和相位按多项式变化的新形状函数，结合了共线平动点附近轨道的动力学特性。

## 应用价值

在线性二次型最优控制框架下，通过选取合适的权重矩阵Q和R，可以在跟踪精度与控制能耗之间取得平衡，适用于地月空间轨道保持的实时控制。

## 相关概念

- [混合差分动态规划（Hybrid Differential Dynamic Programming）](/glossary/dynamics/hddp/)
- 差分动态规划（Differential Dynamic Programming, DDP）
- 二阶锥规划（Second-Order Cone Programming, SOCP）
- [流管（Flow Tube）](/glossary/dynamics/flow-tube/)

## 参考文献

- 平动点周期轨道间小推力转移的Gauss伪谱法
