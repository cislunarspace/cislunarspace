---
title: Non-Spherical Gravity Perturbation
description: The additional gravitational acceleration caused by a celestial body's actual gravity field deviating from a uniform sphere, modelled by the spherical-harmonic series $\Phi = -\frac{\mu}{r}\sum_{\ell=0}^{\infty}\sum_{m=0}^{\ell}\left(\frac{R_e}{r}\right)^\ell P_{\ell m}(\sin\phi)[C_{\ell m}\cos m\lambda + S_{\ell m}\sin m\lambda]$. Covers zonal/tesseral/sectoral classification, the J2 term, Earth vs lunar gravity-field differences (mascons), and model-order selection across different cislunar orbital regimes.
keywords: non-spherical gravity perturbation, aspherical gravity, spherical harmonics, spherical harmonic expansion, zonal harmonics, tesseral harmonics, sectoral harmonics, J2, Earth oblateness, Earth oblateness perturbation, mascon, lunar gravity, gravity field model
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Non-Spherical Gravity Perturbation
  desc: Spherical harmonics, the J2 term, Earth and lunar gravity fields—a complete explanation.
  image: /logo.png
og:
  title: Non-Spherical Gravity Perturbation Explained | Term Definition
  description: The additional gravitational acceleration caused by a celestial body's actual gravity field deviating from a uniform sphere, modelled by the spherical-harmonic series. Covers zonal/tesseral/sectoral classification, the J2 term, Earth vs lunar gravity-field differences (mascons), and model-order selection across cislunar orbital regimes.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Non-Spherical Gravity Perturbation Explained | Term Definition
  description: The additional gravitational acceleration caused by a celestial body's actual gravity field deviating from a uniform sphere, modelled by the spherical-harmonic series. Covers zonal/tesseral/sectoral classification, the J2 term, Earth vs lunar gravity-field differences (mascons), and model-order selection across cislunar orbital regimes.
  image: /logo.png
permalink: /en/glossary/dynamics/non-spherical-gravity-perturbation/
---

# Non-Spherical Gravity Perturbation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Non-spherical gravity perturbation (also called aspherical gravity perturbation) is the additional gravitational acceleration caused by a celestial body's actual gravity field deviating from a perfect uniform sphere. A uniform sphere's gravity can be represented as a point-mass force (the Newton two-body problem). Real celestial bodies, however, are neither geometrically nor materially spherically symmetric—due to rotation, internal mass distributions, and surface topography—and the gravitational differences that result constitute non-spherical perturbations.

This is a conservative perturbation, expressible as the gradient of a gravity potential function $\mathbf{a} = \nabla U$, modelled by a **spherical-harmonic expansion** (Vallado 2022, Ch. 8.6.1):

$$
U(r, \phi, \lambda) = \frac{\mu}{r} \sum_{\ell=0}^{\infty} \sum_{m=0}^{\ell} \left(\frac{R_e}{r}\right)^{\ell} P_{\ell m}(\sin\phi) \left[ C_{\ell m} \cos m\lambda + S_{\ell m} \sin m\lambda \right]
$$

where $r$ is the distance to the body's centre of mass, $\phi$ is the geocentric latitude, $\lambda$ is the longitude, $R_e$ is the reference equatorial radius, $P_{\ell m}$ are the associated Legendre polynomials, and $C_{\ell m}$, $S_{\ell m}$ are dimensionless spherical-harmonic coefficients. The $\ell = 0$ term is the two-body gravity; the $\ell \geq 1$ terms constitute the non-spherical (perturbing) part. By convention, the $\ell = 2, m = 0$ term is written as $J_2 = -C_{2,0}$, with a positive sign indicating oblateness.

## Classification of Spherical-Harmonic Terms

According to the $(\ell, m)$ combination, the terms are classified into three types (Vallado 2022, Ch. 8.6.1):

- **Zonal harmonics** ($m = 0$): depend only on latitude, not longitude—on the sphere they form "zones of latitude." $J_2$ is the leading zonal harmonic, representing the equatorial bulge (oblateness); $J_3$ describes north-south asymmetry (the "pear shape"); $J_4, J_5, \dots$ describe higher-order latitudinal structure.

- **Tesseral harmonics** ($m \neq 0$ and $\ell \neq m$): form a "checkerboard" pattern on the sphere, varying with both latitude and longitude. Higher-order tesseral terms in Earth's field reflect large-scale mass anomalies such as continents and oceans.

- **Sectoral harmonics** ($\ell = m$): depend only on longitude, forming "longitude sectors" on the sphere.

## The J2 Term — The Dominant Oblateness Perturbation

$J_2$ ($\approx 1.0826 \times 10^{-3}$) is the largest term in the non-spherical field, describing Earth's equatorial bulge (the polar radius is about 21 km shorter than the equatorial radius). It produces two key secular effects on near-Earth orbits (Vallado 2022, Ch. 9.6.1):

$$
\dot{\Omega} = -\frac{3}{2} J_2 \frac{R_e^2}{a^2(1-e^2)^2} n \cos i \quad \text{(RAAN regression)}
$$

$$
\dot{\omega} = \frac{3}{2} J_2 \frac{R_e^2}{a^2(1-e^2)^2} n \left(2 - \frac{5}{2}\sin^2 i\right) \quad \text{(argument-of-perigee precession)}
$$

Engineering applications:

- **Sun-Synchronous Orbit (SSO)**: choose an inclination (approximately 98°) such that $\dot{\Omega} \approx 0.9856^{\circ}/\text{day}$ (Earth's orbital angular rate), keeping the orbital plane at a fixed orientation relative to the Sun.

- **Critical Inclination Orbit**: choose $i = 63.4^{\circ}$ or $116.6^{\circ}$ so that $\dot{\omega} = 0$, holding the perigee in a fixed direction (the Molniya orbit exploits this principle).

For cislunar libration-point orbits (halo, NRHO, DRO, etc.) the $J_2$ effect is comparatively minor—these orbits are dominated by three-body gravitation, and the relative-motion deviation from Earth oblateness is typically at the millimetre level, negligible in most analyses.

## Earth's Non-Spherical Gravity Field

Earth gravity-field models (EGM96, EGM2008, JGM-3, GGM series) are solved jointly from satellite altimetry, SLR, and gravimetry (GOCE, GRACE), with maximum expansion to $\ell_{max} = 2190$. For orbital mechanics, 70×70 (LEO high-precision) or 5×5 (cislunar) is usually sufficient (Vallado 2022, Ch. 8.6.1; Framework paper, 2023).

Reference ellipsoid parameters (WGS-84):

- Equatorial radius $R_e = 6\,378\,137$ m;

- Flattening reciprocal $1/f = 298.257\,223\,563$;

- $J_2 = 1.082\,63 \times 10^{-3}$;

- Leading zonal coefficients: $J_3 \approx -2.532 \times 10^{-6}$, $J_4 \approx -1.620 \times 10^{-6}$.

## The Moon's Non-Spherical Gravity Field

The Moon's gravity field differs significantly from Earth's (Vallado 2022, Ch. 8.6.1; Folta et al. 2010; LP-150Q model):

- **Far-side unknown**: Due to tidal locking, the Moon always shows the same face to Earth; the far-side field was, for a long time, inferred only indirectly from Apollo residuals. The GRAIL mission (2012) dramatically improved knowledge.

- **Mascons (mass concentrations)**: large positive gravity anomalies beneath major impact basins (Mare Imbrium, Mare Serenitatis, Mare Crisium, etc.) create significant "gravity wells" that perturb low-orbiting satellites. Post-GRAIL models (GRGM-1200A, etc.) expand to degree 1200.

- **Basin positive anomalies, crater negative anomalies**: basins host positive mascons, while smaller craters often exhibit a "central peak plus negative anomaly ring" structure.

- **Overall higher roughness**: without atmosphere, oceans, or plate tectonics to "round off" the field, the Moon's gravity is inherently rougher.

Engineering impact: the orbital lifetime of low lunar orbit (LLO) satellites is strongly affected by mascons; many LLO orbits decay within days due to mascon perturbations—this is one of the key reasons DROs and NRHOs are chosen as long-term orbits.

## Model Selection (Cislunar)

Recommended model orders by orbital regime (Vallado 2022, Ch. 8; Framework paper, 2023):

| Orbit | Earth Gravity Degree/Order | Lunar Gravity Degree/Order |
|-------|--------------------------|---------------------------|
| LEO high-precision OD | 70×70 or higher | N/A |
| GEO / MEO | 8×8–20×20 | N/A |
| Earth-Moon transfer (high fidelity) | 8×8–20×20 | 20×20–50×50 |
| Cislunar debris OD | 5×5 | Optional (point-mass proxy) |
| Low Lunar Orbit (LLO) | N/A | 50×50 or higher |
| Earth-Moon libration point | 4×4 | 4×4 |

The spherical-harmonic expansion converges poorly near the lunar far-side and poles; for precise LLO orbit determination, auxiliary **point-mass models** are often used as a supplement.

## Related Concepts

- [Orbital Perturbations](/en/glossary/fundamentals/orbital-perturbations/)

- [Atmospheric Drag](/en/glossary/dynamics/atmospheric-drag/)

- [Solar Radiation Pressure (SRP)](/en/glossary/dynamics/srp/)

- [Earth Gravity Field Model](/en/glossary/fundamentals/gravity-field-model/)

- [Lunar Gravity Field Model](/en/glossary/fundamentals/gravity-field-model/)

- [Lunar Gravity Field](/en/glossary/fundamentals/gravity-field-model/)

- [Gravity Field Model](/en/glossary/fundamentals/gravity-field-model/)

- [Adams-Cowell Integrator](/en/glossary/dynamics/adams-cowell-integrator/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

## References

- Vallado, 2022, Fundamentals of Astrodynamics and Applications (Ch. 8.6.1 Gravity Field of a Central Body—derivation of spherical-harmonic expansion, zonal/tesseral/sectoral classification, the J2 term; Ch. 9.6.1—secular J2 effect formulas; Ch. 8.6.3—the Moon's distinctive gravity field).

- A model framework for high-accuracy orbit determination and propagation of cislunar space debris, 2023 (cislunar-debris OD: Earth 5×5 harmonics plus lunar point-mass empirical basis).

- Peng & Zhang, 2016, Review of Earth-Moon transfer trajectory schemes for manned lunar landing (Earth-Moon transfer mechanical-model configuration).

- Folta et al., 2010, Earth-Moon libration point orbit stationkeeping (negligible impact of $J_2$ on Earth-Moon libration-point orbits).
