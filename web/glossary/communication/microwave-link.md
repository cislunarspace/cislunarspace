---
title: 微波链路（Microwave Link）
description: 利用微波频段电磁波进行卫星间通信的无线电链路技术
keywords: 微波链路, Microwave Link, Ka频段, V频段, 相控阵天线, 星间通信, 链路预算, EIRP
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 微波链路（Microwave Link）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 微波链路详解 | 卫星通信基础技术
  description: 利用微波频段电磁波进行卫星间通信的无线电链路技术
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 微波链路详解 | 卫星通信基础技术
  description: 利用微波频段电磁波进行卫星间通信的无线电链路技术
  image: /logo.png
permalink: /glossary/communication/microwave-link/
---

# 微波链路

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

微波链路（Microwave Link）是指利用微波频段（通常为 GHz 量级）电磁波进行卫星间或星地间通信的无线电链路。微波链路是当前卫星通信中最成熟、应用最广泛的技术体制。

## 频段发展

星间微波信号频率呈现由低向高发展的趋势：

| 频段 | 频率范围 | 典型应用 |
|------|---------|---------|
| S 频段 | 2–4 GHz | 传统测控通信 |
| Ka 频段 | 26.5–40 GHz | 北斗星间链路、鹊桥二号星地链路 |
| K 频段 | 18–27 GHz | DRO 三星星座星间通信 |
| V 频段 | 40–75 GHz | 未来高速星间通信探索 |

## 链路设计要素

微波链路设计主要考虑以下参数：

- **EIRP（等效全向辐射功率）**：衡量发射端能力，取决于发射功率和天线增益
- **G/T（品质因数）**：衡量接收端灵敏度，取决于天线增益和系统噪声温度
- **空间损耗**：随星间距离和频率增加而增大
- **解调门限**：取决于调制方式和编码方式，如 QPSK + LDPC 1/2 编码下 Eb/N0 ≤ 4.5 dB

## 在地月空间中的应用

针对地月空间约 450,000 km 的星间距离，微波链路设计面临以下挑战和方案：

- **Ka 频段**：采用多波束 KMA 相控阵天线，等效 0.35 m 口径，可实现约 100 kbps 的双向通信
- **V 频段**（约 70 GHz）：利用高频段天线高增益优势，可实现约 500 kbps 的双向通信
- 信号路径损耗相比近地空间增加约 100 倍（20 dB），需要综合运用星座多星多波束优势补偿

## 参考

- 段志慧, 王坚, 樊怡乐. 基于北斗卫星系统的地月空间全时通信探讨[J]. 遥测遥控, 2026.
- 曹正蕊, 张国亭, 刘保国, 等. 载人航天天基测控通信探析[J]. 遥测遥控, 2023, 44(5): 1-7.
