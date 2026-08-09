---
title: 太阳辐射压摄动（Solar Radiation Pressure, SRP）
description: 太阳光子与航天器表面动量交换产生的非保守摄动，加速度 $\mathbf{a}_{srp} = -P_{\odot} (A/m) (1+C_R) \hat{\mathbf{r}}_{\odot}$（炮弹模型），是 GEO 以上、地月空间长期轨道演化的关键摄动源。覆盖光压物理常数、炮弹与面板模型对比、地影效应、COLIBRI 历史案例、太阳帆人工平动点轨道以及与大气阻力的线性叠加关系。
keywords: 太阳辐射压, 太阳光压, Solar Radiation Pressure, SRP, 炮弹模型, 反射系数, 地影模型, 太阳帆人工平动点, COLIBRI, 轨道保持
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 太阳辐射压摄动（Solar Radiation Pressure, SRP）
  desc: 光压原理、炮弹/面板模型、地影效应与地月空间工程应用。
  image: /logo.png
og:
  title: 太阳辐射压摄动（SRP）详解 | 术语定义
  description: 太阳光子与航天器表面动量交换产生的非保守摄动，炮弹模型加速度 $\mathbf{a}_{srp} = -P_{\odot} (A/m) (1+C_R) \hat{\mathbf{r}}_{\odot}$，是 GEO 以上、地月空间长期轨道演化的关键摄动源。覆盖光压常数、模型对比、地影效应与太阳帆工平。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 太阳辐射压摄动（SRP）详解 | 术语定义
  description: 太阳光子与航天器表面动量交换产生的非保守摄动，炮弹模型加速度 $\mathbf{a}_{srp} = -P_{\odot} (A/m) (1+C_R) \hat{\mathbf{r}}_{\odot}$，是 GEO 以上、地月空间长期轨道演化的关键摄动源。覆盖光压常数、模型对比、地影效应与太阳帆工平。
  image: /logo.png
permalink: /glossary/dynamics/srp/
---

# 太阳辐射压摄动（Solar Radiation Pressure, SRP）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

太阳辐射压摄动（Solar Radiation Pressure，SRP，又称太阳光压摄动）是太阳光子流与航天器表面碰撞产生动量交换所造成的非保守摄动力。它与大气阻力同属非保守摄动（耗散能量），直接以摄动力形式建模。在 GEO 以上高度和地月空间，大气阻力已消失或很微弱，SRP 上升为最主要的非引力摄动（Vallado 2022, Ch. 8.6.4）。

**简易炮弹模型**（cannonball model）——将卫星视为均匀球体，反射各向同性——写出的加速度为（Vallado 2022, Eq. 8-44）：

$$
\mathbf{a}_{srp} = -\frac{P_{\odot} A_{\odot}}{m} (1 + C_R) \hat{\mathbf{r}}_{sat\odot}
$$

其中 $P_{\odot}$ 为 1 AU 处的太阳辐射压常数（约 $4.534 \times 10^{-6}$ N/m$^2$ = $4.534$ μPa，Vallado 2022, Eq. 8-42a），$A_{\odot}$ 为航天器面向太阳的截面积，$m$ 为质量，$C_R$ 为反射系数（$C_R = 0$ 全吸收，$1$ 全反射；典型取 1.0–1.5），$\hat{\mathbf{r}}_{sat\odot}$ 为卫星到太阳的单位矢量。

> Vallado (2022, Ch. 8.6.4) 将光压常数记为 $p_{srp}$，物理值历代有微小变动：1960 年代采用 $4.51 \times 10^{-6}$ N/m$^2$，Wertz (1978) 取 $4.56 \times 10^{-6}$ N/m$^2$，Vallado 给出 $4.534 \times 10^{-6}$ N/m$^2$。精度要求不高时取 $4.5 \times 10^{-6}$ N/m$^2$ 即可。

## 与大气阻力的对比

| 特性 | 大气阻力 | 太阳辐射压（SRP） |
|------|---------|-----------------|
| 物理本质 | 气体分子碰撞 | 光子碰撞/反射 |
| 速度依赖 | $\propto v^2$ | 与自身速度无关 |
| 方向 | 与速度反向 | 近似沿日-星矢量方向 |
| 能量 | 耗散（减速） | 净能量变化方向不定（取决于反射特性） |
| 主导区域 | LEO (<800 km) | GEO 及以上 |
| 地影 | 无关 | 影区压力消失 |

Vallado (2022) 指出，太阳活动极盛时的高密度太阳风所传递的光子流，会在高轨（GEO 以上）产生与阻力同量级的摄动加速度——这是很多人直觉不到的。

## 反射系数与复杂表面模型

炮弹模型的局限性在于"反射各向同性"和"方向仅沿日-星连线"两条假设——对真实卫星不够。**多面板模型**（panel model，如 ROCK4、ROCK42，Fliegel et al., 1992）将卫星表面分解为多个平板，每个面板按自身法向 $\hat{n}$ 分别计算入射太阳光压，最终合力：

$$
\hat{\mathbf{a}}_{srp} = -\sum_{i=1}^{N} \frac{P_{\odot} A_i \cos(\phi_i)}{m} \left[ 2\left( \frac{C_{R_d}}{3} + C_{R_s} \cos\phi_i \right) \hat{n}_i + (1 - C_{R_s}) \hat{s} \right]
$$

其中 $\phi_i$ 为面板法向 $\hat{n}_i$ 与太阳方向 $\hat{s}$ 的夹角，$C_{R_d}$ 和 $C_{R_s}$ 分别为漫反射系数和镜面反射系数。ROCK 模型通过傅里叶级数近似全模型结果以提速，广泛用于 GPS 卫星精密定轨。

## 地影效应（Eclipse）

地影效应使航天器进入阴影区时光压中断，产生轨道动力学的间歇性跳变。处理方式从简单到复杂：

- **圆柱形地影**：将地球当作单一圆盘，进入/退出以二值开关函数处理——简单，但忽略了半影区（penumbra）的渐变过渡。

- **锥形地影**（umbra/penumbra 模型）：地球非点光源，有半影过渡带，由日光被部分遮断到全遮断有一个平滑变化，对高精度定轨有必要（Vallado 2022, Ch. 3.10）。

- **椭圆地影**和**月亮地影**：对月球轨道特别重要——月球卫星可能经过月影（月食）、也可能被地影遮断太阳光。

有地影时，炮弹加速度需乘以"被照比例因子" $\nu$（0 为全影，1 为全光照，半影区介于 0~1）。

## 太阳辐射压轨道保持

太阳光压对 GEO 和地平动点轨道的长期累积漂移不可忽略——不加修正时，长期轨道外推可在数月后偏至数公里量级。**太阳辐射压轨道保持**（SRP station-keeping）技术分为"被动"和"主动"（Vallado 2022, Ch. 11.3）：

- **被动**：通过选择适当的姿态剖面（如"帆船模式"），让光压力部分"对消"其他摄动，不耗燃料但仅适用于对称性好的轨道。

- **主动**：通过小推力（通常电推进）定期作"太阳面修正"（Sun-face correction），消除 SRP 引起的离面漂移。GEO 卫星的站保持机动通常将 SRP 效应与东西/南北位置误差统一规划。

在高轨任务设计（GEO、地月平动点）中，SRP 常采用"在轨平均 + 长期修正"的处理策略——与轨道分析中的半解析摄动法有相通之处。

## 太阳帆——SRP 的主动利用

SRP 不光是被消除的"扰动力"，也可通过**太阳帆**（solar sail）主动利用。太阳帆是利用大面积薄膜反射太阳光子来产生持续推力的无工质推进系统——它不是摄动源，而是推进装置（Vallado 2022, Ch. 8.6.4）。通过在平动点附近主动调节反射面的方向，太阳帆可在天然平动点之外构造**人工平动点**（artificial libration point），扩大轨道选择的自由度（Gómez et al., 2001）。太阳帆推进在日地 $L_1$ 处的"北极视点"任务概念中有天然优势。

但从术语归属上看，**太阳帆人工平动点轨道**和**太阳帆推进**属于推进/轨迹类而非摄动类，不应归入本族。

## SRP 在地月空间的实际量级

以 cislunar 碎片定轨的实践为依据（Framework paper, 2023），一个截面积 $A = 37.14$ m$^2$ 的助推级（如嫦娥二号上面级）取 $C_R = 1.2$，炮弹模型计算的 SRP 加速度约 $2 \times 10^{-7}$ m/s$^2$。相比月球在平动点附近的第三体摄动加速度（$\sim 10^{-4}$ m/s$^2$），SRP 小约三个量级——但它以"长期效应"累积（Casnova et al., 2015），加上碎片普遍存在翻滚（方向不定、$C_R$ 波动），在数月以上的长期预报中成为不可忽略的误差源。

在定轨中，$C_R$ 是常估计参数，但窗口太短（<4 个月）时容易过拟合导出不合理值（如 $C_R \approx 14$ 或 $-0.9$）；同时估计 $C_R$ 和地面站偏差项可改善样本外预报性能（Framework paper, 2023）。

## 相关概念

- [轨道摄动](/glossary/fundamentals/orbital-perturbations/)

- [非球形引力摄动](/glossary/dynamics/non-spherical-gravity-perturbation/)

- [大气阻力摄动](/glossary/dynamics/atmospheric-drag/)

- [平动点](/glossary/fundamentals/libration-point/)

- [限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献

- Vallado, 2022, Fundamentals of Astrodynamics and Applications（Ch. 8.6.4 Solar-Radiation Pressure—光压常数、炮弹模型、面板模型公式；Ch. 8.6.5 Other Perturbations—光压与其他摄动源的分量对比）

- A model framework for high-accuracy orbit determination and propagation of cislunar space debris, 2023（地月空间碎片 $C_r$ 估计：窗口长度与过拟合，SRP 的量级与误差）

- Casanova et al., 2015, Long-term evolution of space debris under the J2 effect, the solar radiation pressure and the solar and lunar perturbations, Celest Mech Dyn Astr（SRP + J2 + 日月摄动的长期耦合效应）

- Fliegel et al., 1992, Global Positioning System radiation force model for geodetic applications, JGR（ROCK4/ROCK42 模型的面板-傅里叶近似法）

- Gómez et al., 2001, Dynamics and Mission Design near Libration Points, vols. I–III（太阳帆人工平动点概念）
