---
title: k-sigma剪切算法（k-Sigma Clipping Algorithm）
description: 迭代式统计背景建模方法。计算图像像素值的均值和标准差，剔除超出 k 倍标准差的像素（视为天体信号或异常值），然后重新计算统计量。反复迭代直至收敛，得到不含天体污染的纯净背景模型。
keywords: k-sigma剪切算法, k-Sigma Clipping Algorithm, 观测, 覆盖, 传感器, 通信
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: k-sigma剪切算法（k-Sigma Clipping Algorithm）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: k-sigma剪切算法详解 | 术语定义
  description: 迭代式统计背景建模方法。计算图像像素值的均值和标准差，剔除超出 k 倍标准差的像素（视为天体信号或异常值），然后重新计算统计量。反复迭代直至收敛，得到不含天体污染的纯净背景模型。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: k-sigma剪切算法详解 | 术语定义
  description: 迭代式统计背景建模方法。计算图像像素值的均值和标准差，剔除超出 k 倍标准差的像素（视为天体信号或异常值），然后重新计算统计量。反复迭代直至收敛，得到不含天体污染的纯净背景模型。
  image: /logo.png
permalink: /glossary/observation/k-sigma-clipping-algorithm/
---

# k-sigma剪切算法（k-Sigma Clipping Algorithm）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

迭代式统计背景建模方法。计算图像像素值的均值和标准差，剔除超出 k 倍标准差的像素（视为天体信号或异常值），然后重新计算统计量。反复迭代直至收敛，得到不含天体污染的纯净背景模型。

## 应用价值

k-sigma剪切算法用于剔除测量数据中的异常值。在导航数据处理中，当某些测量值偏离统计期望过远时，k-sigma剪切算法将其识别为野值并剔除，避免异常测量污染滤波结果，提高导航系统的可靠性。

## 相关概念

- [网格点法（Grid-point Method）](/glossary/observation/grid-point-method/)
- [月球南极覆盖（Lunar South Pole Coverage）](/glossary/observation/lunar-south-pole-coverage/)
- [地面站（Ground Station）](/glossary/observation/ground-station/)
- [覆盖区（Coverage Region）](/glossary/observation/coverage-region/)
## 参考文献

- 王磊等, 2025
