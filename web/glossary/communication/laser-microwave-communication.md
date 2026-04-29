---
title: 激光微波通信（Laser-Microwave Communication）
description: 融合激光和微波两种通信体制的混合星间链路技术
keywords: 激光微波通信, Laser-Microwave Communication, 混合链路, 激光通信, 微波通信, 星间链路, 高速率通信
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 激光微波通信（Laser-Microwave Communication）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 激光微波通信详解 | 混合星间链路技术
  description: 融合激光和微波两种通信体制的混合星间链路技术
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 激光微波通信详解 | 混合星间链路技术
  description: 融合激光和微波两种通信体制的混合星间链路技术
  image: /logo.png
permalink: /glossary/communication/laser-microwave-communication/
---

# 激光微波通信

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

激光微波通信（Laser-Microwave Communication）是指在同一天基通信系统中融合激光（光）和微波两种通信体制，利用各自优势实现互补的混合星间链路技术。该技术方案兼顾微波链路的可靠性和激光链路的高速率，是未来地月空间通信的重要发展方向。

## 两种体制对比

| 特性 | 微波通信 | 激光通信 |
|------|---------|---------|
| 频段 | Ka（~26 GHz）、V（~70 GHz） | 光频段（~THz） |
| 数据速率 | 100 kbit/s ~ 10 Mbit/s | 100 Mbit/s ~ 10 Gbit/s |
| 天线尺寸 | 较大（相控阵或多波束） | 较小（光学天线） |
| 功耗 | 较高 | 较低 |
| 捕获跟踪 | 相对容易 | 对准精度要求高 |
| 可靠性 | 高，受天气影响小 | 需精确指向控制 |

## 技术架构

在基于北斗卫星系统的地月空间通信方案中，激光微波混合链路的架构为：

- **勤务通信**（低速、接入控制）：使用短报文和微波链路，数据速率约 400 bit/s ~ 10 Mbit/s
- **业务通信**（高速、数据传输）：使用激光链路，数据速率约 100 Mbit/s ~ 10 Gbit/s
- **星载网络信息设备**：统一调度激光和微波资源，进行动态链路规划和路由规划

## 发展现状

- 北斗三号卫星已同时搭载 Ka 微波星间链路和激光星间链路载荷
- DRO-A 星安装了激光通信载荷，DRO 星座卫星均安装了 K 频段微波星间测量通信载荷
- 在国际上首次验证了超过 100 万公里的 K 频段星间微波通信链路

## 参考

- 段志慧, 王坚, 樊怡乐. 基于北斗卫星系统的地月空间全时通信探讨[J]. 遥测遥控, 2026.
- 鲁绍文, 侯霞, 李国通, 等. 空间光通信技术发展现状及趋势[J]. 天地一体化信息网络, 2022, 3(2): 39-46.
- 罗彤, 王伟志, 薛佳音, 等. 深空光通信技术现状及发展趋势[J]. 遥测遥控, 2022, 43(4): 44-55.
