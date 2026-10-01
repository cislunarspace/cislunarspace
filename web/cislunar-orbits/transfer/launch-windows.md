---
title: 发射窗口分析
description: 地月转移发射窗口的形成机制、窗口频率、偏离代价与规划工具介绍。
wechatShare:
  title: 发射窗口分析
  desc: 地月转移发射窗口的形成机制、窗口频率、偏离代价与规划工具介绍。
  image: /logo.png
keywords: 发射窗口, 窗口频率, C3变化, ΔV惩罚, GMAT, STK
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-10-01
permalink: /cislunar-orbits/transfer/launch-windows/
---

> 本文作者：天疆说
>
> 本文编辑来源：[CislunarSpace](https://cislunarspace.cn)
>
> 来源：<https://cislunarspace.cn>

# 发射窗口分析

## 发射窗口形成机制

地月转移的发射窗口由**地月几何周期**决定，根本原因是地球自转周期（月球绕地公转周期为 27.3 天，但考虑到地球公转，实际月相周期为 29.5 天）。

### 关键几何参数

1. **月球相位角**：月球与太阳的相对位置，决定了月相（新月、上弦月、满月等）
2. **发射方向**：地球自转使发射点相对于月球方向每天变化约 $12^\circ$（$360^\circ/30$ 天）
3. **地月距离**：月球近地点/远地点影响转移能量

### 发射窗口形成的物理机制

当由地球自转确定的发射方向与月球公转方向和位置达到特定几何关系时，从 LEO 出发的航天器可以最省燃料地到达月球。满足这一几何关系的时机即为 TLI 发射窗口 \cite{BaiYuZhuRuanZhaoYueRenWuChuangKouYuGuiDaoSheJiFangFaYanJiu2009}。

## 窗口频率

典型的 TLI 发射窗口频率：

- **最佳窗口**：约每 14-15 天出现一次（半个朔望月）
- **次优窗口**：在两次最佳窗口之间也存在次优机会，但能量较高
- **错过窗口**：若错过发射窗口，通常需等待下一个 14-15 天周期

对于需要精确到达月球某处如月球背面特定经纬度的任务，窗口可能进一步收窄至每 28-30 天一次，自由返回等典型约束下的窗口存在性还可由快速判据预先论证 \cite{HeBoYongDianXingYueShuDeZaiRenDengYueZiYouFanHuiGuiDaoChuangKouCunZaiXingPanJu2022}。转移方式不同窗口结构也随之变化，月球低能返回轨道一类任务需要专门的窗口搜索策略 \cite{ZhangChenYiZhongYueQiuDiNengFanHuiGuiDaoRenWuChuangKouSouSuoCeLue2026}。

## 偏离最佳窗口的代价

若发射时机偏离最佳窗口，主要代价体现在：

### $C_3$ 增加

偏离最佳窗口会导致所需 $C_3$ 增加，典型增加量：

- 偏离 1 天：$C_3$ 增加约 $0.05-0.1$ km$^2$/s$^2$
- 偏离 3 天：$C_3$ 增加约 $0.2-0.3$ km$^2$/s$^2$

### $\Delta V$ 惩罚

$C_3$ 增加直接导致 TLI 机动所需 $\Delta V$ 增加：

- $C_3$ 每增加 $0.1$ km$^2$/s$^2$，$\Delta V$ 约增加 $50-100$ m/s

### 转移时间变化

偏离最佳窗口还可能导致转移时间延长或缩短，以及到达月球时的几何位置不利。工程上也可通过轨道设计放宽窗口约束，例如双星协同的低能转移优化能够在兼顾两类目标轨道的同时扩大可发射时段 \cite{WangYangXinYiJianShuangXingXieTongGuiDaoYouHuaDROLLODiNengZhuanYiSheJi2025}。

### GMAT

NASA 的 **General Mission Analysis Tool**（GMAT）是开源轨道设计工具，支持：

- TLI 发射窗口搜索与优化
- Pork-Chop 图生成
- 多目标优化（Pareto 前沿计算）

### STK

**Systems Tool Kit**（STK，AGI 公司）是专业轨道分析软件，提供：

- 高精度星历计算
- 发射窗口自动搜索
- 任务轨迹可视化

### 本地工具

爱好者也可使用开源工具如 **Firefly Aerospace** 的转移分析工具或 Python 库（如 `poliastro`）进行基础的窗口分析。
