---
title: 置换重要性（Permutation Importance）
description: 一种评估机器学习模型中输入特征重要性的方法。它对每个输入特征的值为随机排列后重预测，观察模型精度下降幅度，以此衡量该特征对输出的贡献权重。本文通过置换重要性分析发现，传感器孔径尺寸是预测地月监视覆盖性能最重要的特征，其重要性远高于传感器数量和轨道类型。
keywords: 置换重要性, Permutation Importance, , 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 置换重要性（Permutation Importance）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 置换重要性详解 | 术语定义
  description: 一种评估机器学习模型中输入特征重要性的方法。它对每个输入特征的值为随机排列后重预测，观察模型精度下降幅度，以此衡量该特征对输出的贡献权重。本文通过置换重要性分析发现，传感器孔径尺寸是预测地月监视覆盖性能最重要的特征，其重要性远高于传感器数量和轨道类型。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 置换重要性详解 | 术语定义
  description: 一种评估机器学习模型中输入特征重要性的方法。它对每个输入特征的值为随机排列后重预测，观察模型精度下降幅度，以此衡量该特征对输出的贡献权重。本文通过置换重要性分析发现，传感器孔径尺寸是预测地月监视覆盖性能最重要的特征，其重要性远高于传感器数量和轨道类型。
  image: /logo.png
permalink: /glossary/dynamics/permutation-importance/
---

# 置换重要性（Permutation Importance）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：[地月空间入门指南](https://cislunarspace.cn)

## 定义

一种评估机器学习模型中输入特征重要性的方法。它对每个输入特征的值为随机排列后重预测，观察模型精度下降幅度，以此衡量该特征对输出的贡献权重。本文通过置换重要性分析发现，传感器孔径尺寸是预测地月监视覆盖性能最重要的特征，其重要性远高于传感器数量和轨道类型。

## 应用价值

置换重要性是机器学习中评估特征重要性的方法，可用于分析轨道影响因素。

## 相关概念

- [渐近解（Asymptotic Solution）](/glossary/dynamics/asymptotic-solution/)
- [近月点数据库（Perilune Database）](/glossary/dynamics/perilune-database/)
- [平动点轨道编目（Libration Point Orbit Cataloging）](/glossary/orbits/libration-point-orbit-cataloging/)
- [Floquet模态法（Floquet Modal Method）](/glossary/dynamics/floquet-modal-method/)

## 参考文献

- DeCoster et al., 2026
