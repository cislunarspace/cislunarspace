---
title: 轨道坐标系（Orbital Coordinate System）
description: 以探测器质心为原点的局部参考系，用于描述推力方向。论文定义Ay1轴从月心指向探测器，Ax1轴垂直Ay1指向运动方向，Az1按右手定则确定。推力方向用两个角度描述：vartheta为推力矢量与Ay1轴的夹角（面内角），psi为推力矢量在x1Az1平面上的投影与Ax1轴负向的夹角（面外角）。通过坐标转换矩阵将推力分量投影到
keywords: 轨道坐标系, Orbital Coordinate System, 航天器, 基础, 坐标
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 轨道坐标系（Orbital Coordinate System）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 轨道坐标系详解 | 术语定义
  description: 以探测器质心为原点的局部参考系，用于描述推力方向。论文定义Ay1轴从月心指向探测器，Ax1轴垂直Ay1指向运动方向，Az1按右手定则确定。推力方向用两个角度描述：vartheta为推力矢量与Ay1轴的夹角（面内角），psi为推力矢量在x1Az1平面上的投影与Ax1轴负向的夹角（面外角）。通过坐标转换矩阵将推力分量投影到
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 轨道坐标系详解 | 术语定义
  description: 以探测器质心为原点的局部参考系，用于描述推力方向。论文定义Ay1轴从月心指向探测器，Ax1轴垂直Ay1指向运动方向，Az1按右手定则确定。推力方向用两个角度描述：vartheta为推力矢量与Ay1轴的夹角（面内角），psi为推力矢量在x1Az1平面上的投影与Ax1轴负向的夹角（面外角）。通过坐标转换矩阵将推力分量投影到
  image: /logo.png
permalink: /glossary/fundamentals/orbital-coordinate-system/
---

# 轨道坐标系（Orbital Coordinate System）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

以探测器质心为原点的局部参考系，用于描述推力方向。论文定义Ay1轴从月心指向探测器，Ax1轴垂直Ay1指向运动方向，Az1按右手定则确定。推力方向用两个角度描述：vartheta为推力矢量与Ay1轴的夹角（面内角），psi为推力矢量在x1Az1平面上的投影与Ax1轴负向的夹角（面外角）。通过坐标转换矩阵将推力分量投影到惯性坐标系，建立三维动力学方程。

## 应用价值

动力系统理论为轨道设计提供了传统圆锥曲线法之外的全新视角。在实际任务中，需要根据具体应用场景和约束条件选择合适的分析方法。。

## 相关概念

- 星载软件（On-Board Software）
- 质心坐标时（Barycentric Coordinate Time, TCB）
- 地平坐标系（Horizontal Coordinate System）

## 参考文献

- 周净扬和周荻 - 2007 - 月球探测器软着陆精确建模及最优轨道设计
