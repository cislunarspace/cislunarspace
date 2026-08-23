---
title: 非球形引力摄动（Non-Spherical Gravity Perturbation）
description: 天体实际引力场偏离均匀球体产生的附加加速度，用球谐函数级数 $\Phi = -\frac{\mu}{r}\sum_{\ell=0}^{\infty}\sum_{m=0}^{\ell}\left(\frac{R_e}{r}\right)^\ell P_{\ell m}(\sin\phi)[C_{\ell m}\cos m\lambda + S_{\ell m}\sin m\lambda]$ 描述。覆盖带谐/田谐/扇谐分类、J2 主导项、地球与月球引力场差异（mascon）、地月空间不同轨道区的量级判断与选模。
keywords: 非球形引力摄动, 非球形引力, 非球形引力项, 非球形月球引力, 球谐函数展开, 球谐函数模型, 球谐引力, 地球扁率, 地球扁率摄动, 地球扁率修正, J2, J2 项, J2 项摄动, 质量瘤, mascon, 带谐, 田谐, 扇谐
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 非球形引力摄动（Non-Spherical Gravity Perturbation）
  desc: 球谐函数展开、J2 主导项、地球与月球引力场：非球形引力摄动完整解析。
  image: /logo.png
og:
  title: 非球形引力摄动（Non-Spherical Gravity Perturbation）详解 | 术语定义
  description: 天体实际引力场偏离均匀球体产生的附加加速度，用球谐函数级数描述。覆盖带谐/田谐/扇谐分类、J2 主导项、地球与月球引力场差异（mascon）、地月空间不同轨道区的量级判断与选模。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 非球形引力摄动（Non-Spherical Gravity Perturbation）详解 | 术语定义
  description: 天体实际引力场偏离均匀球体产生的附加加速度，用球谐函数级数描述。覆盖带谐/田谐/扇谐分类、J2 主导项、地球与月球引力场差异（mascon）、地月空间不同轨道区的量级判断与选模。
  image: /logo.png
permalink: /glossary/dynamics/non-spherical-gravity-perturbation/
---

# 非球形引力摄动（Non-Spherical Gravity Perturbation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

非球形引力摄动（non-spherical gravity perturbation，又称非球形摄动、aspherical gravity perturbation）是天体实际引力场偏离理想均匀球体所产生的附加引力加速度。均匀球体的引力可等效为质点引力（Newton 二体问题）；但真实天体因自转、内部质量分布不均，几何形状与质量分布都偏离球对称，由此产生的引力差异就是非球形摄动。

它是保守摄动，可用引力势函数 $U$ 的梯度表达 $\mathbf{a} = \nabla U$，并通过**球谐函数展开**（spherical harmonic expansion）来建模（Vallado 2022, Ch. 8.6.1）：

$$
U(r, \phi, \lambda) = \frac{\mu}{r} \sum_{\ell=0}^{\infty} \sum_{m=0}^{\ell} \left(\frac{R_e}{r}\right)^{\ell} P_{\ell m}(\sin\phi) \left[ C_{\ell m} \cos m\lambda + S_{\ell m} \sin m\lambda \right]
$$

其中 $r$ 为到天体质心的距离，$\phi$ 为地心纬度，$\lambda$ 为经度，$R_e$ 为参考赤道半径，$P_{\ell m}$ 为缔合 Legendre 多项式，$C_{\ell m}$ 和 $S_{\ell m}$ 为无量纲球谐系数。$\ell = 0$ 项即二体引力；$\ell \geq 1$ 的项构成非球形部分（摄动）。习惯上将 $\ell = 2, m = 0$ 项写为 $J_2 = -C_{2,0}$，符号取正号表示扁率。

## 球谐项的分类

按 $(\ell, m)$ 的组合，球谐项分为三类（Vallado 2022, Ch. 8.6.1）：

- **带谐项**（zonal harmonics, $m = 0$）：仅与纬度有关，与经度无关，在球面上呈纬度带分布。$J_2$ 是带谐项之一，反映赤道隆起（扁率）；$J_3$ 反映南北不对称（梨形）；$J_4, J_5, \dots$ 描述更高阶的纬度结构。

- **田谐项**（tesseral harmonics, $m \neq 0$ 且 $\ell \neq m$）：在球面上呈棋盘格分布，与经纬度都有关。地球高阶田谐项反映大陆/海洋等大尺度质量异常。

- **扇谐项**（sectoral harmonics, $\ell = m$）：仅与经度有关，在球面上呈经度扇分布。

## J2 项：主导的扁率摄动

$J_2$（Earth oblateness, $J_2 \approx 1.0826 \times 10^{-3}$）是非球形引力场中最大的项，描述地球赤道隆起（极半径比赤道半径短约 21 km）。它对近地轨道产生两个关键的长期效应（Vallado 2022, Ch. 9.6.1）：

$$
\dot{\Omega} = -\frac{3}{2} J_2 \frac{R_e^2}{a^2(1-e^2)^2} n \cos i \quad \text{（升交点赤经进动，即"回归"）}
$$

$$
\dot{\omega} = \frac{3}{2} J_2 \frac{R_e^2}{a^2(1-e^2)^2} n \left(2 - \frac{5}{2}\sin^2 i\right) \quad \text{（近地点幅角进动）}
$$

工程应用：

- **太阳同步轨道**（Sun-Synchronous Orbit, SSO）：选择 $\dot{\Omega} \approx 0.9856^{\circ}/\text{day}$（地球公转角速度）的倾角（约 98°），使轨道面与太阳方向保持固定夹角。

- **临界倾角轨道**（Critical Inclination Orbit）：取 $i = 63.4^{\circ}$ 或 $116.6^{\circ}$，使 $\dot{\omega} = 0$，近地点固定在某一方向（Molniya 轨道即此原理）。

需要指出，对于地月平动点轨道（halo、NRHO、DRO 等），$J_2$ 影响相对很小：这些轨道本质上由三体引力主导，地球扁率引起的相对运动偏差通常仅毫米量级，在多数分析中可忽略。

## 地球非球形引力场

地球引力场模型（EGM96、EGM2008、JGM-3、GGM series）通过卫星测高、卫星激光测距（SLR）、重力测量（GOCE、GRACE）联合求解，最高展开至 $\ell_{max} = 2190$。在轨道力学中通常用 70×70（LEO 高精度）或 5×5（地月空间）就足够（Vallado 2022, Ch. 8.6.1；Framework paper, 2023）。

参考椭球参数：

- WGS-84 赤道半径 $R_e = 6\,378\,137$ m；

- 扁率倒数 $1/f = 298.257\,223\,563$；

- $J_2 = 1.082\,63 \times 10^{-3}$；

- 前几阶带谐系数：$J_3 \approx -2.532 \times 10^{-6}$，$J_4 \approx -1.620 \times 10^{-6}$。

## 月球非球形引力场

月球引力场与地球显著不同，呈现以下特点（Vallado 2022, Ch. 8.6.1；Folta et al. 2010；LP-150Q 模型）：

- **远端未知**：由于潮汐锁定，月球始终以一面朝向地球，远端引力场早期只能靠 Apollo 残差间接估计；GRAIL 任务（2012）才大幅改善。

- **质量瘤**（mascon, mass concentration）：月球表面大型撞击盆地（如雨海、澄海、危海）下方存在大质量异常，使低轨卫星在这些区域受到显著的重力异常。GRAIL 之后的模型（GRGM-1200A 等）展开了至 1200 阶。

- **撞击盆地的正异常 + 撞击坑的负异常**：盆地下方为正向 mascon，小撞击坑常呈中央峰 + 负异常环结构。

- **整体形状更不规则**：月球没有大气、海洋和板块运动的圆化机制，引力场粗糙度高。

工程影响：月球低轨（LLO）卫星的轨道寿命受 mascon 显著影响，许多 LLO 轨道在数日内因 mascon 摄动而崩塌，这是选择 DRO/NRHO 作为长期轨道的重要原因之一。

## 模型选择（地月空间）

按轨道区选模（Vallado 2022, Ch. 8；Framework paper, 2023）：

| 轨道 | 地球引力场阶次 | 月球引力场阶次 |
|------|---------------|---------------|
| LEO 高精度定轨 | 70×70 或更高 | 不需要 |
| GEO / MEO | 8×8 ~ 20×20 | 不需要 |
| 地月转移（高保真） | 8×8 ~ 20×20 | 20×20 ~ 50×50 |
| 地月空间碎片定轨 | 5×5 | 可选（带点质量近似） |
| 月球低轨（LLO） | 不需要 | 50×50 或更高 |
| 地月平动点 | 4×4 | 4×4 |

球谐函数展开在月球远端和极区收敛性差，对 LLO 精密定轨常改用**点质量模型**（point-mass model）作为补充。

## 相关概念

- [轨道摄动](/glossary/fundamentals/orbital-perturbations/)

- [大气阻力摄动](/glossary/dynamics/atmospheric-drag/)

- [太阳辐射压摄动（SRP）](/glossary/dynamics/srp/)

- [地球引力场模型](/glossary/fundamentals/gravity-field-model/)

- [月球引力场模型](/glossary/fundamentals/gravity-field-model/)

- [月球引力场](/glossary/fundamentals/gravity-field-model/)

- [引力场模型](/glossary/fundamentals/gravity-field-model/)

- [Adams-Cowell 积分器](/glossary/dynamics/adams-cowell-integrator/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献

- Vallado, 2022, Fundamentals of Astrodynamics and Applications（Ch. 8.6.1 Gravity Field of a Central Body：球谐函数展开推导、带谐/田谐/扇谐分类、J2 项；Ch. 9.6.1：J2 长期效应公式；Ch. 8.6.3：月球引力场的特殊性）

- A model framework for high-accuracy orbit determination and propagation of cislunar space debris, 2023（地月空间碎片定轨：地球 5×5 球谐 + 月球点质量的实践依据）

- 彭祺擘、张海联, 2016, 载人登月地月转移轨道方案综述（地月转移轨道力学模型配置）

- Folta et al., 2010, Earth-Moon libration point orbit stationkeeping（$J_2$ 对地月平动点轨道的微小影响）
