---
title: Gravity Field Model
description: A computable model that approximates a celestial body's non-spherical gravitational potential using truncated spherical harmonic expansion. Covers mathematical construction, common Earth models (EGM2008, GGM05C, WGS84) and lunar models (GRGM660PRIM, GL0660B, LP150Q, LP165P, LP100K), their data sources and typical truncations, and principles for choosing the degree in mission design.
keywords: gravity field model, spherical harmonic model, Earth gravity field model, lunar gravity field model, EGM2008, GGM05C, GRGM660PRIM, GL0660B, LP150Q, LP165P, LP100K, truncation degree, perturbation model
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Gravity Field Model
  desc: A computable model that approximates a celestial body's non-spherical gravitational potential using truncated spherical harmonic expansion.
  image: /logo.png
og:
  title: "Gravity Field Model Explained | Terminology"
  description: A computable model that approximates a celestial body's non-spherical gravitational potential using truncated spherical harmonic expansion. Covers Earth and lunar models, data sources, and degree selection for mission design.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Gravity Field Model Explained | Terminology"
  description: A computable model using truncated spherical harmonic expansion. Covers Earth and lunar models, and degree selection for mission design.
  image: /logo.png
permalink: /en/glossary/fundamentals/gravity-field-model/
---

# Gravity Field Model

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A gravity field model is a computational model that approximates a celestial body's gravitational potential using a set of numerical parameters, most commonly a truncated spherical harmonic expansion:

$$U(r,\phi,\lambda) = \frac{\mu}{r} \left[ 1 + \sum_{\ell=2}^{N} \sum_{m=0}^{\ell} \left(\frac{R}{r}\right)^{\!\ell} \bar{P}_{\ell m}(\sin\phi) \bigl( \bar{C}_{\ell m} \cos m\lambda + \bar{S}_{\ell m} \sin m\lambda \bigr) \right]$$

where $N$ is the truncation degree and $\bar{C}_{\ell m}$, $\bar{S}_{\ell m}$ is a published set of Stokes coefficients, with $R$ being the reference radius. The coefficients are typically recovered from satellite tracking data, GNSS, satellite altimetry, lunar laser ranging, or dedicated gravity missions (GRACE, GOCE, GRAIL) (Yin et al. 2024). Once published, users simply read the coefficients to recover the corresponding gravitational acceleration in an orbit integrator.

A gravity field model can be understood as the discrete, engineering-ready implementation of the mathematical concept of "gravitational potential." Multiple model versions exist for the same body, differing primarily in observational data, solution strategies, and truncation degree.

## Common Earth Gravity Field Models

| Model | Data Source | Typical Degree | Primary Use |
| :--- | :--- | :--- | :--- |
| **EGM2008** | Ground gravity, satellite altimetry, GRACE | Full 2190; missions commonly use 50×50 or 70×70 truncation | Global static high-resolution Earth gravity field, precision orbit determination, geoid |
| **GGM05C** | GRACE and GOCE combined | 180 (commonly truncated to 20×20 in missions) | Medium/low Earth orbit satellite prediction |
| **WGS84 EGM96/EGM2008 companion** | GPS tracking and gravity data | Commonly 8×8, 36×36 truncations | Navigation, general orbital mechanics |

EGM2008 is one of the most widely used static Earth gravity field models, with its full version containing 2190-degree spherical harmonic coefficients. Engineering missions rarely use the full degree: for Earth-Moon transfers and near-Earth segments where only $\sim 10^{-3}\ \text{m/s}^2$ orbital perturbations matter, 50×50 or 70×70 truncation usually suffices; higher degrees are required for low-Earth precision orbit determination.

## Common Lunar Gravity Field Models

| Model | Data Source | Typical Degree | Primary Use |
| :--- | :--- | :--- | :--- |
| **GRGM660PRIM** | GRAIL primary mission data | 660 | Current highest-accuracy static lunar gravity model, high-fidelity orbital dynamics |
| **GL0660B** | GRAIL | 660 | One GRAIL-derived version; engineering commonly uses lower truncation |
| **LP150Q** | Lunar Prospector | 150 | Lunar vicinity orbit analysis and transfer design |
| **LP165P** | Lunar Prospector | 165 | Lunar orbit computation |
| **LP100K** | Lunar Prospector | 100 | Low lunar orbit segment prediction |

The lunar gravity field is more irregular than Earth's: the presence of significant mascons on the lunar near side causes high-degree harmonic coefficients to decay more slowly. Degree selection for lunar models is more sensitive than for Earth — for low lunar orbits (50–100 km altitude), insufficient truncation degree will underestimate the long-term drift and decay of the orbital plane (Trofimov et al. 2020).

## Engineering Principles for Degree Selection

A higher truncation degree $N$ is not always better. Selection criteria typically include (Vallado 2022):

1. **Orbit altitude and perturbation scale.** Near-surface or low lunar orbits are more affected by high-degree terms, requiring higher $N$; farther from the central body, the $(R/r)^\ell$ factor decays more rapidly, so lower-degree models suffice.
2. **Mission accuracy requirements.** Rough transfer design may use 8×8; precision orbit determination and low-energy Earth-Moon transfers commonly require 50×50 to 150×150; only global geodesy needs $N > 200$.
3. **Computational cost and real-time constraints.** For each increase in degree, the Legendre function computation per integration step grows as $O(N^2)$. On-board autonomous navigation and Monte Carlo campaigns must balance accuracy with efficiency.
4. **Model consistency.** Different mission segments (e.g., geocentric, lunar capture, libration point) may use different degrees or even different celestial body models; consistency of reference frame, reference radius, and normalization convention must be ensured during transitions.

## Relationship to Other Models

- **Simplified force model**: Retains only central-body gravity $-\mu/r^2$ and optionally $J_2$, used for preliminary analytical analysis and rapid search.

- **High-fidelity force model**: In addition to high-degree gravity, superimposes third-body perturbations, solar radiation pressure, atmospheric drag, etc.

- **Polyhedral / mascon methods**: When the target body is highly irregular (asteroids, comets), spherical harmonic expansion may diverge near the body surface; in such cases, polyhedral or mascon models are used instead (Yin et al. 2024).

## Related Concepts

- [Gravitational Potential](/en/glossary/fundamentals/gravitational-potential/)

- [Gravity Gradient Matrix](/en/glossary/fundamentals/gravity-gradient-matrix/)

- [J2 Perturbation](/en/glossary/dynamics/non-spherical-gravity-perturbation/)

- [Third-Body Perturbation](/en/glossary/dynamics/third-body-perturbation/)

- [Non-Spherical Gravitational Potential](/en/glossary/fundamentals/gravitational-potential/)

## References

- Vallado, D. A., 2022, *Fundamentals of Astrodynamics and Applications*, 5th ed., Microcosm Press. Ch. 8.6.1 — Mathematical foundation of gravity field modeling and normalization.

- Yin, Z., Zhang, K., Duan, Y., Liu, J., Mu, Q., 2024, Theoretical research progress of gravitational field modeling in Earth science and deep-space exploration, *Reviews of Geophysics and Planetary Physics*, 55(5): 501–512. — Systematic review of Earth and deep-space gravity field modeling theory and methods.

- Pavlis, N. K. et al., 2012, The development and evaluation of the Earth Gravitational Model 2008 (EGM2008), *Journal of Geophysical Research: Solid Earth*, 117(B4). — Source and accuracy of EGM2008.

- Konopliv, A. S. et al., 2013, The JPL lunar gravity field to spherical harmonic degree 660 from the GRAIL Primary Mission, *Journal of Geophysical Research: Planets*, 118(7): 1415–1434. — Theoretical basis of GRGM660PRIM and GL0660B.

- Trofimov, S. et al., 2020, Transfers from NRHOs to low-perilune orbits, *Acta Astronautica*, 167: 260–271. — Impact of irregular lunar gravity on low-perilune orbits.

- Zuber, M. T. et al., 2013, Gravity field of the Moon from the Gravity Recovery and Interior Laboratory (GRAIL) mission, *Science*, 339(6120): 668–671. — GRAIL mission and lunar gravity field models.
