---
title: 定常变换（Time-Invariant Transformation）
description: 将线性周期时变系统转化为线性定常系统的数学变换。方法是以一个周期内的所有离散状态量和控制量组成增广向量，利用无控动力学的状态转移矩阵构造变换矩阵。变换后得到的定常系统的状态矩阵为一个周期内的累积转移矩阵，输入矩阵由周期内各时刻的脉冲响应组成。论文完成此变换后，即可用经典的极点配置定理设计反馈增益。
keywords: 定常变换, Time-Invariant Transformation, , 基础理论, 轨道力学, 摄动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 定常变换（Time-Invariant Transformation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 定常变换详解 | 术语定义
  description: 将线性周期时变系统转化为线性定常系统的数学变换。方法是以一个周期内的所有离散状态量和控制量组成增广向量，利用无控动力学的状态转移矩阵构造变换矩阵。变换后得到的定常系统的状态矩阵为一个周期内的累积转移矩阵，输入矩阵由周期内各时刻的脉冲响应组成。论文完成此变换后，即可用经典的极点配置定理设计反馈增益。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 定常变换详解 | 术语定义
  description: 将线性周期时变系统转化为线性定常系统的数学变换。方法是以一个周期内的所有离散状态量和控制量组成增广向量，利用无控动力学的状态转移矩阵构造变换矩阵。变换后得到的定常系统的状态矩阵为一个周期内的累积转移矩阵，输入矩阵由周期内各时刻的脉冲响应组成。论文完成此变换后，即可用经典的极点配置定理设计反馈增益。
  image: /logo.png
permalink: /glossary/fundamentals/time-invariant-transformation/
---

# 定常变换（Time-Invariant Transformation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：[地月空间入门指南](https://cislunarspace.cn)

## 定义

将线性周期时变系统转化为线性定常系统的数学变换。方法是以一个周期内的所有离散状态量和控制量组成增广向量，利用无控动力学的状态转移矩阵构造变换矩阵。变换后得到的定常系统的状态矩阵为一个周期内的累积转移矩阵，输入矩阵由周期内各时刻的脉冲响应组成。论文完成此变换后，即可用经典的极点配置定理设计反馈增益。

## 应用价值

定常变换将线性周期时变系统转化为线性定常系统，设计师可用经典的极点配置定理设计反馈增益，实现平动点轨道的稳定保持。

## 相关概念

- [微分修正法（Differential Correction Method）](/glossary/fundamentals/differential-correction-method/)
- [拉瓦尔喷管（Laval Nozzle）](/glossary/fundamentals/laval-nozzle/)
- [拉格朗日点（Lagrange Point）](/glossary/fundamentals/lagrange-point/)
- [轨道根数（Orbital Elements）](/glossary/fundamentals/orbital-elements/)

## 参考文献

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
