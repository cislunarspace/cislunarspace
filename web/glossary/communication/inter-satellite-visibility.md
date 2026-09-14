---
title: 星间通视（Inter-Satellite Visibility）
description: 评估两颗空间飞行器之间不受天体遮挡且满足天线指向范围的视线几何连通状态。
keywords: 星间通视, Inter-Satellite Visibility, 视线几何, 星间链路, 遮挡分析
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 星间通视几何分析
  desc: 地月空间多体运动下的卫星视线通视与链路窗口。
  image: /logo.png
permalink: /glossary/communication/inter-satellite-visibility/
---

# 星间通视（Inter-Satellite Visibility）

## 定义

在给定的空间坐标系与历元时刻，两颗飞行器之间的视线矢量未被地球、月球或其他天体物理截面遮挡，且相对方位满足星载天线视场与转动角速度限制的几何条件。

## 物理机制与工程价值

地月空间中的卫星多处于大尺度非开普勒三体轨道，轨道几何构型动态变化剧烈。星间通视窗口的计算需要联合求解三体动力学数值解与天体截面碰撞方程。通视性分析是构建星间测距网络、自主时间同步与分布式星间测控的基础输入，直接决定中继路由拓扑的更新频率与通信协议设计。

## 相关概念

- [星间链路](/glossary/communication/relay-communication/)
- [接入时间](/glossary/observation/access-time/)
- [混合通信导航星座](/glossary/communication/hybrid-communication-navigation-constellation/)

## 参考文献

- 测绘学报, 2013, 42(2): 184-190, 月球卫星星座星间可见性与测距几何精度分析。
