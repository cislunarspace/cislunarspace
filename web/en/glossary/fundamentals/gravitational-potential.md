---
title: Gravitational Potential
description: Scalar potential function of a celestial body's gravitational field, whose gradient yields the gravitational acceleration vector. Covers point-mass potential, spherical harmonic expansion (zonal/sectoral/tesseral classification), normalization conventions, J notation, normal vs. disturbing potential, and comparative magnitudes of Earth and lunar potentials.
keywords: gravitational potential, gravity potential, spherical harmonics, zonal harmonics, tesseral harmonics, sectoral harmonics, J2, disturbing potential, normal potential, normalized Legendre functions, Stokes coefficients, gravity field
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Gravitational Potential
  desc: Scalar potential function of a celestial body's gravitational field, whose gradient yields the gravitational acceleration vector.
  image: /logo.png
og:
  title: "Gravitational Potential Explained | Terminology"
  description: Scalar potential function of a celestial body's gravitational field. Covers spherical harmonic expansion, zonal/sectoral/tesseral classification, J convention, normal vs. disturbing potential, and Earth-Lunar comparisons.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Gravitational Potential Explained | Terminology"
  description: Scalar potential function of a celestial body's gravitational field. Covers spherical harmonic expansion, zonal/sectoral/tesseral classification, and J convention.
  image: /logo.png
permalink: /en/glossary/fundamentals/gravitational-potential/
---

# Gravitational Potential

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Gravitational potential is a scalar potential function $U(\mathbf{r})$ that describes a celestial body's gravitational field. Its gradient gives the gravitational acceleration vector:

$$\mathbf{g}(\mathbf{r}) = \nabla U(\mathbf{r})$$

The gravitational potential provides a more compact mathematical description than the vector field — a single scalar function carries the complete information of the gravitational field (Vallado 2022). A spacecraft's potential energy $V$ relates to the gravitational potential via $U = -V/m$, with the potential energy referenced to zero at infinity.

**Point-mass potential.** When the central body is treated as a point mass or a homogeneous sphere, $U = \mu / r$, where $\mu = GM$ is the gravitational parameter and $r$ is the distance from the body's center of mass. This is the foundation of the two-body problem — applying $\nabla U$ yields Newton's gravitational acceleration $-\mu \,\hat{\mathbf{r}} / r^2$.

## Spherical Harmonic Expansion for Non-Spherical Potentials

Real celestial bodies are not homogeneous spheres; their uneven mass distribution and non-spherical shape cause actual gravity to deviate from the point-mass model. For a point $P(r, \phi, \lambda)$ in the exterior space ($r$ is distance from the body's center, $\phi$ is latitude, $\lambda$ is longitude), the gravitational potential can be expanded as a spherical harmonic series (Vallado 2022, Ch. 8.6; Yin et al. 2024):

$$U(r,\phi,\lambda) = \frac{\mu}{r} \left[ 1 + \sum_{\ell=2}^{\infty} \sum_{m=0}^{\ell} \left(\frac{R}{r}\right)^{\!\ell} \bar{P}_{\ell m}(\sin\phi) \bigl( \bar{C}_{\ell m} \cos m\lambda + \bar{S}_{\ell m} \sin m\lambda \bigr) \right]$$

where $R$ is the reference radius (for Earth, the equatorial radius $a_e$), $\bar{P}_{\ell m}$ are normalized associated Legendre functions, and $\bar{C}_{\ell m}$, $\bar{S}_{\ell m}$ are normalized spherical harmonic coefficients (Stokes coefficients). The coefficients encode the body's entire mass distribution — low-degree terms describe large-scale shape (oblateness, etc.), while high-degree terms capture local details. The expansion starts from $\ell = 2$ because $\ell = 0$ recovers the point-mass potential $\mu/r$, and $\ell = 1$ terms vanish when the coordinate origin is placed at the body's center of mass.

### Three Types of Spherical Harmonic Terms

Based on the relationship between order $m$ and degree $\ell$, spherical harmonic terms fall into three categories (Vallado 2022; Yin et al. 2024):

| Type | Condition | Geometric Characteristic | Physical Meaning |
| :--- | :--- | :--- | :--- |
| Zonal harmonics | $m = 0$ | Vary only with latitude, symmetric about the polar axis | Equatorial bulge ($J_2$), pear shape ($J_3$), and other global shapes |
| Sectoral harmonics | $\ell = m$ | Depend only on longitude, appear as "orange slices" | Longitudinal mass concentrations |
| Tesseral harmonics | $\ell \neq m \neq 0$ | Vary with both latitude and longitude, "checkerboard" pattern | Regional mass anomalies |

**J notation convention.** Zonal harmonics commonly use the notation $J_\ell$ instead of $C_{\ell,0}$, with the convention $J_\ell = -C_{\ell,0}$ (Vallado 2022, Eq. 8-20). Earth's $J_2 \approx 1.0826 \times 10^{-3}$ is the largest coefficient in absolute value — roughly 1000 times larger than the next largest coefficient $J_3$ — and dominates the non-spherical gravitational perturbation (causing orbital plane precession, perigee rotation, etc.).

**Normalization.** The raw coefficients $C_{\ell m}$ and $S_{\ell m}$ become extremely small as $\ell$ and $m$ increase, introducing round-off errors. Therefore, published models use normalized coefficients $\bar{C}_{\ell m}$, $\bar{S}_{\ell m}$:

$$\bar{C}_{\ell m} = \sqrt{\frac{(\ell+m)!}{(\ell-m)!\,k\,(2\ell+1)}} \; C_{\ell m}, \qquad k = \begin{cases} 1 & m=0 \\ 2 & m \neq 0 \end{cases}$$

The corresponding Legendre functions must be inversely normalized to maintain the product $\bar{C}_{\ell m} \bar{P}_{\ell m} = C_{\ell m} P_{\ell m}$ (Vallado 2022, Eq. 8-22).

### Normal and Disturbing Potential

In geodesy, the gravitational potential is decomposed into a reference part and a deviation part (Vallado 2022):

$$U = V + T$$

- **Normal potential $V$**: Gravitational potential produced by a rotationally symmetric ellipsoid (normal Earth), containing only even-degree zonal harmonics.

- **Disturbing potential $T$**: Difference between the true and normal potentials, $T = U - V$. The disturbing gravitational acceleration $\delta\mathbf{g} = \nabla T$ is on the order of $200\ \text{mgal}$ ($10^{-5}\ \text{m/s}^2$) and cannot be neglected in precision orbit determination or altimetry.

## Earth vs. Moon Comparison

| Property | Earth | Moon |
| :--- | :--- | :--- |
| $J_2$ magnitude | $\sim 1.08 \times 10^{-3}$ | $\sim 2.03 \times 10^{-4}$ |
| High-degree field irregularity | Relatively smooth | **Significantly more irregular** — near-side mascons, slower decay of high-degree coefficients |
| Impact on low orbits | $J_2$ dominates perturbations | High-degree terms ($\ell$ up to tens) still significantly affect orbits $<100\ \text{km}$ |
| Representative model | EGM2008 ( degree 2190) | GRGM660PRIM ( degree 660) |

The irregularity of the lunar gravity field is a critical constraint for cislunar mission design — below approximately 100 km altitude, gravitational irregularities make it difficult to maintain stable orbits with single impulses (Trofimov et al. 2020).

## Related Concepts

- [Gravity Field Model](/en/glossary/fundamentals/gravity-field-model/)

- [Gravity Gradient Matrix](/en/glossary/fundamentals/gravity-gradient-matrix/)

- [J2 Perturbation](/en/glossary/dynamics/non-spherical-gravity-perturbation/)

- [Third-Body Perturbation](/en/glossary/dynamics/third-body-perturbation/)

- [CR3BP](/en/glossary/dynamics/cr3bp/)

- [Libration Point](/en/glossary/fundamentals/libration-point/)

## References

- Vallado, D. A., 2022, *Fundamentals of Astrodynamics and Applications*, 5th ed., Microcosm Press. Ch. 8.6.1 — Complete derivation of spherical harmonic expansion, normalization conventions, J notation, and three-way harmonic classification.

- Yin, Z., Zhang, K., Duan, Y., Liu, J., Mu, Q., 2024, Theoretical research progress of gravitational field modeling in Earth science and deep-space exploration, *Reviews of Geophysics and Planetary Physics*, 55(5): 501–512. — Systematic review of gravitational field definition, spherical harmonic expansion, and multipole expansion theory.

- Chao, B. F. & Shih, S. A., 2021, Multimultipole expansion: Unifying formalism for Earth and planetary gravitational dynamics, *Surveys in Geophysics*, 42: 803–838. — Complex-variable spherical harmonic representation.

- Trofimov, S. et al., 2020, Transfers from NRHOs to low-perilune orbits, *Acta Astronautica*, 167: 260–271. — Impact of irregular lunar gravity on low-perilune orbits.
