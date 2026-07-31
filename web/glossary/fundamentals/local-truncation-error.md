---
title: 局部截断误差（Local Truncation Error）
description: 数值积分单步中，因用有限阶近似代替精确积分而引入的误差。变步长积分器通过估计该误差并与容限比较来自动调节步长：误差过大时缩小步长，误差很小时放大步长。在轨道根数积分中，根数变化剧烈时局部截断误差增大，导致步长缩短、计算效率下降。
keywords: 局部截断误差, Local Truncation Error, 三体问题, 坐标系, 积分
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 局部截断误差（Local Truncation Error）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 局部截断误差详解 | 术语定义
  description: 数值积分单步中，因用有限阶近似代替精确积分而引入的误差。变步长积分器通过估计该误差并与容限比较来自动调节步长：误差过大时缩小步长，误差很小时放大步长。在轨道根数积分中，根数变化剧烈时局部截断误差增大，导致步长缩短、计算效率下降。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 局部截断误差详解 | 术语定义
  description: 数值积分单步中，因用有限阶近似代替精确积分而引入的误差。变步长积分器通过估计该误差并与容限比较来自动调节步长：误差过大时缩小步长，误差很小时放大步长。在轨道根数积分中，根数变化剧烈时局部截断误差增大，导致步长缩短、计算效率下降。
  image: /logo.png
permalink: /glossary/fundamentals/local-truncation-error/
---

# 局部截断误差（Local Truncation Error）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

数值积分单步中，因用有限阶近似代替精确积分而引入的误差。变步长积分器通过估计该误差并与容限比较来自动调节步长：误差过大时缩小步长，误差很小时放大步长。在轨道根数积分中，根数变化剧烈时局部截断误差增大，导致步长缩短、计算效率下降。

## 应用价值

基于该术语的定义，数值积分单步中，因用有限阶近似代替精确积分而引入的误差。变步长积分器通过估计该误差并与容限比较来自动。

## 相关概念

- [轨道力学（Orbital Mechanics）](/glossary/fundamentals/orbital-mechanics/)
- [坐标系（Coordinate Frame）](/glossary/fundamentals/coordinate-frame/)
- [积分（Integration）](/glossary/fundamentals/integration/)

## 参考文献

- 适用于圆锥曲线的统一根数在地月空间目标轨道预报的应用
