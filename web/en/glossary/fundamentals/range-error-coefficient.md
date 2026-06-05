---
title: Range Error Coefficient
description: Definition, classification, expressions, and application of range error coefficients in ballistic missile accuracy analysis
keywords: Range Error Coefficient, Downrange Error, Cross-range Error, Flight Time Error, Impact Point Deviation
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Range Error Coefficient
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Range Error Coefficient | Terminology Definition
  description: Definition and application of range error coefficients in accuracy analysis
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Range Error Coefficient | Terminology Definition
  description: Definition and application of range error coefficients in accuracy analysis
  image: /logo.png
permalink: /en/glossary/fundamentals/range-error-coefficient/
---

# Range Error Coefficient

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Range error coefficients are the partial derivatives of the passive-phase range angle $\beta_{kc}$ with respect to the burnout parameters $v_k$, $\Theta_k$, and $r_k$. They describe the range deviation caused by a unit deviation in each burnout parameter. Neglecting higher-order terms, the passive-phase range deviation can be expressed as:

$$\Delta\beta_{kc} = \frac{\partial\beta_{kc}}{\partial v_k}\Delta v_k + \frac{\partial\beta_{kc}}{\partial\Theta_k}\Delta\Theta_k + \frac{\partial\beta_{kc}}{\partial r_k}\Delta r_k$$

## Core Elements

### Error Coefficient Types

| Type | Symbol | Meaning |
|:---|:---|:---|
| Downrange error coefficient | $\partial\beta_{kc}/\partial v_k$ | Range deviation due to velocity magnitude error |
| Downrange error coefficient | $\partial\beta_{kc}/\partial\Theta_k$ | Range deviation due to flight-path angle error |
| Downrange error coefficient | $\partial\beta_{kc}/\partial r_k$ | Range deviation due to geocentric distance error |
| Cross-range error coefficient | $\partial\zeta_c/\partial\alpha_k$ | Lateral deviation due to azimuth error |
| Cross-range error coefficient | $\partial\zeta_c/\partial\zeta_k$ | Lateral deviation due to lateral position error |
| Flight time error coefficient | $\partial T_{kc}/\partial v_k$ | Time deviation due to velocity error |

### First-Order Downrange Error Coefficients

Explicit expressions for the free-flight phase range error coefficients:

$$\frac{\partial\beta_{ke}}{\partial v_k} = \frac{4}{v_k\gamma_k} \cdot \frac{1+\tan^2\Theta_k}{\tan\Theta_k} \cdot \sin^2\frac{\beta_{ke}}{2}$$

$$\frac{\partial\beta_{ke}}{\partial\Theta_k} = \frac{1}{\gamma_k} \cdot \frac{(1+\tan^2\Theta_k)(\gamma_k - 2\tan\frac{\beta_{ke}}{2}\tan\Theta_k)}{\tan\Theta_k} \cdot \sin\beta_{ke}$$

### Cross-Range Error Coefficients

Lateral deviation is caused jointly by velocity azimuth error and lateral position deviation:

$$\Delta\zeta_c = \frac{\partial\zeta_c}{\partial\alpha_k}\Delta\alpha_k + \frac{\partial\zeta_c}{\partial\zeta_k}\Delta\zeta_k$$

where:

$$\frac{\partial\zeta_c}{\partial\alpha_k} = \sin\beta_{kc}, \quad \frac{\partial\zeta_c}{\partial\zeta_k} = \cos\beta_{kc} - \tan\Theta_k\sin\beta_{kc}$$

### Properties of Error Coefficients

| Property | Description |
|:---|:---|
| Optimal flight-path angle | $\partial\beta_{ke}/\partial\Theta_k = 0$; flight-path angle error causes no range deviation |
| Velocity magnitude coefficient | The larger $\gamma_k$, the larger $\partial L_{ke}/\partial v_k$ |
| Second-order errors | For long-range missiles, second-order error coefficients cannot be neglected |

### Cartesian Coordinate Representation

Error coefficients can be expressed in a Cartesian coordinate system (launch inertial frame). Through coordinate transformation matrices, polar error coefficients are converted to Cartesian error coefficients, facilitating integration with guidance system instrument error models.

## Application Value

Range error coefficients are the core tool for ballistic missile accuracy analysis and guidance system design. Through error coefficients, one can quantitatively evaluate the impact of burnout parameter deviations on impact point accuracy, providing theoretical foundations for guidance method design, instrument error allocation, and firing accuracy assessment. Selecting the optimal flight-path angle eliminates the flight-path angle error coefficient, thereby improving firing accuracy.

## Related Concepts

- [Hit Equation](/en/glossary/fundamentals/hit-equation/)

## References

- Zheng Wei, An Xueying, Zhou Xiang, He Ruizhi. Aerospace Flight Mechanics (空天飞行力学)[M]. National University of Defense Technology, 2026.
- Jia Peiran, Chen Kejun, et al. Long-Range Rocket Ballistics (远程火箭弹道学)[M]. National University of Defense Technology Press.
