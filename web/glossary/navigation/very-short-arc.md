---
title: 极短弧（Very Short Arc）
description: 观测弧段极短、观测信息严重不足的观测条件。光学观测下只能直接获得方位角与俯仰角及其变化率，斜距与斜距率不可直接测量，经典初轨确定方法失效，须借助可接受域等方法约束解空间后搜索初值。
keywords: 极短弧, Very Short Arc, VSA, 甚短弧, 初轨确定, 可接受域, 空间目标监视
author: 天疆说
date: 2026-10-23
lastUpdated: 2026-10-23
wechatShare:
  title: 极短弧（Very Short Arc）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 极短弧（Very Short Arc）详解 | 术语定义
  description: 观测弧段极短、观测信息严重不足的观测条件。光学观测下只能直接获得方位角与俯仰角及其变化率，斜距与斜距率不可直接测量，经典初轨确定方法失效，须借助可接受域等方法约束解空间后搜索初值。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 极短弧（Very Short Arc）详解 | 术语定义
  description: 观测弧段极短、观测信息严重不足的观测条件。光学观测下只能直接获得方位角与俯仰角及其变化率，斜距与斜距率不可直接测量，经典初轨确定方法失效，须借助可接受域等方法约束解空间后搜索初值。
  image: /logo.png
permalink: /glossary/navigation/very-short-arc/
aliases:
  - VSA
  - Very Short Arc (VSA)
  - 甚短弧
related:
  - ref: navigation/multiple-solutions-phenomenon
    relation: related
  - ref: fundamentals/lamberts-problem
    relation: related
---

# 极短弧（Very Short Arc）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

极短弧（Very Short Arc，VSA）指观测弧段极短的观测条件。目标在观测弧段内只扫过很小一片天区，光学观测直接给出的只有方位角 $\alpha$、俯仰角 $\beta$ 及其变化率 $\dot{\alpha}$、$\dot{\beta}$ 四个量，斜距 $\rho$ 与斜距率 $\dot{\rho}$ 无法直接测量，须借助可接受域（Admissible Region）等约束方法估计 \cite{qiuDroInitialOrbit2025}。观测信息随弧段缩短而严重退化，极短弧下的初轨确定是空间目标监视与地月空间态势感知的基础难题之一。

## 观测模型与可观性缺失

以测站为参考点，目标在观测时刻的状态有六个自由度。纯角度观测每个时刻只约束视线方向两维信息，弧段极短时角度变化微小，即使附上角率，观测也只等价于视线方向及其导数的四维约束。缺失的斜距与斜距率两维使相应法方程严重病态：高斯法与拉普拉斯法等经典初轨确定方法依赖跨越足够弧段的三次方向观测，在极短弧条件下解算不稳定 \cite{qiuDroInitialOrbit2025}。

## 与可接受域方法的关系

由于直接解算不可行，极短弧初轨确定通常转化为斜距与斜距率平面上的约束搜索问题。可接受域方法以物理条件（目标处于束缚轨道、能量或雅可比常数的合理取值范围等）裁剪 $(\rho, \dot{\rho})$ 参数平面，得到解必然落入的子区域，再在域内用优化或采样算法搜索初值。Qiu 等针对地月空间 DRO 目标，在惯性系与旋转系中先后以轨道特征参数构建两级可接受域，逐级压缩解空间，并在最终域内以观测残差最小化搜索初轨，降低了传统方法对轨道外推的依赖 \cite{qiuDroInitialOrbit2025}。

## 应用场景

- 空间目标监视编目：地基光学普查对新发现目标往往只能取得极短弧，极短弧初轨确定是编目链路的入口环节。
- 地月空间态势感知：对 DRO 等地月轨道目标，传统初轨确定方法在极短弧条件下不稳定，快速而准确的极短弧初轨确定方案成为地月空间态势感知的关键一步 \cite{qiuDroInitialOrbit2025}。

## 相关概念

- [多解现象（Multiple Solutions Phenomenon）](/glossary/navigation/multiple-solutions-phenomenon/)
- [兰伯特问题（Lambert's Problem）](/glossary/fundamentals/lamberts-problem/)
