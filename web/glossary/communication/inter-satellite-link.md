---
title: 星间链路（Inter-Satellite Link, ISL）
description: 卫星之间用于测控通信的直连链路，包括微波和激光两种技术体制
keywords: 星间链路, ISL, Inter-Satellite Link, 微波链路, 激光链路, 星座组网, 北斗, 地月空间通信
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 星间链路（Inter-Satellite Link）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 星间链路详解 | 卫星通信核心技术
  description: 卫星之间用于测控通信的直连链路，包括微波和激光两种技术体制
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 星间链路详解 | 卫星通信核心技术
  description: 卫星之间用于测控通信的直连链路，包括微波和激光两种技术体制
  image: /logo.png
permalink: /glossary/communication/inter-satellite-link/
---

# 星间链路

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

星间链路（Inter-Satellite Link，ISL）是指两颗或多颗卫星之间建立的直接通信链路，用于实现卫星间的测控、数据传输和信息交换。星间链路是卫星星座组网的核心基础设施，使星座能够作为一个整体协调运行。

## 技术体制

星间链路主要有两种技术体制：

### 微波星间链路

- 工作频段包括 Ka 频段（约 23–26 GHz）和 V 频段（约 70 GHz）
- 采用相控阵天线实现波束扫描和捷变控制
- 北斗三号系统采用 Ka 相控阵捷变微波星间链路
- DRO 三星星座采用 K 频段进行星间测量通信

### 激光星间链路

- 相比微波，激光通信载荷具有重量轻、尺寸小、功耗低、通信数传功能强的优点
- 北斗三号卫星已搭载激光星间链路载荷
- DRO-A 星上安装了激光通信载荷，在国际上首次验证了超过 100 万公里的星间通信链路

## 在地月空间中的应用

在地月空间通信架构中，星间链路发挥关键作用：

- **北斗星座内部**：利用激光微波混合链路保持卫星间长期稳定的不间断链路，构成恒定的卫星网络
- **用户航天器接入**：通过星间链路为地月空间编目用户航天器提供全时无缝通信服务
- **动态路由规划**：由星载网络信息设备对全星座进行动态链路规划和路由规划

## 参考

- 段志慧, 王坚, 樊怡乐. 基于北斗卫星系统的地月空间全时通信探讨[J]. 遥测遥控, 2026.
- 中国科学院. 地月空间 DRO 探索研究学术研讨会[C]. 北京, 2025.
