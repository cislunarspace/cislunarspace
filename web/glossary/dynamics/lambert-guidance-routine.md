---
title: Lambert 制导例程（Lambert Guidance Routine）
description: 把 Lambert 问题的求解嵌入主动段实时闭环制导的算法：每个积分步解一次当前状态到目标点的 Lambert 问题得到所需速度，与当前速度之差作为推力方向指令，剩余速度增量归零时关机转入弹道飞行。覆盖速度待飞量 $v_G$、Lambert 计算平面、与开环 Lambert 转移、Q/显式制导的区别，以及末端速度匹配（Burns-Scherock 2004）等扩展。
keywords: Lambert 制导例程, Lambert Guidance Routine, Lambert 制导, Lambert guidance, 速度待飞量, velocity-to-be-gained, 闭环制导, 拦截制导, 助推段制导
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Lambert 制导例程（Lambert Guidance Routine）
  desc: 把 Lambert 问题嵌入实时闭环——助推段制导的经典算法。
  image: /logo.png
og:
  title: Lambert 制导例程（Lambert Guidance Routine）详解 | 术语定义
  description: 把 Lambert 问题的求解嵌入主动段实时闭环制导的算法：每个积分步解一次当前状态到目标点的 Lambert 问题得到所需速度，与当前速度之差作为推力方向指令，剩余速度增量归零时关机转入弹道飞行。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lambert 制导例程（Lambert Guidance Routine）详解 | 术语定义
  description: 把 Lambert 问题的求解嵌入主动段实时闭环制导的算法：每个积分步解一次当前状态到目标点的 Lambert 问题得到所需速度，与当前速度之差作为推力方向指令，剩余速度增量归零时关机转入弹道飞行。
  image: /logo.png
permalink: /glossary/dynamics/lambert-guidance-routine/
---

# Lambert 制导例程（Lambert Guidance Routine）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Lambert 制导例程（Lambert Guidance Routine，LGR；亦简称 Lambert 制导）是一种把 [Lambert 问题](/glossary/fundamentals/lamberts-problem/) 的求解嵌入主动段（boost phase）实时闭环制导的算法。每个制导周期执行以下三步（Burns & Scherock 2004）：

1. 用当前状态 $(\vec r_M,\vec v_M)$ 与预定的目标点 $\vec r_2$、剩余飞行时间 $t_f$ 解一次 Lambert 问题，得到应当具备的速度 $\vec v_{\text{LAMBERT}}$；
2. 计算速度待飞量 $\vec v_G=\vec v_{\text{LAMBERT}}-\vec v_M$；
3. 命令推力沿 $\vec v_G$ 方向，当 $|\vec v_G|$ 小于阈值时关机，转入弹道飞行至目标。

这是一个**闭环**的迭代过程：每一步都基于当前实际状态重新解 Lambert，因此对扰动、风载、推力偏差具有自然的鲁棒性，无需预先设计一条精确的开环标称轨迹。

## Lambert 计算平面与坐标转换

$\vec r_1$（当前导弹/航天器位置）与 $\vec r_2$（目标点）唯一确定一个平面，称为 Lambert 计算平面。平面内用二维 Lambert 方程求出 $\vec v_{\text{LAMBERT}}^{(2D)}$，再通过两次绕 $Z$、绕 $Y'$ 的旋转和一次绕 $X''$ 的滚转，转换回 ECI 惯性系（Burns & Scherock 2004 附录）。这种二维求解 + 三维映射的写法避免了直接在三维里迭代。

转移角 $\theta_f$ 由两矢量点积给出：

$$
\cos\theta_f=\frac{\vec r_1\cdot\vec r_2}{|\vec r_1|\,|\vec r_2|}
$$

并定义无量纲能量参数 $\lambda=|\vec r_1|V^2/\mu$（两倍动能与势能之比）：$\lambda<2$ 为椭圆轨道，$\lambda=2$ 为抛物线，$\lambda>2$ 为双曲线。常见实现里用割线法迭代收敛 Lambert 方程，$\lambda$ 的允许范围被限制为椭圆。

## 与开环 Lambert 转移、其它制导的区别

- **与开环 Lambert 转移**（Lambert 轨道变轨）：开环用法是离线地解一次 Lambert 问题得到初始速度增量 $\Delta\vec v$，施加后弹道飞行，不做实时修正；LGR 是**每个制导周期都重解**，自动修正偏差。前者是轨道设计工具，后者是制导律。

- **与 Q 制导、显式制导（[显式制导律](/glossary/dynamics/explicit-guidance-law/)）**：Q 制导基于协态-增益矩阵；显式制导直接积分标称方程并要求满足终端约束。LGR 的特征是显式调用 Lambert 求解器作为应当具备的速度的计算模块。

- **与 Apollo 登月舱 P64 制导**：P64 是多项式 / Lambda 制导，**不是** Lambert 制导。中文文献里偶见阿波罗制导计算机最繁重的任务之一是 Lambert 制导的说法，是混淆，Apollo 的 Lambert 解算用于任务规划（地面），而非实时飞行制导。

- **与中途 Lambert 修正**：Lambert 解也用于中途轨道修正的参考脉冲计算（见 [多脉冲机动](/glossary/dynamics/two-impulse-rendezvous/)），那是离线脉冲设计，与 LGR 不同。

## 关键工程参数

- **预定到达时间 $T_A$ / 飞行时间 $t_f$**：决定轨道形状（高弹道 vs 低弹道）与末速匹配 $\Delta v$。$t_f$ 越长，弹道越高、末端速度越小，需要补的速度差越大；常用 Powell 法对 $t_f$（等价地、对发射延迟 $T_D$）寻优使末端 $\Delta v$ 最小（Burns & Scherock 2004）。

- **关机阈值**：$|\vec v_G|$ 低于阈值即停止主推力。过低则制导周期紧、对算法实时性要求高；过高则残差大。

- **大气层内的俯仰程序**：低空段使用固定的飞出俯仰角程序（fly-out flight-path angle schedule）抑制气动损耗，出大气后再切到纯 Lambert 指令。

- **目标位置偏置（White offset）**：补偿Lambert 假设瞬时燃烧、均匀重力场等近似带来的系统偏差，将制导目标人为偏置一个小量，使真实弹道落在期望点。

## 扩展：位置 + 速度双匹配

经典 LGR 只保证末端**位置**匹配。Burns-Scherock (2004) 在拦截弹场景中增加一个第四级短脉冲，使末端**速度**也与目标一致，位置 + 速度同时匹配后，拦截器沿目标弹道随飞。做法：

1. 第一轮用 LGR 制导到目标位置 $\vec R_T$，在最接近点估算 $\Delta\vec V$；
2. 把制导目标偏置到 $\vec R_{\text{offset}}=\vec R_T-\Delta\vec R$（$\Delta\vec R$ 为第四级脉冲引起的位置偏差）；
3. 第四级在距目标 $\Delta T$ 处沿 $\Delta\vec V$ 方向点火；
4. 因第二轮路径略变，$\Delta\vec V$ 需迭代收敛，通常 2-3 次即收敛。

## 应用要点

- **助推段拦截制导**：弹道导弹拦截器、战略靶弹的标准制导模式。

- **运载器入轨**：固定时间到达入轨点的助推制导。

- **上升段拦截/交会**：从地面/亚轨道起飞到达空间指定点的实时制导。

- **不能直接控制末端速度**：经典 LGR 只控位置，速度匹配需附加脉冲。

## 相关概念

- [兰伯特问题（Lambert's Problem）](/glossary/fundamentals/lamberts-problem/)

- [显式制导律（Explicit Guidance Law）](/glossary/dynamics/explicit-guidance-law/)

- [多脉冲机动（Multi-Impulse Maneuver）](/glossary/dynamics/two-impulse-rendezvous/)

- [双脉冲轨道转移（Double-Pulse Orbit Transfer）](/glossary/dynamics/cislunar-transfer-design-elements/)

## 参考文献

- Burns 和 Scherock, 2004, Lambert Guidance Routine Designed to Match Position and Velocity of Ballistic Target（LGR 原理、三维扩展、位置+速度双匹配的第四级方案）

- Joonhyung Park 等, 2000, Miss Analysis in Lambert Interceptions with Application to a New Guidance Law（Lambert 拦截的脱靶量分析）
