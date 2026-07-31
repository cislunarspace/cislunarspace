---
title: 多层离散化（Multilevel Discretization）
description: 预计算变分数据的存储结构。将参考轨道的时间区间等分为 2^m 份，从最细粒度（第 m 层）向上逐层利用 cocycle 条件合并子区间数据，形成 m+1 个层次的 STM 和 STT 数据。在线阶段按二分查找策略，从最粗层开始逐层拼接，仅需 O(m) 次矩阵乘法即可得到目标区间的 STT。
keywords: 多层离散化, Multilevel Discretization, 轨道力学, 数值积分, 坐标系统
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 多层离散化（Multilevel Discretization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 多层离散化详解 | 术语定义
  description: 预计算变分数据的存储结构。将参考轨道的时间区间等分为 2^m 份，从最细粒度（第 m 层）向上逐层利用 cocycle 条件合并子区间数据，形成 m+1 个层次的 STM 和 STT 数据。在线阶段按二分查找策略，从最粗层开始逐层拼接，仅需 O(m) 次矩阵乘法即可得到目标区间的 STT。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 多层离散化详解 | 术语定义
  description: 预计算变分数据的存储结构。将参考轨道的时间区间等分为 2^m 份，从最细粒度（第 m 层）向上逐层利用 cocycle 条件合并子区间数据，形成 m+1 个层次的 STM 和 STT 数据。在线阶段按二分查找策略，从最粗层开始逐层拼接，仅需 O(m) 次矩阵乘法即可得到目标区间的 STT。
  image: /logo.png
permalink: /glossary/fundamentals/multilevel-discretization/
---

# 多层离散化（Multilevel Discretization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：学术论文与专业资料整理
>
> 站长地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

预计算变分数据的存储结构。将参考轨道的时间区间等分为 2^m 份，从最细粒度（第 m 层）向上逐层利用 cocycle 条件合并子区间数据，形成 m+1 个层次的 STM 和 STT 数据。在线阶段按二分查找策略，从最粗层开始逐层拼接，仅需 O(m) 次矩阵乘法即可得到目标区间的 STT。

## 应用价值

多层离散化通过 cocycle 条件将预计算的 STM/STT 数据组织为层次结构，在线查询仅需 O(m) 次矩阵乘法。在实时轨迹重建和偏差传播计算中具有显著效率优势。

## 相关概念

- [轨道状态向量（Orbital State Vector）](/glossary/fundamentals/orbital-state-vector/)
- [坐标时（Coordinate Time）](/glossary/fundamentals/coordinate-time/)
- [Hill坐标系（Hill Frame）](/glossary/fundamentals/hill-frame/)
- [开普勒定律（Kepler's Laws）](/glossary/fundamentals/keplers-laws/)

## 参考文献

- Kulik et al., 2023, JGCD, doi:10.2514/1.G007311
