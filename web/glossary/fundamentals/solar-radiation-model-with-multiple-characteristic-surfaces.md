---
title: 多特征面太阳辐射模型（Solar Radiation Model with Multiple Characteristic Surfaces）
description: 根据航天器实际结构和实时姿态，将卫星表面划分为多个特征面（如碟形天线投影圆盘、三角形、椭圆等），实时计算各特征角下的等效受照面积，再通过形状保持分段三次Hermite插值得到连续的面积函数，从而替代炮弹模型中固定的面质比参数。该模型适用于具有复杂外形的深空探测器，能显著提升轨道确定精度。
keywords: 多特征面太阳辐射模型, Solar Radiation Model with Multiple Characteristic Surfaces, 轨道力学, 基础概念, 参考系
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 多特征面太阳辐射模型（Solar Radiation Model with Multiple Characteristic Surfaces）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 多特征面太阳辐射模型详解 | 术语定义
  description: 根据航天器实际结构和实时姿态，将卫星表面划分为多个特征面（如碟形天线投影圆盘、三角形、椭圆等），实时计算各特征角下的等效受照面积，再通过形状保持分段三次Hermite插值得到连续的面积函数，从而替代炮弹模型中固定的面质比参数。该模型适用于具有复杂外形的深空探测器，能显著提升轨道确定精度。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 多特征面太阳辐射模型详解 | 术语定义
  description: 根据航天器实际结构和实时姿态，将卫星表面划分为多个特征面（如碟形天线投影圆盘、三角形、椭圆等），实时计算各特征角下的等效受照面积，再通过形状保持分段三次Hermite插值得到连续的面积函数，从而替代炮弹模型中固定的面质比参数。该模型适用于具有复杂外形的深空探测器，能显著提升轨道确定精度。
  image: /logo.png
permalink: /glossary/fundamentals/solar-radiation-model-with-multiple-characteristic-surfaces/
---

# 多特征面太阳辐射模型（Solar Radiation Model with Multiple Characteristic Surfaces）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

根据航天器实际结构和实时姿态，将卫星表面划分为多个特征面（如碟形天线投影圆盘、三角形、椭圆等），实时计算各特征角下的等效受照面积，再通过形状保持分段三次Hermite插值得到连续的面积函数，从而替代炮弹模型中固定的面质比参数。该模型适用于具有复杂外形的深空探测器，能显著提升轨道确定精度。

## 应用价值

形状法利用解析函数近似轨迹几何形状，为高精度的最优控制求解器提供良好的初始猜测，是小推力转移轨道设计的重要工具。

## 相关概念

- [月心旋转坐标系（Moon-Centered Rotating Frame）](/glossary/fundamentals/moon-centered-rotating-frame/)
- [有效势能（Effective Pseudo-Potential）](/glossary/fundamentals/effective-pseudo-potential/)
- [比冲（Specific Impulse）](/glossary/fundamentals/specific-impulse/)
- [月球二体能量（Two-Body Energy with Respect to the Moon）](/glossary/fundamentals/two-body-energy-with-respect-to-the-moon/)

## 参考文献

- Duan和Wang - 2019 - Orbit determination of CE-4's relay satellite in Earth-moon L2 libration point orbit
