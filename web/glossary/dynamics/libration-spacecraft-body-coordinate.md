---
title: 平动点飞行器本体坐标系（Libration Point Spacecraft Body Coordinate System）
description: 详细解析平动点飞行器本体坐标系的定义、坐标轴方向及其与敏感器测量坐标系的关系
keywords: 平动点飞行器本体坐标系, 本体坐标系, 惯量主轴, 滚动俯仰偏航, 敏感器安装
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 平动点飞行器本体坐标系
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 平动点飞行器本体坐标系详解 | 姿态基准
  description: 详细解析平动点飞行器本体坐标系的定义、坐标轴方向及其与敏感器测量坐标系的关系
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 平动点飞行器本体坐标系详解 | 姿态基准
  description: 详细解析平动点飞行器本体坐标系的定义、坐标轴方向及其与敏感器测量坐标系的关系
  image: /logo.png
permalink: /glossary/dynamics/libration-spacecraft-body-coordinate/
---

# 平动点飞行器本体坐标系（Libration Point Spacecraft Body Coordinate System）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文参考：钱霙婧(2014)《地月空间拟周期轨道上航天器自主导航与轨道保持研究》
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

平动点飞行器本体坐标系（$\mathcal{O}_b - X_b Y_b Z_b$）是以平动点飞行器质心为原点建立的机体坐标系，用于描述飞行器的姿态和敏感器安装方向。在钱霙婧(2014)的研究中，本体坐标系定义为**惯量主轴坐标系**，X_b 为滚动轴（Roll），Y_b 为俯仰轴（Pitch），Z_b 为偏航轴（Yaw）。

## 坐标轴定义

| 轴 | 名称 | 方向 | 说明 |
|:---|:---|:---|:---|
| **X_b** | 滚动轴（Roll） | 沿飞行器某一特征轴方向 | 描述绕纵轴的旋转 |
| **Y_b** | 俯仰轴（Pitch） | 沿飞行器另一特征轴方向 | 描述绕横轴的旋转 |
| **Z_b** | 偏航轴（Yaw） | 沿飞行器第三特征轴方向 | 描述绕竖轴的旋转 |

三轴 $X_b$、$Y_b$、$Z_b$ 构成右手直角坐标系。

## 与敏感器测量坐标系的关系

钱霙婧(2014)假设**敏感器测量坐标系与平动点飞行器本体坐标系重合**，安装误差另外考虑。这意味着：

1. 敏感器的测量轴与本体坐标轴对齐
2. 观测方程中的角度测量直接在本体系中进行
3. 实际工程中需要考虑敏感器安装误差的补偿

## 在自主导航中的作用

### 观测方程

在自主导航系统中，敏感器测量的角度信息需要转换到惯性坐标系中：

$$\mathbf{y}_{\text{measured}} = \mathbf{R}_{b \to i} \cdot \mathbf{y}_{\text{body}}$$

其中 $\mathbf{R}_{b \to i}$ 为本体坐标系到惯性坐标系的姿态转换矩阵。

### 姿态确定

星敏感器测量的是恒星方向在本体坐标系中的投影，结合姿态控制系统的姿态信息，可以建立观测方程进行状态估计。

## 姿态控制术语

| 术语 | 英文 | 描述 |
|:---|:---|:---|
| 滚动 | Roll | 绕 X_b 轴的旋转 |
| 俯仰 | Pitch | 绕 Y_b 轴的旋转 |
| 偏航 | Yaw | 绕 Z_b 轴的旋转 |

## 相关概念

- [平动点飞行器轨道坐标系](/glossary/dynamics/libration-spacecraft-orbital-coordinate/)
- [自主导航（Autonomous Navigation）](/glossary/navigation/autonomous-navigation/)

## 参考文献

- 钱霙婧. 地月空间拟周期轨道上航天器自主导航与轨道保持研究[D]. 哈尔滨工业大学, 2014.