---
title: 星座组网（Constellation Networking）
description: 多颗卫星通过星间链路和路由协议互联构成统一运行网络的技术
keywords: 星座组网, Constellation Networking, 卫星网络, 星间链路, 路由协议, 北斗星座, 动态路由
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 星座组网（Constellation Networking）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 星座组网详解 | 卫星通信网络化技术
  description: 多颗卫星通过星间链路和路由协议互联构成统一运行网络的技术
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 星座组网详解 | 卫星通信网络化技术
  description: 多颗卫星通过星间链路和路由协议互联构成统一运行网络的技术
  image: /logo.png
permalink: /glossary/communication/constellation-networking/
---

# 星座组网

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

星座组网（Constellation Networking）是指将多颗卫星通过星间链路和路由协议互联，构成功能统一的卫星网络的技术。组网后的星座不再是一组独立运行的卫星，而是一个具有信息汇集分发、星上计算、信息处理能力的有机整体。

## 核心要素

### 星间链路互联

- 利用激光微波混合星间链路保持卫星间长期稳定的不间断链路
- 构成恒定的卫星网络拓扑

### 星载路由

- 星载网络信息设备发挥核心大脑作用
- 通过分布式计算实现动态链路规划和动态路由规划
- 支持网算一体的信息处理模式

### 动态管理

- 根据用户航天器接入信息、星座卫星资源及空间拓扑关系，动态分配调度通信资源
- 全星座进行动态链路规划（包括波束动态指向）和动态路由规划

## 在地月空间中的应用

在基于北斗卫星系统的地月空间通信方案中，星座组网具有以下特征：

- **北斗星座内部组网**：30 颗北斗卫星通过星间链路构成统一网络
- **扩展至地月空间**：在卫星对天面加装载荷，将组网能力延伸至深空用户航天器
- **编目用户管理**：用户航天器经入网验证后编目在案，通过星座网络获得通信服务
- **三种服务模式**：低速短报文（约 400 bit/s）、中速微波（100 kbit/s ~ 10 Mbit/s）、高速激光（100 Mbit/s ~ 10 Gbit/s）

## 参考

- 段志慧, 王坚, 樊怡乐. 基于北斗卫星系统的地月空间全时通信探讨[J]. 遥测遥控, 2026.
- 陈忠贵, 武向军. 北斗三号卫星系统总体设计[J]. 南京航空航天大学学报, 2020, 52(6): 835-845.
