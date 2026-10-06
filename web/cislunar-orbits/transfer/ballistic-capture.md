---
title: 弹道捕获
description: 弹道捕获原理、与动力捕获的对比、低能转移中的作用，以及优势与局限性分析。
wechatShare:
  title: 弹道捕获
  desc: 弹道捕获原理、与动力捕获的对比、低能转移中的作用，以及优势与局限性分析。
  image: /logo.png
keywords: 弹道捕获, Ballistic Capture, 低能转移, WSB, 弱稳定边界, 月球引力辅助
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-10-01
permalink: /cislunar-orbits/transfer/ballistic-capture/
---

> 本文作者：天疆说
>
> 本文编辑来源：[CislunarSpace](https://cislunarspace.cn)
>
> 来源：<https://cislunarspace.cn>

# 弹道捕获

## 原理

弹道捕获（Ballistic Capture）是一种利用月球引力辅助实现地月转移的技术，其核心思想是：在不进行推进减速的情况下，让航天器被月球引力“自然捕获”。

传统的地月转移采用动力捕获，需要在接近月球时执行减速机动，使航天器进入月球捕获轨道。而弹道捕获则利用了月球轨道的动力学特性：若航天器在发射时精确瞄准月球在未来某一时刻的位置，则当航天器到达该位置时，即使不进行减速，月球引力也会将其自然拽入一个相对稳定的轨道 \cite{belbrunoSunperturbedEarthtomoonTransfers1993}。

## Ballistic Capture vs 动力捕获

| 特性 | 弹道捕获 | 动力捕获 |
| ------ | ---------- | ---------- |
| 月球附近推进 | 无需 | 需要（$\Delta V \sim 0.8-1.0$ km/s） |
| 发射时机要求 | 非常精确（窗口窄） | 相对宽松 |
| 转移时间 | 较长（约 2 至 4 个月） | 较短（3-5 天） |
| 燃料效率 | 高 | 中等 |
| 任务适用性 | 小型探测器、立方星 | 载人、货运、紧急任务 |

## 在低能转移中的角色

弹道捕获是弱稳定边界 Weak Stability Boundary 转移理论的核心实现手段 \cite{belbrunoWeakStabilityBoundary2010}。

WSB 理论由 Belbruno 在 1980 年代后期提出，他与 Miller 于 1993 年系统给出了利用太阳引力摄动实现地月弹道捕获的转移设计方法 \cite{belbrunoSunperturbedEarthtomoonTransfers1993}。具体过程：

1. 发射时瞄准月球前方某点（而非月球本身）
2. 利用太阳引力摄动和月球引力相互作用
3. 到达月球附近时自然进入月球捕获区
4. 进行少量机动（$\Delta V \sim 50-100$ m/s）进入目标轨道

日本月球探测器 Hiten 于 1991 年首个验证了 WSB 弹道捕获转移 \cite{griesemerAutomatedGenerationOptimization2009}。NASA 的 GRAIL 任务也采用了类似的低能转移策略。

## 优势与局限

### 优势

1. 燃料节省：弹道捕获的发射能量与直接转移相当，差距在数十米每秒内，主要节省出现在到达月球时的捕获制动环节，量级为数百米每秒 \cite{fuLowenergyEarthmoonTransfers2025}
2. 发射窗口放宽：虽然需要精确时机，但可通过预先规划选择最优窗口
3. 适合小卫星：对于 $\Delta V$ 预算紧张的小型探测器，弹道捕获提供了可行的转移方案 \cite{pengLowenergyTransfersLunar2024}

### 局限

1. 转移时间长：弹道捕获的转移时间通常为 1-3 个月，远长于直接转移，研究者因此发展了拼接三体模型下的快速弹道捕获转移方案 \cite{sousa-silvaFastEarthMoon2018}
2. 发射窗口窄：对发射时机的精度要求高，偏离最佳窗口会显著增加 $C_3$
3. 通信约束：长转移时间意味着航天器在途中会经历较长通信盲区
4. 任务调度：对于需要快速响应的任务（如载人任务），弹道捕获不适用

## 相关概念

弹道捕获的动力学基础涉及限制性三体问题 CR3BP 和弱稳定边界理论，后者在数学上表现为无穷多圈次环绕下由康托集族构成的分形边界 \cite{belbrunoCantorSetStructure2024}，月球影响球内的算法弱稳定边界关联集也已有系统的动力学表征 \cite{sousasilvaApplicabilityDynamicalCharacterization2012}。详见：

- [限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [弱稳定边界（WSB）](/glossary/)
