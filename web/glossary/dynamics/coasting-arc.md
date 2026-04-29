---
title: 滑行弧（Coasting Arc）
description: 解析滑行弧的概念、在低推力轨道转移中的作用、以及通过效率参数实现工质-时间权衡的机制
keywords: 滑行弧, Coasting Arc, 推力弧, 低推力轨道转移, Q-law, 效率参数, 工质-时间权衡
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 滑行弧（Coasting Arc）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 滑行弧详解 | 低推力轨道控制策略
  description: 解析滑行弧的概念及其在低推力轨道转移中的工质-时间权衡作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 滑行弧详解 | 低推力轨道控制策略
  description: 解析滑行弧在低推力轨道转移中的作用
  image: /logo.png
permalink: /glossary/dynamics/coasting-arc/
---

# 滑行弧（Coasting Arc）

>本文编辑来源：胡敏, 肖金伟, 张天天, 陶雪峰 (2026) "面向中高轨小卫星批量部署的轨道转移飞行器任务规划"
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

滑行弧（Coasting Arc）是指在低推力轨道转移过程中，当推力效率低于设定阈值时，发动机关闭、航天器依靠惯性滑行的飞行段。

滑行弧与推力弧（Thrust Arc）共同构成低推力轨道转移的基本飞行模式。通过合理设置滑行弧的比例，可以在工质消耗和转移时间之间实现灵活权衡。

## 物理机制

### 推力效率判定

胡敏等（2026）定义的效率参数用于判定是否进入滑行弧：

**绝对效率参数：**
$$\eta_a = \frac{\min_{\alpha, \beta}(\dot{Q})}{\min_\theta(\min_{\alpha, \beta}(\dot{Q}))}$$

**相对效率参数：**
$$\eta_r = \frac{\min_{\alpha, \beta}(\dot{Q}) - \max_\theta(\min_{\alpha, \beta}(\dot{Q}))}{\min_\theta(\min_{\alpha, \beta}(\dot{Q})) - \max_\theta(\min_{\alpha, \beta}(\dot{Q}))}$$

### 滑行弧切换逻辑

推力开启或关闭的判断公式：

$$u = \begin{cases} [0, 0], & \eta_r \leq \eta_{rel} \text{ 或 } \eta_a \leq \eta_{abs} \\ T_{max}[\alpha^*, \beta^*], & \text{其他} \end{cases}$$

当相对效率或绝对效率低于设定阈值时，关闭发动机，进入滑行阶段。

## 工质-时间权衡

### 权衡机制

滑行弧机制的引入实现了工质与时间的解耦：

| 优化目标 | 效率阈值设置 | 滑行弧比例 | 特点 |
|:---|:---|:---|:---|
| 最小化时间 | $\eta_{rel}=0, \eta_{abs}=0$ | 无 | 全程最大推力 |
| 最小工质 | 较高阈值 | 多 | 以时间换工质 |
| 权衡模式 | 中等阈值 | 适中 | 工质-时间折中 |

### 仿真结果

胡敏等（2026）的仿真结果验证了滑行弧的权衡效果：

| 任务目标 | 工质质量(kg) | 转移时间(d) |
|:---|:---|:---|
| 最小化时间 | 96.49 | 32.87 |
| 最小工质 | 76.07 | 37.55 |
| 工质-时间权衡 | 85.12 | 35.87 |

工质节省约21%，时间增加约14%。

## 在批量部署中的价值

### 任务配置灵活性

滑行弧机制为批量部署任务提供了强大的配置灵活性：

- 可根据任务需求灵活选择优化目标
- 在工质预算受限情况下可通过增加滑行弧延长任务周期
- 多种权衡解为任务决策提供多样化选项

### Q-law控制器自适应

Q-law控制器能自动识别推力效率较低区间并关闭发动机：

- 实时计算当前状态的效率参数
- 自动在推力弧与滑行弧之间切换
- 无需人工干预即可实现自适应控制

### 滑行弧与质量阶跃

滑行弧策略与质量阶跃特性的结合：

- 在任务后期OTV质量较轻时，相同推力产生更大加速度
- 效率参数自动反映这一变化
- 系统性优化整个任务剖面的工质消耗

## 相关概念

- [Q-law控制律](/glossary/dynamics/q-law/)
- [批量部署（Batch Deployment）](/glossary/dynamics/batch-deployment/)
- [春分点轨道根数（Equinoctial Orbital Elements）](/glossary/dynamics/equinoctial-elements/)
- [质量阶跃（Mass Discontinuity）](/glossary/dynamics/mass-discontinuity/)
- [状态依赖旅行商问题（SDTSP）](/glossary/dynamics/state-dependent-tsp/)

## 参考文献

- 胡敏, 肖金伟, 张天天, 陶雪峰. 面向中高轨小卫星批量部署的轨道转移飞行器任务规划[J]. 航天器工程, 2026, 25(3): 634-646.
- Narayanaswamy S, Damaren C J. Equinoctial Lyapunov control law for low-thrust rendezvous[J]. Journal of Guidance, Control, and Dynamics, 2023, 46(4): 781-795.