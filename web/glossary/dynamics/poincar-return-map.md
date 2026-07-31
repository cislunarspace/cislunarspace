---
title: Poincaré回归映射（Poincaré Return Map）
description: 在周期轨道上取一个截面，将截面上任意一点经一个周期 T_H 后的相流映射回到截面，所定义的离散映射 P(z)=phi_{T_H}(z)。它是分析周期轨道稳定性的标准工具：P(z) 的微分 D_z P(z) 为辛矩阵，其特征值（特征乘子）决定了周期轨道的线性稳定性。论文中通过计算 Poincaré 映射的微分矩阵，得到 
keywords: Poincaré回归映射, Poincaré Return Map, 动力学, 轨道, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Poincaré回归映射（Poincaré Return Map）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Poincaré回归映射详解 | 术语定义
  description: 在周期轨道上取一个截面，将截面上任意一点经一个周期 T_H 后的相流映射回到截面，所定义的离散映射 P(z)=phi_{T_H}(z)。它是分析周期轨道稳定性的标准工具：P(z) 的微分 D_z P(z) 为辛矩阵，其特征值（特征乘子）决定了周期轨道的线性稳定性。论文中通过计算 Poincaré 映射的微分矩阵，得到 
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Poincaré回归映射详解 | 术语定义
  description: 在周期轨道上取一个截面，将截面上任意一点经一个周期 T_H 后的相流映射回到截面，所定义的离散映射 P(z)=phi_{T_H}(z)。它是分析周期轨道稳定性的标准工具：P(z) 的微分 D_z P(z) 为辛矩阵，其特征值（特征乘子）决定了周期轨道的线性稳定性。论文中通过计算 Poincaré 映射的微分矩阵，得到 
  image: /logo.png
permalink: /glossary/dynamics/poincar-return-map/
---

# Poincaré回归映射（Poincaré Return Map）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在周期轨道上取一个截面，将截面上任意一点经一个周期 T_H 后的相流映射回到截面，所定义的离散映射 P(z)=phi_{T_H}(z)。它是分析周期轨道稳定性的标准工具：P(z) 的微分 D_z P(z) 为辛矩阵，其特征值（特征乘子）决定了周期轨道的线性稳定性。论文中通过计算 Poincaré 映射的微分矩阵，得到 Halo 轨道的实特征值 lambda_5 和 lambda_6 = 1/lambda_5，确认了指数不稳定性。

## 应用价值

在Poincaré回归映射的分析中，研究者首先需要建立描述航天器运动的数学模型，通过数值积分或解析方法求解该术语所对应的动力学方程，进而评估航天器在不同初始条件下的运动特性。
由于Poincaré回归映射具有不稳定性，轨道设计时必须考虑主动控制或定期修正策略，以避免初始误差随时间指数增长导致任务失败。
在实际任务中，需要结合数值仿真和解析方法对Poincaré回归映射进行分析验证，确保设计方案满足任务约束和性能指标。

## 相关概念

- [双变量高斯分布（Bivariate Gaussian Distribution）](/glossary/dynamics/bivariate-gaussian-distribution/)
- [中途脉冲（Midcourse Impulse）](/glossary/dynamics/midcourse-impulse/)
- [零推力参考轨迹（Zero-Thrust Reference Trajectory）](/glossary/dynamics/zero-thrust-reference-trajectory/)
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)

## 参考文献

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
